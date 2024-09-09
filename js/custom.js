const carouselDiv = document.getElementById("carousel-performances");
// var carouselBootstrap = bootstrap.Carousel.getOrCreateInstance(carouselDiv);

// This is the index of the active player.
var carouselActiveIndex = 0;
// This is the array of all players, one for each video.
var carouselPlayers = [];

// Initialize players.
function onYouTubeIframeAPIReady() {
    let iframes = carouselDiv.getElementsByTagName("iframe");
    for (let iframe of iframes) {
        let player = new YT.Player(iframe.id);
        carouselPlayers.push(player);
    }

    carouselDiv.addEventListener("slid.bs.carousel", (event) => {
        // On slide (end of slide), pause the current video and advance to previous/next video.
        carouselPlayers[carouselActiveIndex].pauseVideo();
        if (event.direction == "right") carouselActiveIndex -= 1;
        else carouselActiveIndex += 1;

        // Enforce 0 <= carouselActiveIndex < carouselPlayers.length.
        if (carouselActiveIndex < 0) carouselActiveIndex += carouselPlayers.length;
        if (carouselActiveIndex >= carouselPlayers.length)
            carouselActiveIndex -= carouselPlayers.length;
    });
}

// Display image logo when video logo is done playing
var imageLogo = document.getElementById('image-logo');
var videoLogo = document.getElementById('video-logo');
videoLogo.addEventListener('ended', function() {
    imageLogo.style.display = 'inline';
    setTimeout(function() {
        videoLogo.style.display = 'none';
    }, 100);
}, false);