# Portfolio Context

This file preserves the working context for future Codex turns.

## Goal

Build a GitHub Pages-ready engineering portfolio for Faisal Yusuf Ughratdar, inspired by https://thanhvtran.com/ but not copied. The reference site uses a full-photo hero, top navigation, narrative summary, experience timeline, filtered project gallery, project detail pages, resume/about/contact pages, and project media including photos and YouTube embeds.

## Current Stack

- Static HTML/CSS/JavaScript. No package install or build step required.
- Entry pages:
  - `index.html`
  - `projects.html`
  - `project.html?slug=<project-slug>`
  - `resume.html`
  - `about.html`
  - `contact.html`
- Shared project/profile data lives in `assets/js/data.js`.
- Shared rendering and interactions live in `assets/js/site.js`.
- Shared styles live in `assets/css/styles.css`.
- GitHub Pages workflow lives in `.github/workflows/pages.yml`.

## Profile

- Name: Faisal Yusuf Ughratdar
- Location: Chicago, IL
- Education: B.S. Mechanical Engineering, University of Illinois Chicago, graduated May 2026
- Email: `faisalyusufd@gmail.com`
- LinkedIn: `https://linkedin.com/in/mechengineerfaisal`
- Resume PDF: `assets/media/resume/faisal-ughratdar-resume.pdf`

## Project Data

Projects are currently rendered from `assets/js/data.js`.

- `pentagon-robot`: robotics flagship project, uses expo photo as hero.
- `ansys-exhaust-manifold`: ANSYS thermal/structural simulation project.
- `cantilever-bridge`: CAD drawing and strain/bridge analysis project.
- `fidget-toy`: CAD and FDM printed prototype.
- `phone-stand`: CAD product design concept.

To add a YouTube video to any project, add a `youtubeId` property in `assets/js/data.js`, for example:

```js
youtubeId: "VIDEO_ID_HERE",
```

The project detail page will automatically render the embedded player when this field exists.

## Asset Organization

Original user folders are preserved. Web-facing media has been copied and renamed into:

- `assets/media/projects/pentagon-robot/`
- `assets/media/projects/ansys-exhaust-manifold/`
- `assets/media/projects/cantilever-bridge/`
- `assets/media/projects/fidget-toy/`
- `assets/media/projects/phone-stand/`
- `assets/media/resume/`

Keep adding public web assets to `assets/media/...` with lowercase, hyphenated names.

## Design Notes

- Visual direction: industrial, clean, engineering-focused, with red/blue/gold accents.
- Hero uses a real project/expo photo.
- Cards stay at 8px radius or less.
- No external dependencies, fonts, or CDNs.
- The site supports local PDF links, image galleries, lightbox viewing, project filters, and conditional YouTube embeds.

## Deployment Notes

The repo can be deployed to GitHub Pages either by:

1. Creating a GitHub repo, pushing this folder, and enabling GitHub Pages with GitHub Actions.
2. Or using GitHub Desktop/GitHub app to publish the folder, then selecting the GitHub Pages workflow.

The workflow uploads the static site directly from the repository root.
