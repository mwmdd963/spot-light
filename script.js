
const menu = document.getElementById('mobileMenu');
document.getElementById('menuBtn').onclick = () => { menu.classList.remove('hidden'); menu.classList.add('flex'); };
document.getElementById('closeBtn').onclick = () => { menu.classList.add('hidden'); menu.classList.remove('flex'); };


const slider = document.getElementById('slider');
const bar = document.getElementById('strengthBar');

function updateBar() {
    const max = slider.scrollWidth - slider.clientWidth;
    const progress = max > 0 ? slider.scrollLeft / max : 0;
    const thumb = Math.max(slider.clientWidth / slider.scrollWidth, 0.15);
    bar.style.width = `${thumb * 100}%`;
    bar.style.marginLeft = `${progress * (100 - thumb * 100)}%`;
}

slider.addEventListener('scroll', updateBar);
window.addEventListener('resize', updateBar);
updateBar();