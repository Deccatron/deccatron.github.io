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
