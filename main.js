const channels = [
    { 
        name: "الجزيرة الإخبارية", 
        url: "https://live-hls-web-aje.akamaized.net/hls/live/2036571/aje/index.m3u8", 
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Aljazeera_eng.svg/1200px-Aljazeera_eng.svg.png" 
    },
    { 
        name: "قناة رؤيا", 
        url: "https://roya-live.ercdn.net/roya/roya.m3u8", 
        logo: "https://roya.tv/images/roya-logo.png" 
    },
    { 
        name: "TRT عربي", 
        url: "https://tv-trtarabi.medya.trt.com.tr/master.m3u8", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/TRT_Arabi_logo.svg/1200px-TRT_Arabi_logo.svg.png" 
    },
    { 
        name: "قناة الغد", 
        url: "https://alghad-live.ercdn.net/alghad/alghad.m3u8", 
        logo: "https://alghad.tv/wp-content/uploads/2023/logo.png" 
    }
];

const player = videojs('my-video');
const list = document.getElementById('channelsList');

channels.forEach(ch => {
    const div = document.createElement('div');
    div.className = 'channel-card';
    div.innerHTML = `<img src="${ch.logo}"> <div>${ch.name}</div>`;
    div.onclick = () => {
        player.src({ type: 'application/x-mpegURL', src: ch.url });
        player.play();
        document.getElementById('currentChannelName').innerText = "أنت تشاهد الآن: " + ch.name;
    };
    list.appendChild(div);
});

// تشغيل القناة الأولى تلقائياً
player.src({ type: 'application/x-mpegURL', src: channels[0].url });