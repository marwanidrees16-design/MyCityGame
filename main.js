var player = videojs('my-video');

function playChannel(url, name) {
    const modal = document.getElementById('videoModal');
    modal.style.display = "block";
    
    player.src({
        src: url,
        type: 'application/x-mpegURL'
    });
    
    player.play();
    document.body.style.overflow = "hidden";
}

function closeStream() {
    const modal = document.getElementById('videoModal');
    modal.style.display = "none";
    player.pause();
    document.body.style.overflow = "auto";
}

window.onclick = function(event) {
    if (event.target == document.getElementById('videoModal')) {
        closeStream();
    }
}