import { mkdir, readFile, writeFile, cp, rm } from 'node:fs/promises';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { createHash } from 'node:crypto';

const root = fileURLToPath(new URL('../', import.meta.url));
const out = path.join(root, 'dist');
const origin = 'https://mechengrfaisal.com';
const context = { window: {} };
vm.runInNewContext(await readFile(path.join(root, 'assets/js/data.js'), 'utf8'), context);
const { projects, profile } = context.window.portfolioData;
const escape = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const routes = ['projects', 'about', 'resume', 'contact'];
const urls = ['/'];
const assetVersions = new Map();
for (const asset of ['/assets/css/styles.css', '/assets/js/theme.js', '/assets/js/data.js', '/assets/js/site.js']) {
  const content = await readFile(path.join(root, asset));
  assetVersions.set(asset, createHash('sha256').update(content).digest('hex').slice(0, 12));
}

async function write(file, content) {
  if (file.endsWith('.html')) {
    for (const [asset, version] of assetVersions) {
      content = content.replaceAll(`"${asset}"`, `"${asset}?v=${version}"`);
    }
  }
  const target = path.join(out, file);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, content);
}

function redirect(destination, dynamic = '') {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Page moved</title><link rel="canonical" href="${origin}${destination}">${dynamic ? '' : `<meta http-equiv="refresh" content="0;url=${destination}">`}<script>${dynamic || `location.replace(${JSON.stringify(destination)} + location.search + location.hash);`}</script></head><body><a href="${destination}">Continue to the page</a></body></html>`;
}

// Only generated output is cleared. Source pages and media are never modified.
await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
await cp(path.join(root, 'assets'), path.join(out, 'assets'), { recursive: true });
await write('index.html', await readFile(path.join(root, 'index.html'), 'utf8'));
for (const file of ['robots.txt', '.nojekyll']) {
  await cp(path.join(root, file), path.join(out, file));
}
for (const route of routes) {
  await write(`${route}/index.html`, await readFile(path.join(root, `${route}.html`), 'utf8'));
  await write(`${route}.html`, redirect(`/${route}/`));
  urls.push(`/${route}/`);
}
const template = await readFile(path.join(root, 'project.html'), 'utf8');
const slugs = new Set();
for (const project of projects) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.slug) || slugs.has(project.slug)) throw new Error(`Invalid or duplicate slug: ${project.slug}`);
  slugs.add(project.slug);
  const route = `/projects/${project.slug}/`;
  const title = escape(`${project.title} | ${profile.name}`);
  const description = escape(project.summary);
  const html = template
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${description}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${title}`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${description}`)
    .replace(/(<meta property="og:image" content=")[^"]*/, `$1${escape(new URL(project.hero, origin).href)}`)
    .replaceAll(`${origin}/project.html`, `${origin}${route}`)
    .replace('data-project-page', `data-project-page data-project-slug="${project.slug}"`);
  await write(`${route.slice(1)}index.html`, html);
  urls.push(route);
}
await write('project.html', redirect('/projects/', `const slug = new URLSearchParams(location.search).get('slug'); const slugs = ${JSON.stringify([...slugs])}; const params = new URLSearchParams(location.search); params.delete('slug'); const query = params.toString(); location.replace((slugs.includes(slug) ? '/projects/' + slug + '/' : '/projects/') + (query ? '?' + query : '') + location.hash);`));
await write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(url => `  <url><loc>${origin}${url}</loc></url>`).join('\n')}\n</urlset>\n`);
console.log(`Built ${urls.length} clean routes and legacy redirects in dist/.`);
