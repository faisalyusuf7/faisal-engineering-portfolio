(function () {
  if (location.protocol !== 'file:' && location.pathname.endsWith('/index.html')) {
    history.replaceState(null, '', location.pathname.slice(0, -10) + location.search + location.hash);
  }
  let theme = 'light';
  try { theme = localStorage.getItem('portfolio-theme') === 'dark' ? 'dark' : 'light'; } catch (_) {}
  document.documentElement.dataset.theme = theme;
})();
