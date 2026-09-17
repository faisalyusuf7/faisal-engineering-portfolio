(function () {
  let theme = 'light';
  try { theme = localStorage.getItem('portfolio-theme') === 'dark' ? 'dark' : 'light'; } catch (_) {}
  document.documentElement.dataset.theme = theme;
})();
