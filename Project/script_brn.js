document.addEventListener('DOMContentLoaded', function () {
    function toggleVideoAndText() {
        const videoContainer = document.getElementById('video-container');
        const enjoyText = document.getElementById('enjoy-text');
        const toggleButton = document.getElementById('toggle-video-button');

        if (videoContainer && enjoyText && toggleButton) {
            if (videoContainer.style.display === 'none') {
                videoContainer.style.display = 'block';
                enjoyText.style.display = 'block';
                toggleButton.textContent = '   Hide preformance video   ';
            } else {
                videoContainer.style.display = 'none';
                enjoyText.style.display = 'none';
                toggleButton.textContent = '   Watch performance video   ';
            }
        }
    }

    const toggleVideoButton = document.getElementById('toggle-video-button');

    if (toggleVideoButton) {
        toggleVideoButton.addEventListener('click', toggleVideoAndText);
    }
});