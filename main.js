function openStream(url) {
    const modal = document.getElementById('videoModal');
    const frame = document.getElementById('streamFrame');
    
    modal.style.display = "flex"; // استخدام flex للتوسيط
    frame.src = url;
    document.body.style.overflow = "hidden";
}

function closeStream() {
    const modal = document.getElementById('videoModal');
    const frame = document.getElementById('streamFrame');
    
    modal.style.display = "none";
    frame.src = ""; 
    document.body.style.overflow = "auto";
}

// إغلاق عند النقر خارج الفيديو
window.onclick = function(event) {
    const modal = document.getElementById('videoModal');
    if (event.target == modal) {
        closeStream();
    }
}