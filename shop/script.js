let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
 
menu.onclick = () => {
    navbar.classList.toggle('active');
}
 
window.onscroll = () => {
    navbar.classList.remove('active');
}



// cards 
    let currentIndex = 0;

    function updateCarousel() {
        const carousel = document.getElementById('carousel');
        const itemWidth = document.querySelector('.carousel-item').offsetWidth;
        carousel.style.transform = `translateX(${-currentIndex * (itemWidth + 20)}px)`;
    }

    function nextSlide() {
        const totalItems = document.querySelectorAll('.carousel-item').length;
        if (currentIndex < totalItems - 3) {
            currentIndex++;
            updateCarousel();
        }
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    }

    window.addEventListener('resize', updateCarousel);
    // cards ended 