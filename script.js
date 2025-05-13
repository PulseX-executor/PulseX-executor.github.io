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
    alert("PulseX has been discontinued and is no longer available for download.");
}

function downloadOpenSource() {
    fetch('https://raw.githubusercontent.com/PulseX-executor/PulseX-executor.github.io/main/links/source.txt')
        .then(response => response.text())
        .then(url => {
            if (url.trim()) {
                window.open(url.trim(), '_blank');
            } else {
                alert("Archive link is no longer available. This project has been discontinued.");
            }
        })
        .catch(error => {
            console.error('Error fetching source URL:', error);
            alert("Failed to access archive link. This project has been discontinued.");
        });
}

function moreInformation() {
    window.open('https://github.com/nvkob1/Pulsex-v1', '_blank');
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
