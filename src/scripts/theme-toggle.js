const toggleBtn = document.getElementById('toggle-theme');

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  toggleBtn.textContent = theme === 'dark' ? '☀️ Modo Claro' : '🌙 Modo Escuro';
}

toggleBtn.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
});

// Ao carregar a página
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);