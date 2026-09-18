(function () {
const { projects, profile } = window.portfolioData;

function qs(selector, root = document) {
  return root.querySelector(selector);
}

function qsa(selector, root = document) {
  return [...root.querySelectorAll(selector)];
}

function bySlug(slug) {
  return projects.find((project) => project.slug === slug) || projects[0];
}

function projectCard(project) {
  return `
    <a class="project-card ${project.thumbnail ? "" : "project-card--plain"}" href="/projects/${project.slug}/" data-category="${project.category}">
      ${project.thumbnail ? `<div class="project-card__image"><img src="${project.thumbnail}" alt="${project.title}" loading="lazy"><span class="card-arrow" aria-hidden="true">↗</span></div>` : ""}
      <span class="project-card__category">${project.category}</span>
      <div class="project-card__body">
        <p>${project.year}</p>
        <h3>${project.title}</h3>
        <span>${project.subtitle}</span>
      </div>
    </a>
  `;
}

function renderProjectGrid(selector, list = projects) {
  const grid = qs(selector);
  if (!grid) return;
  grid.innerHTML = list.map(projectCard).join("");
}

function renderFeaturedProjects() {
  renderProjectGrid("[data-featured-projects]", ["pentagon-robot", "ansys-exhaust-manifold", "fidget-toy"].map(bySlug));
}

function renderAllProjects() {
  const grid = qs("[data-project-grid]");
  const filters = qs("[data-project-filters]");
  if (!grid || !filters) return;

  const categories = ["All", ...new Set(projects.map((project) => project.category))];
  filters.innerHTML = categories
    .map(
      (category, index) =>
        `<button class="filter-pill ${index === 0 ? "is-active" : ""}" type="button" aria-pressed="${index === 0}" data-filter="${category}">${category}</button>`
    )
    .join("");

  renderProjectGrid("[data-project-grid]");

  filters.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    qsa(".filter-pill", filters).forEach((pill) => { pill.classList.remove("is-active"); pill.setAttribute("aria-pressed", "false"); });
    button.setAttribute("aria-pressed", "true");
    button.classList.add("is-active");

    const filter = button.dataset.filter;
    const filtered = filter === "All" ? projects : projects.filter((project) => project.category === filter);
    grid.innerHTML = filtered.map(projectCard).join("");
    animateCards(grid);
  });
}

function renderSkills() {
  const target = qs("[data-skills]");
  if (!target) return;
  target.innerHTML = profile.skills.map((skill) => `<span>${skill}</span>`).join("");
}

function renderProfileText() {
  qsa("[data-profile-name]").forEach((node) => (node.textContent = profile.name));
  qsa("[data-profile-title]").forEach((node) => (node.textContent = profile.title));
  qsa("[data-profile-summary]").forEach((node) => (node.textContent = profile.summary));
  qsa("[data-profile-email]").forEach((node) => {
    node.textContent = profile.email;
    node.setAttribute("href", `mailto:${profile.email}`);
  });
  qsa("[data-profile-linkedin]").forEach((node) => {
    node.setAttribute("href", profile.linkedin);
  });
  qsa("[data-profile-resume]").forEach((node) => {
    node.setAttribute("href", profile.resume);
  });
}

function renderProjectPage() {
  const mount = qs("[data-project-page]");
  if (!mount) return;

  const params = new URLSearchParams(window.location.search);
  const project = bySlug(mount.dataset.projectSlug || params.get("slug"));
  document.title = `${project.title} | ${profile.name}`;
  const canonical = `https://mechengrfaisal.com/projects/${encodeURIComponent(project.slug)}/`;
  qs('link[rel="canonical"]').href = canonical;
  qs('meta[property="og:url"]').content = canonical;
  qs('meta[property="og:title"]').content = document.title;
  qs('meta[name="description"]').content = project.summary;
  qs('meta[property="og:description"]').content = project.summary;
  if (project.hero) qs('meta[property="og:image"]').content = new URL(project.hero, 'https://mechengrfaisal.com/').href;
  const projectGallery = project.gallery || [];

  mount.innerHTML = `
    <section class="project-hero ${project.hero ? "" : "project-hero--no-media"}">
      ${project.hero ? `<img src="${project.hero}" alt="${project.title}">` : ""}
      ${project.hero ? `<div class="project-hero__overlay"></div>` : ""}
      <div class="project-hero__content shell">
        <a class="back-link" href="/projects/">Back to projects</a>
        <p>${project.category} / ${project.year}</p>
        <h1>${project.title}</h1>
        <span>${project.subtitle}</span>
      </div>
    </section>

    <section class="section shell project-story">
      <div class="story-copy">
        <p class="eyebrow">${project.role}</p>
        <h2>${project.summary}</h2>
        <div class="story-columns">
          <article>
            <h3>Challenge</h3>
            <p>${project.challenge}</p>
          </article>
          <article>
            <h3>Approach</h3>
            <p>${project.approach}</p>
          </article>
          <article>
            <h3>Outcome</h3>
            <p>${project.outcome}</p>
          </article>
        </div>
      </div>
      <aside class="project-panel">
        <h2>Top Skills Used</h2>
        <div class="tag-list">${project.skills.map((skill) => `<span>${skill}</span>`).join("")}</div>
        <div class="stat-stack">
          ${project.stats.map((stat) => `<div><strong>${stat.value}</strong><span>${stat.label}</span></div>`).join("")}
        </div>
        ${(project.documents || [])
          .map((document) => `<a class="button button--dark" href="${document.href}" target="_blank" rel="noreferrer">${document.label}</a>`)
          .join("")}
      </aside>
    </section>

    ${project.video?.sources?.length ? nativeVideoSection(project) : project.youtubeId ? youtubeSection(project) : ""}

    ${projectGallery.length ? `
      <section class="section shell">
      <div class="section-heading">
        <p class="eyebrow">Media</p>
        <h2>Project Gallery</h2>
      </div>
      <div class="media-grid">
        ${projectGallery
          .map(
            (image) => `
              <button class="media-tile" type="button" data-lightbox="${image.src}" data-alt="${image.alt}">
                <img src="${image.src}" alt="${image.alt}" loading="lazy">
              </button>
            `
          )
          .join("")}
      </div>
    </section>
    ` : ""}
  `;
}

function escapeMarkup(value) {
  return String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
}

function nativeVideoSection(project) {
  const video = project.video;
  return `
    <section class="section shell video-section">
      <div class="section-heading"><p class="eyebrow">Video</p><h2>${escapeMarkup(video.title || 'Build Footage')}</h2></div>
      <div class="video-frame">
        <video controls playsinline preload="none" aria-label="${escapeMarkup(project.title)} video"${video.poster ? ` poster="${escapeMarkup(video.poster)}"` : ''}>
          ${video.sources.map(source => `<source src="${escapeMarkup(source.src)}" type="${escapeMarkup(source.type)}">`).join('')}
          ${(video.captions || []).map(track => `<track kind="captions" src="${escapeMarkup(track.src)}" srclang="${escapeMarkup(track.language)}" label="${escapeMarkup(track.label)}"${track.default ? ' default' : ''}>`).join('')}
          Your browser does not support embedded video.
        </video>
      </div>
      <p><a href="${escapeMarkup(video.sources[0].src)}">Open video file</a></p>
    </section>
  `;
}

function youtubeSection(project) {
  return `
    <section class="section shell video-section">
      <div class="section-heading">
        <p class="eyebrow">Video</p>
        <h2>Build Footage</h2>
      </div>
      <div class="video-frame">
        <iframe
          data-scroll-video
          src="https://www.youtube.com/embed/${project.youtubeId}?enablejsapi=1&mute=1&playsinline=1&rel=0&origin=${encodeURIComponent(window.location.origin)}"
          loading="lazy" title="${project.title} video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </div>
    </section>
  `;
}

function setupScrollVideo() {
  const iframe = qs('[data-scroll-video]');
  if (!iframe || !('IntersectionObserver' in window)) return;

  let player;
  let ready = false;
  let inView = false;
  const shouldPlay = () => inView && !document.hidden;
  function syncPlayback() {
    if (!ready) return;
    if (shouldPlay()) player.playVideo();
    else player.pauseVideo();
  }

  // Observe the wrapper so YouTube's iframe initialization cannot detach the target.
  const observer = new IntersectionObserver(([entry]) => {
    const visible = entry.isIntersecting && entry.intersectionRatio >= 0.35;
    if (visible === inView) return;
    inView = visible;
    syncPlayback();
  }, { threshold: [0, 0.35], rootMargin: '-88px 0px 0px 0px' });
  observer.observe(iframe.parentElement);
  document.addEventListener('visibilitychange', syncPlayback);
  window.addEventListener('pagehide', () => { if (ready) player.pauseVideo(); });
  window.addEventListener('pageshow', syncPlayback);

  function initializePlayer() {
    player = new window.YT.Player(iframe, {
      events: {
        onReady(event) {
          player = event.target;
          player.mute();
          ready = true;
          syncPlayback();
        },
        onStateChange(event) {
          // Catch playback that begins after the visitor has already scrolled away.
          if (event.data === window.YT.PlayerState.PLAYING && !shouldPlay()) {
            event.target.pauseVideo();
          }
        },
      },
    });
  }

  if (window.YT && window.YT.Player) initializePlayer();
  else {
    window.onYouTubeIframeAPIReady = initializePlayer;
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(script);
  }
}

function setupLightbox() {
  document.addEventListener("click", (event) => {
    const tile = event.target.closest("[data-lightbox]");
    if (!tile) return;

    const dialog = document.createElement("dialog");
    dialog.className = "lightbox";
    dialog.innerHTML = `
      <button type="button" aria-label="Close image">x</button>
      <img src="${tile.dataset.lightbox}" alt="${tile.dataset.alt || ""}">
    `;
    document.body.appendChild(dialog);
    dialog.showModal();
    qs("button", dialog).addEventListener("click", () => dialog.close());
    dialog.addEventListener("close", () => dialog.remove());
  });
}

function setupMobileNav() {
  const toggle = qs("[data-nav-toggle]");
  const nav = qs("[data-nav]");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

function animateCards(grid) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  qsa('.project-card', grid).forEach((card, index) => {
    if (!card.animate) return;
    card.animate([
      { opacity: 0, transform: 'translateY(18px)' },
      { opacity: 1, transform: 'translateY(0)' },
    ], { duration: 440, delay: Math.min(index, 5) * 55, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'backwards' });
  });
}

function setupMotion() {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const header = qs('.site-header');
  const progress = document.createElement('div');
  progress.className = 'reading-progress';
  progress.setAttribute('aria-hidden', 'true');
  header.appendChild(progress);

  let scheduled = false;
  function updateScroll() {
    scheduled = false;
    const range = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${range > 0 ? Math.min(1, Math.max(0, window.scrollY / range)) : 0})`;
    header.classList.toggle('is-scrolled', window.scrollY > 20);
  }
  function scheduleScroll() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(updateScroll);
  }
  window.addEventListener('scroll', scheduleScroll, { passive: true });
  window.addEventListener('resize', scheduleScroll);
  window.addEventListener('load', scheduleScroll);
  updateScroll();

  // Animate only at entry; content remains visible if scripts or observers fail.
  let observer;
  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        if (reducedMotion.matches || !entry.target.animate) return;
        entry.target.animate([
          { opacity: 0, transform: 'translateY(22px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ], { duration: 600, easing: 'cubic-bezier(.2,.7,.2,1)' });
      });
    }, { threshold: 0.08 });
    qsa('.hero-copy, .hero-drawing, .section-heading, .intro-copy, .signal-board, .timeline-item, .project-card, .certification, .closing, .story-columns article, .project-panel').forEach(node => observer.observe(node));
  }

  const drawing = qs('.hero-drawing');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  if (drawing) {
    drawing.addEventListener('pointermove', event => {
      if (reducedMotion.matches || !finePointer.matches) return;
      const bounds = drawing.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      drawing.style.setProperty('--tilt-x', `${-y * 4}deg`);
      drawing.style.setProperty('--tilt-y', `${x * 4}deg`);
    });
    const resetTilt = () => {
      drawing.style.removeProperty('--tilt-x');
      drawing.style.removeProperty('--tilt-y');
    };
    drawing.addEventListener('pointerleave', resetTilt);
    drawing.addEventListener('pointercancel', resetTilt);
    reducedMotion.addEventListener('change', resetTilt);
  }
  reducedMotion.addEventListener('change', () => {
    if (reducedMotion.matches) document.getAnimations().forEach(animation => animation.cancel());
  });
}

function setupTheme() {
  const button = qs('[data-theme-toggle]');
  function update() {
    const dark = document.documentElement.dataset.theme === 'dark';
    button.innerHTML = `${dark ? 'Light' : 'Dark'} <span aria-hidden="true">◐</span>`;
    button.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} mode`);
    button.setAttribute('aria-pressed', String(dark));
  }
  button.addEventListener('click', () => {
    const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('portfolio-theme', theme); } catch (_) {}
    update();
  });
  update();
}
setupTheme();
renderProfileText();
renderFeaturedProjects();
renderAllProjects();
renderProjectPage();
setupScrollVideo();
renderSkills();
setupLightbox();
setupMobileNav();
setupMotion();
})();
