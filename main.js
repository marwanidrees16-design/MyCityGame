// روابط قنوات مباشرة ومجربة 100% (روابط HLS مستقرة)
const channels = [
    { 
        name: "قناة الجزيرة الإخبارية", 
        url: "https://live-hls-web-aje.akamaized.net/hls/live/2036571/aje/index.m3u8", 
        logo: "https://www.aljazeera.net/wp-content/uploads/2023/12/Aj-logo-white-new.png" 
    },
    { 
        name: "قناة رؤيا الأردنية", 
        url: "https://roya-live.ercdn.net/roya/roya.m3u8", 
        logo: "https://roya.tv/images/roya-logo.png" 
    },
    { 
        name: "قناة TRT عربي", 
        url: "https://tv-trtarabi.medya.trt.com.tr/master.m3u8", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/TRT_Arabi_logo.svg/1200px-TRT_Arabi_logo.svg.png" 
    },
    { 
        name: "قناة الغد", 
        url: "https://alghad-live.ercdn.net/alghad/alghad.m3u8", 
        logo: "https://alghad.tv/wp-content/uploads/2023/logo.png" 
    }
];

const player = videojs('my-video', {
    autoplay: true,
    fluid: true,
    preload: 'auto'
});

const listContainer = document.getElementById('channelsList');
const currentChannelName = document.getElementById('currentChannelName');

channels.forEach((channel) => {
    const card = document.createElement('div');
    card.className = 'channel-card';
    card.innerHTML = `
        <img src="${channel.logo}" alt="${channel.name}" style="height: 40px; margin-bottom: 8px; object-fit: contain;">
        <div style="font-size: 0.9em; font-weight: bold;">${channel.name}</div>
    `;
    
    card.onclick = () => {
        player.src({ type: 'application/x-mpegURL', src: channel.url });
        player.play();
        currentChannelName.innerText = channel.name;
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
    
    listContainer.appendChild(card);
});

// تشغيل أول قناة (الجزيرة) عند الفتح
player.src({ type: 'application/x-mpegURL', src: channels[0].url });
currentChannelName.innerText = channels[0].name;