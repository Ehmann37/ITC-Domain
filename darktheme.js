const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
    }
});


const themeToggle = document.getElementById('themeToggle');

// Initial theme state
let isDarkMode = false;

themeToggle.addEventListener('click', () => {
    if (isDarkMode) {
        // Switch to light mode
        document.body.classList.remove('dark-mode');
        themeToggle.src = "moon.png"; // Path to sun image
        themeToggle.alt = "Dark Mode";
    } else {
        // Switch to dark mode
        document.body.classList.add('dark-mode');
        themeToggle.src = "sun.png"; // Path to moon image
        themeToggle.alt = "Light Mode";
    }
    isDarkMode = !isDarkMode; // Toggle the state
});