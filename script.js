document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. TÍNH TOÁN THỜI GIAN ĐẾM NGƯỢC
    // ==========================================
    // Cài đặt ngày cưới (Định dạng: Tháng Ngày, Năm Giờ:Phút:Giây)
    const weddingDate = new Date("October 25, 2026 13:00:00").getTime();
    const countdownElement = document.getElementById("countdown-timer");

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        if (distance < 0) {
            countdownElement.innerHTML = "Lễ cưới đã diễn ra!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây`;
    }

    // Chạy đếm ngược mỗi giây
    setInterval(updateCountdown, 1000);
    updateCountdown(); // Gọi ngay lần đầu để không bị delay 1s

    // ==========================================
    // 2. TẠO HIỆU ỨNG LÁ RƠI (Bằng mã SVG trực tiếp)
    // ==========================================
    const leavesContainer = document.getElementById('leaves-container');
    const numberOfLeaves = 18; // Tổng số lá

    // Mã SVG vẽ chiếc lá đơn giản (màu nâu nhạt để tiệp với nền)
    const leafSVG = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#c3b4a2">
            <path d="M17,8C17,8 21,3 21,3C21,3 15,3 12,6C9,3 3,3 3,3C3,3 7,8 7,8C7,8 3,13 6,17C8.5,20.3 12,21 12,21C12,21 15.5,20.3 18,17C21,13 17,8 17,8Z"/>
        </svg>
    `;

    for (let i = 0; i < numberOfLeaves; i++) {
        createLeaf();
    }

    function createLeaf() {
        const leaf = document.createElement('div');
        leaf.classList.add('leaf');
        
        // Gán hình ảnh SVG vào làm lá
        leaf.innerHTML = leafSVG;

        // Tính toán độ rơi ngẫu nhiên
        const startPosX = Math.random() * 100; // Vị trí xuất phát từ 0% - 100% chiều rộng màn hình
        const animationDuration = 7 + Math.random() * 12; // Tốc độ rơi: 7s - 19s
        const animationDelay = Math.random() * 15; // Thời gian chờ rơi
        
        // Cấu hình hướng rơi chéo và độ xoay (truyền vào CSS Variables)
        const drift = (Math.random() - 0.5) * 200 + 'px'; 
        const rotate = (Math.random() * 360) + 'deg';

        // Gán thuộc tính CSS
        leaf.style.left = `${startPosX}vw`;
        leaf.style.animationDuration = `${animationDuration}s`;
        leaf.style.animationDelay = `${animationDelay}s`;
        leaf.style.setProperty('--drift', drift);
        leaf.style.setProperty('--rotate', rotate);

        // Resize lá ngẫu nhiên to nhỏ
        const scale = 0.5 + Math.random() * 0.8;
        leaf.style.transform = `scale(${scale})`;

        leavesContainer.appendChild(leaf);
    }

    // ==========================================
    // 3. XỬ LÝ SỰ KIỆN CLICK (Hộp quà, Bản đồ)
    // ==========================================
    const envelopes = document.querySelectorAll('.envelope');
    envelopes.forEach(env => {
        env.addEventListener('click', () => {
            alert('Bạn có thể lập trình thêm để mở ảnh QR Code ngân hàng tại đây!');
        });
    });

    const musicBtn = document.getElementById('music-btn');
    musicBtn.addEventListener('click', () => {
        alert('Phát nhạc nền...');
        // Cách gắn nhạc thật: dùng thẻ <audio> ẩn và kích hoạt audio.play() ở đây
    });
});