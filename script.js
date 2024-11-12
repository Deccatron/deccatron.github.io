document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

document.getElementById('downloadBtn').addEventListener('click', function(event) {
    event.preventDefault();
    fetch('https://api.github.com/repos/danlachoi/RezWare/releases/latest')
        .then(response => response.json())
        .then(data => {
            const downloadUrl = data.assets[0].browser_download_url;
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = '';
            link.click();
        })
        .catch(error => {
            console.error('Error fetching the release data:', error);
        });
});

// Track mouse position and update custom properties
document.addEventListener('mousemove', (event) => {
    const mouseX = (event.clientX / window.innerWidth) * 100;
    const mouseY = (event.clientY / window.innerHeight) * 100;

    // Update the CSS variables dynamically based on mouse position
    document.documentElement.style.setProperty('--mouse-x', `${mouseX}%`);
    document.documentElement.style.setProperty('--mouse-y', `${mouseY}%`);
});
