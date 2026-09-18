import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const out = path.join(root, 'dist');
const context = { window: {} };
vm.runInNewContext(await readFile(path.join(root, 'assets/js/data.js'), 'utf8'), context);
const { projects } = context.window.portfolioData;
const routes = ['/', '/projects/', '/about/', '/resume/', '/contact/', ...projects.map(p => `/projects/${p.slug}/`)];
for (const route of routes) {
  const html = await readFile(path.join(out, route, 'index.html'), 'utf8');
  assert(html.includes(`href="https://mechengrfaisal.com${route}"`), `Canonical: ${route}`);
  for (const [, url] of html.matchAll(/(?:href|src)="(\/[^"#?]*)/g)) {
    assert(!url.endsWith('.html'), `Old navigation: ${url}`);
    await access(path.join(out, url, url.endsWith('/') ? 'index.html' : ''));
  }
}
async function checkAssets(value) {
  if (typeof value === 'string' && value.startsWith('/assets/')) await access(path.join(out, value));
  else if (value && typeof value === 'object') for (const item of Object.values(value)) await checkAssets(item);
}
await checkAssets(context.window.portfolioData);
for (const name of ['about', 'resume', 'contact', 'projects', 'project']) {
  const html = await readFile(path.join(out, `${name}.html`), 'utf8');
  const script = html.match(/<script>(.*?)<\/script>/s)[1];
  let destination;
  vm.runInNewContext(script, { URLSearchParams, location: { search: '?slug=pentagon-robot&utm_source=test', hash: '#media', replace: value => destination = value } });
  assert.equal(destination, name === 'project' ? '/projects/pentagon-robot/?utm_source=test#media' : `/${name}/?slug=pentagon-robot&utm_source=test#media`);
}
const source = await readFile(path.join(root, 'assets/js/site.js'), 'utf8');
const nativeFunctions = source.slice(source.indexOf('function escapeMarkup'), source.indexOf('function youtubeSection'));
const videoContext = {};
vm.runInNewContext(`${nativeFunctions}; result = nativeVideoSection({title: 'Test & demo', video: {sources: [{src: '/demo.mp4', type: 'video/mp4'}], captions: [{src: '/captions.vtt', language: 'en', label: 'English', default: true}]}});`, videoContext);
assert(videoContext.result.includes('<video controls playsinline preload="none"'));
assert(videoContext.result.includes('Test &amp; demo'));
assert(videoContext.result.includes('kind="captions"'));
assert(!videoContext.result.includes('autoplay'));
console.log(`Verified ${routes.length} pages, local assets, legacy redirects, and native video markup.`);
