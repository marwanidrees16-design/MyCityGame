const channels = [
    { 
        name: "الجزيرة HD", 
        url: "https://live-hls-web-aje.akamaized.net/hls/live/2036571/aje/index.m3u8", 
        logo: "https://www.aljazeera.net/wp-content/uploads/2023/12/Aj-logo-white-new.png" 
    },
    { 
        name: "رؤيا TV", 
        url: "https://roya-live.ercdn.net/roya/roya.m3u8", 
        logo: "https://roya.tv/images/roya-logo.png" 
    },
    { 
        name: "TRT بالعربي", 
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

// إعداد المشغل
const player = videojs('marwan-player', {
    fluid: true,
    autoplay: false,
    controls: true,
    responsive: true
});

const container = document.getElementById('channelsContainer');

// بناء البطاقات
channels.forEach(ch => {
    const card = document.createElement('div');
    card.className = 'channel-card';
    card.innerHTML = `
        <img src="${ch.logo}" alt="${ch.name}">
        <div>${ch.name}</div>
    `;
    
    card.onclick = () => {
        player.src({ type: 'application/x-mpegURL', src: ch.url });
        player.play().catch(error => {
            console.log("التشغيل التلقائي يحتاج ضغطة من المستخدم أولاً");
        });
        document.getElementById('liveTitle').innerText = ch.name;
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
    
    container.appendChild(card);
});

// تشغيل أول قناة افتراضياً
player.src({ type: 'application/x-mpegURL', src: channels[0].url });