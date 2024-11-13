function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    mobileMenu.classList.toggle('show');
    hamburgerMenu.classList.toggle('open');
}

document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    if (!mobileMenu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
        mobileMenu.classList.remove('show');
        hamburgerMenu.classList.remove('open');
    }
});

