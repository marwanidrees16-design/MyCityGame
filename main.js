// مصفوفة القنوات - تقدر تضيف روابط m3u8 هون
const channels = [
    { name: "قناة اختبار 1", url: "https://test-streams.mux.dev/x36xhzz/url_6/1920x1080/res_1080p.m3u8" },
    { name: "قناة اختبار 2", url: "https://vjs.zencdn.net/v/oceans.mp4" },
    { name: "قناة أخبار", url: "رابط_القناة_هنا" }
];

const player = videojs('my-video');
const listContainer = document.getElementById('channelsList');

// وظيفة لعرض القنوات في الصفحة
channels.forEach(channel => {
    const card = document.createElement('div');
    card.className = 'channel-card';
    card.innerText = channel.name;
    
    card.onclick = () => {
        player.src({ type: 'application/x-mpegURL', src: channel.url });
        player.play();
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
    
    listContainer.appendChild(card);
});