function getTheme() {
    const theme = localStorage.getItem('theme');
    return theme || 'dark-theme';
}

function setTheme(theme) {
    const classList = document.documentElement.classList;
    localStorage.setItem('theme', theme);
    classList.add(theme);
    classList.remove(theme === 'light-theme' ? 'dark-theme' : 'light-theme');
}

function toggleTheme() {
    const theme = getTheme();
    setTheme(theme === 'light-theme' ? 'dark-theme' : 'light-theme');
}

function initTheme() {
    setTheme(getTheme());
}
