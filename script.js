// ===== المنيو =====
const menu = document.getElementById('mobileMenu');
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');

if (menu && menuBtn && closeBtn) {
    menuBtn.onclick = () => {
        menu.classList.remove('hidden');
        menu.classList.add('flex');
    };
    closeBtn.onclick = () => {
        menu.classList.add('hidden');
        menu.classList.remove('flex');
    };
}

// ===== السلايدر (بس إذا موجود بالصفحة) =====
const slider = document.getElementById('slider');
const bar = document.getElementById('strengthBar');

if (slider && bar) {
    const updateBar = () => {
        const max = slider.scrollWidth - slider.clientWidth;
        const progress = max > 0 ? slider.scrollLeft / max : 0;
        const thumb = Math.max(slider.clientWidth / slider.scrollWidth, 0.15);
        bar.style.width = `${thumb * 100}%`;
        bar.style.marginLeft = `${progress * (100 - thumb * 100)}%`;
    };
    slider.addEventListener('scroll', updateBar);
    window.addEventListener('resize', updateBar);
    updateBar();
}

// ===== الهيدر =====
const header = document.getElementById('header');
const logoImg = document.getElementById('logoImg');

if (header && logoImg) {
    const onScroll = () => {
        const scrolled = window.scrollY > 100;

        header.classList.toggle('bg-[#C2185B]', scrolled);
        header.classList.toggle('bg-transparent', !scrolled);
        header.classList.toggle('shadow-lg', scrolled);

        logoImg.style.filter = scrolled ? 'brightness(0) invert(1)' : 'none';
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}