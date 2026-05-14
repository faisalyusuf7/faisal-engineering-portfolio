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
    <a class="project-card" href="project.html?slug=${project.slug}" data-category="${project.category}">
      <img src="${project.thumbnail}" alt="${project.title}" loading="lazy">
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
  renderProjectGrid("[data-featured-projects]", projects.slice(0, 3));
}

function renderAllProjects() {
  const grid = qs("[data-project-grid]");
  const filters = qs("[data-project-filters]");
  if (!grid || !filters) return;

  const categories = ["All", ...new Set(projects.map((project) => project.category))];
  filters.innerHTML = categories
    .map(
      (category, index) =>
        `<button class="filter-pill ${index === 0 ? "is-active" : ""}" type="button" data-filter="${category}">${category}</button>`
    )
    .join("");

  renderProjectGrid("[data-project-grid]");

  filters.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    qsa(".filter-pill", filters).forEach((pill) => pill.classList.remove("is-active"));
    button.classList.add("is-active");

    const filter = button.dataset.filter;
    const filtered = filter === "All" ? projects : projects.filter((project) => project.category === filter);
    grid.innerHTML = filtered.map(projectCard).join("");
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
  const project = bySlug(params.get("slug"));
  document.title = `${project.title} | ${profile.name}`;

  mount.innerHTML = `
    <section class="project-hero">
      <img src="${project.hero}" alt="${project.title}">
      <div class="project-hero__overlay"></div>
      <div class="project-hero__content shell">
        <a class="back-link" href="projects.html">Back to projects</a>
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

    ${project.youtubeId ? youtubeSection(project) : ""}

    <section class="section shell">
      <div class="section-heading">
        <p class="eyebrow">Media</p>
        <h2>Project Gallery</h2>
      </div>
      <div class="media-grid">
        ${project.gallery
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
          src="https://www.youtube.com/embed/${project.youtubeId}"
          title="${project.title} video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </div>
    </section>
  `;
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

renderProfileText();
renderFeaturedProjects();
renderAllProjects();
renderProjectPage();
renderSkills();
setupLightbox();
setupMobileNav();
})();
