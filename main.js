import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// 1. إعداد المشهد
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x050505);
scene.fog = new THREE.Fog(0x050505, 1, 50); // ضباب عشان يعطي عمق للمدينة

// 2. الكاميرا (مجهزة للموبايل)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(8, 5, 15);

// 3. المحرك (Renderer)
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio); // عشان تطلع الصورة حادة عالسماعة
document.body.appendChild(renderer.domElement);

// 4. التحكم باللمس (OrbitControls)
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// 5. الإضاءة (إضاءة نيون زرقاء)
const light1 = new THREE.PointLight(0x00d4ff, 20, 100);
light1.position.set(10, 10, 10);
scene.add(light1);

const ambient = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambient);

// 6. إضافة أرضية "الشبكة" (Grid) - كأنها شارع مستقبلي
const grid = new THREE.GridHelper(100, 40, 0x00d4ff, 0x222222);
scene.add(grid);

// 7. إضافة "مكعب" مؤقت (مكان السيارة لحتى ترفع ملف الـ GLB)
const geometry = new THREE.BoxGeometry(2, 1, 4);
const material = new THREE.MeshStandardMaterial({ color: 0x00d4ff, metalness: 0.8, roughness: 0.2 });
const carPlaceholder = new THREE.Mesh(geometry, material);
carPlaceholder.position.y = 0.5;
scene.add(carPlaceholder);

// 8. حلقة التحديث (Animation)
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();

// تحديث الحجم عند تدوير الموبايل
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});