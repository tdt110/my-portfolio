document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel');
    if (!carousel) return;

    const faces = carousel.querySelectorAll('.face');

    // Khi rê chuột vào bất kỳ mặt nào -> dừng quay
    faces.forEach((face) => {
        face.addEventListener('mouseenter', () => {
            carousel.classList.add('paused');
        });
        face.addEventListener('mouseleave', () => {
            carousel.classList.remove('paused');
        });
    });
});
