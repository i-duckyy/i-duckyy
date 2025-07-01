const toggle = document.getElementById('theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const setTheme = (dark) => {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  toggle.textContent = dark ? '☀️' : '🌙';
};
let darkMode = localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && prefersDark);
setTheme(darkMode);
toggle.onclick = () => {
  darkMode = !darkMode;
  setTheme(darkMode);
  localStorage.setItem('theme', darkMode ? 'dark' : 'light');
};