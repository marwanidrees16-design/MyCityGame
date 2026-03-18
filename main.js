// إعدادات المشهد والكاميرا
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb); // لون سماء أزرق
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// إضافة إضاءة
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 10, 7.5).normalize();
scene.add(light);
scene.add(new THREE.AmbientLight(0x404040));

// إنشاء "السيارة" (المكعب)
const geometry = new THREE.BoxGeometry(1, 0.5, 2);
const material = new THREE.MeshPhongMaterial({ color: 0xff0000 }); // سيارة حمراء
const car = new THREE.Mesh(geometry, material);
scene.add(car);

// أرضية بسيطة
const planeGeo = new THREE.PlaneGeometry(100, 100);
const planeMat = new THREE.MeshPhongMaterial({ color: 0x999999 });
const plane = new THREE.Mesh(planeGeo, planeMat);
plane.rotation.x = -Math.PI / 2;
plane.position.y = -0.25;
scene.add(plane);

camera.position.set(0, 5, 10);
camera.lookAt(car.position);

// نظام الحركة
const keys = {};
let moveSpeed = 0.1;

// تحكم الكيبورد
window.addEventListener('keydown', (e) => keys[e.code] = true);
window.addEventListener('keyup', (e) => keys[e.code] = false);

// تحكم اللمس للموبايل (Samsung A25)
window.addEventListener('touchstart', (e) => {
    const touchX = e.touches[0].clientX;
    if (touchX < window.innerWidth / 2) keys['ArrowLeft'] = true;
    else keys['ArrowRight'] = true;
    keys['ArrowUp'] = true; // تحرك للأمام عند اللمس
});
window.addEventListener('touchend', () => {
    keys['ArrowLeft'] = false;
    keys['ArrowRight'] = false;
    keys['ArrowUp'] = false;
});

function animate() {
    requestAnimationFrame(animate);

    // منطق الحركة
    if (keys['ArrowUp']) car.translateZ(-moveSpeed);
    if (keys['ArrowDown']) car.translateZ(moveSpeed);
    if (keys['ArrowLeft']) car.rotation.y += 0.05;
    if (keys['ArrowRight']) car.rotation.y -= 0.05;

    // الكاميرا تتبع السيارة
    camera.position.lerp(new THREE.Vector3(car.position.x, car.position.y + 5, car.position.z + 10), 0.1);
    camera.lookAt(car.position);

    renderer.render(scene, camera);
}

// تعديل الحجم عند تدوير الموبايل
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();