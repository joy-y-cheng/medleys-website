// Display image logo when video logo is done playing
var imageLogo = document.getElementById('image-logo');
var videoLogo = document.getElementById('video-logo');
videoLogo.addEventListener('ended', function() {
    imageLogo.style.display = 'inline';
    setTimeout(function() {
        videoLogo.style.display = 'none';
    }, 100);
}, false);
