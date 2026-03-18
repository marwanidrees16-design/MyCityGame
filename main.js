const channels = [
    { 
        name: "الجزيرة الإخبارية", 
        url: "https://live-hls-web-aje.akamaized.net/hls/live/2036571/aje/index.m3u8", 
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Aljazeera_eng.svg/1200px-Aljazeera_eng.svg.png" 
    },
    { 
        name: "رؤيا الأردنية", 
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
    },
    { 
        name: "فرانس 24", 
        url: "https://static.france24.com/live/f24_ar.m3u8", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/France_24_logo.svg/1200px-France_24_logo.svg.png" 
    }
];

const player = videojs('my-video', {
    autoplay: false,
    fluid: true,
    html5: { vhs: { overrideNative: true }, nativeAudioTracks: false, nativeVideoTracks: false }
});

const list = document.getElementById('channelsList');

channels.forEach(ch => {
    const card = document.createElement('div');
    card.className = 'channel-card';
    card.innerHTML = `<img src="${ch.logo}"><div>${ch.name}</div>`;
    
    card.onclick = () => {
        player.src({ type: 'application/x-mpegURL', src: ch.url });
        player.play();
        document.getElementById('currentChannelName').innerText = ch.name;
        // صعود تلقائي للمشغل عند الضغط
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
    list.appendChild(card);
});