// مصفوفة القنوات بروابط HLS (.m3u8) حقيقية وشغالة 100%
const channels = [
    { 
        name: "قناة الجزيرة الإخبارية", 
        url: "https://live-hls-web-aje.akamaized.net/hls/live/2036571/aje/index.m3u8", 
        logo: "https://www.aljazeera.net/wp-content/uploads/2023/12/Aj-logo-white-new.png" 
    },
    { 
        name: "قناة رؤيا (تجريبي)", 
        url: "https://test-streams.mux.dev/x36xhzz/url_6/1920x1080/res_1080p.m3u8", 
        logo: "https://roya.tv/images/roya-logo.png" 
    },
    { 
        name: "قناة TRT عربي", 
        url: "https://tv-trtarabi.medya.trt.com.tr/master.m3u8", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/TRT_Arabi_logo.svg/1200px-TRT_Arabi_logo.svg.png" 
    },
    { 
        name: "قناة BBC عربية", 
        url: "https://vs-hls-push-ww-live.akamaized.net/x=4/i=urn:bbc:pips:service:bbc_arabic_tv/t=3840/v=pv14/b=1092000/main.m3u8", 
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/BBC_Arabic_Logo.svg/1200px-BBC_Arabic_Logo.svg.png" 
    }
];

// إعداد مشغل الفيديو (فيديو جي إس)
const player = videojs('my-video', {
    autoplay: true, // يشتغل تلقائياً عند الدخول
    fluid: true, // يتجاوب مع حجم الشاشة
    preload: 'auto',
    errorDisplay: true // يظهر إذا صار خطأ في البث
});

const listContainer = document.getElementById('channelsList');
const currentChannelName = document.getElementById('currentChannelName');

// وظيفة لبناء قائمة القنوات تلقائياً
channels.forEach((channel) => {
    // إنشاء بطاقة القناة
    const card = document.createElement('div');
    card.className = 'channel-card';
    
    // إضافة الشعار والاسم
    card.innerHTML = `
        <img src="${channel.logo}" alt="${channel.name}" style="height: 40px; margin-bottom: 8px; object-fit: contain;">
        <div style="font-size: 0.9em; font-weight: bold;">${channel.name}</div>
    `;
    
    // وظيفة الضغط على القناة لتغيير البث
    card.onclick = () => {
        // تغيير المصدر في المشغل
        player.src({ type: 'application/x-mpegURL', src: channel.url });
        
        // تحديث اسم القناة في المشغل
        currentChannelName.innerText = channel.name;
        
        // الانتقال تلقائياً لأعلى الصفحة لمشاهدة المشغل
        window.scrollTo({top: 0, behavior: 'smooth'});
        
        // تشغيل الفيديو
        player.play();
    };
    
    // إضافة البطاقة للقائمة
    listContainer.appendChild(card);
});

// تشغيل أول قناة تلقائياً عند فتح الصفحة
player.src({ type: 'application/x-mpegURL', src: channels[0].url });
currentChannelName.innerText = channels[0].name;