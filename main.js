// التأكد من أن المكتبة تحملت قبل البدء
window.onload = () => {
    if (typeof THREE === 'undefined') {
        console.error("Three.js not loaded!");
        return;
    }

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050505);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // إضافة سيارة (مكعب)
    const car = new THREE.Mesh(
        new THREE.BoxGeometry(1, 0.5, 2),
        new THREE.MeshBasicMaterial({ color: 0xff0000 }) // لون أحمر سادة للضمان
    );
    scene.add(car);

    // إضافة خطوط للأرضية عشان نشوف الحركة
    const grid = new THREE.GridHelper(100, 100);
    scene.add(grid);

    camera.position.set(0, 5, 10);
    camera.lookAt(car.position);

    const keys = {};
    window.onkeydown = (e) => keys[e.code] = true;
    window.onkeyup = (e) => keys[e.code] = false;

    function animate() {
        requestAnimationFrame(animate);
        
        if (keys['ArrowUp']) car.translateZ(-0.2);
        if (keys['ArrowDown']) car.translateZ(0.2);
        if (keys['ArrowLeft']) car.rotation.y += 0.05;
        if (keys['ArrowRight']) car.rotation.y -= 0.05;

        camera.position.lerp(new THREE.Vector3(car.position.x, car.position.y + 5, car.position.z + 10), 0.1);
        camera.lookAt(car.position);

        renderer.render(scene, camera);
    }
    animate();
};