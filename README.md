# Faisal Yusuf Ughratdar Portfolio

Static engineering portfolio for GitHub Pages.

## Local Preview

Run `node scripts/build.mjs`, then `python -m http.server 8765 --directory dist`.
Open http://localhost:8765/. Node 22+ is recommended; no npm packages are required.

## Deploy

Push this repository to GitHub and enable GitHub Pages using GitHub Actions. The workflow builds and publishes only `dist/`. This output can also be hosted by another static hosting provider.

Edit the root HTML source pages and shared assets. The build creates `/about/`, `/resume/`, `/contact/`, `/projects/`, and `/projects/<slug>/` pages, plus a sitemap. Old `.html` pages redirect in the browser; GitHub Pages does not provide configurable HTTP 301 redirects. Project redirects preserve the slug destination, extra query parameters, and fragment.

## Editing Projects

Project content lives in `assets/js/data.js`. Add media under `assets/media/projects/<project-name>/` and reference it from the project object.

Use root-relative asset URLs such as `/assets/media/...` so nested pages work. Adding a project to `data.js` automatically creates its clean URL on the next build.

## Native video

Projects can use a `video` object instead of YouTube. Native video takes precedence when sources are present; existing `youtubeId` values remain supported.

```js
video: {
  title: "Robot demonstration",
  poster: "/assets/media/projects/pentagon-robot/video-poster.jpg",
  sources: [{ src: "https://media.example.com/robot.mp4", type: "video/mp4" }],
  captions: [{ src: "/assets/media/projects/pentagon-robot/captions.vtt", language: "en", label: "English", default: true }],
},
```

Replace the example URLs with real files. Use MP4/H.264 for broad compatibility, optionally adding WebM sources. The player has controls, inline mobile playback, an optional poster and captions, and no autoplay or initial video preload. Cross-origin caption files require appropriate CORS headers; same-origin captions are simplest.

For a few short clips, optimized local files work. For a large video library, use a video CDN/streaming service and keep the website separate from video delivery. Adaptive HLS/DASH streaming requires a compatible player integration beyond this MP4/WebM player.

High-quality CSS, Web Animations API, and WebGL animations can run on this static architecture. Load heavier animation modules only on pages that need them, optimize media, and respect `prefers-reduced-motion`. The existing motion already observes this preference.
