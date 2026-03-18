function openStream(url) {
    const modal = document.getElementById('videoModal');
    const frame = document.getElementById('streamFrame');
    
    modal.style.display = "block";
    frame.src = url;
    document.body.style.overflow = "hidden"; // منع التمرير عند فتح الفيديو
}

function closeStream() {
    const modal = document.getElementById('videoModal');
    const frame = document.getElementById('streamFrame');
    
    modal.style.display = "none";
    frame.src = ""; // إيقاف الصوت والبث تماماً
    document.body.style.overflow = "auto";
}

// إغلاق النافذة عند الضغط على مفتاح Escape
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") closeStream();
});