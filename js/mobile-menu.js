document.addEventListener('DOMContentLoaded', function () {
    const openButton = document.querySelector('[data-menu-open]');
    const closeButton = document.querySelector('[data-menu-close]');
    const menu = document.getElementById('mobile-menu');

    if (!openButton || !closeButton || !menu) {
        return;
    }

    function openMenu() {
        menu.classList.add('is-open');
        document.body.classList.add('no-scroll');
    }

    function closeMenu() {
        menu.classList.remove('is-open');
        document.body.classList.remove('no-scroll');
    }

    openButton.addEventListener('click', openMenu);
    closeButton.addEventListener('click', closeMenu);

    menu.querySelectorAll('.mobile-nav-link').forEach(function (link) {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && menu.classList.contains('is-open')) {
            closeMenu();
        }
    });

    // Якщо ресайз вивів нас за межі мобільного брейкпоінта, ховаємо меню
    window.addEventListener('resize', function () {
        if (window.innerWidth >= 768) {
            closeMenu();
        }
    });
});
