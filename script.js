// Wait for the page to load
window.addEventListener('load', function() {
    // Hide the loading overlay
    const loadingOverlay = document.getElementById('loading-overlay');
    loadingOverlay.style.opacity = '0';
    loadingOverlay.style.visibility = 'hidden';

    // Show the main content
    const mainContent = document.getElementById('main-content');
    mainContent.style.opacity = '1';
});

function downloadLatestVersion() {
    fetch('https://raw.githubusercontent.com/Kob123678/PulseX-v1/main/pulsex.txt')
        .then(response => response.text())
        .then(url => window.open(url.trim(), '_blank'));
}

function downloadOpenSource() {
    fetch('https://raw.githubusercontent.com/Kob123678/PulseX-v1/main/source.txt')
        .then(response => response.text())
        .then(url => window.open(url.trim(), '_blank'));
}

function moreInformation() {
    window.open('https://github.com/Kob123678/PulseX-v1', '_blank');
}

// Theme toggle functionality
const themeToggleSwitch = document.getElementById('themeToggleSwitch');

const currentTheme = localStorage.getItem("theme");

if (currentTheme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
    themeToggleSwitch.checked = false;
} else {
    document.documentElement.setAttribute("data-theme", "dark");
    themeToggleSwitch.checked = true;
}

themeToggleSwitch.addEventListener('change', () => {
    const theme = themeToggleSwitch.checked ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
});
