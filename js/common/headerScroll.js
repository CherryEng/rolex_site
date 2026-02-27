import { qs } from './utils.js';

export const initHeaderScroll = () => {
    // ヘッダー表示切替
    // 上スクロール時だけ表示
    const header = qs('.js-scroll-header');
    const navi = qs('.navi_container');

    let lastScrollY = window.scrollY;
    const SCROLL_THRESHOLD = 10; // 微振動防止

    window.addEventListener('scroll', () => {
        if (navi.classList.contains('open')) {
            return;
        }
        
        const currentY = window.scrollY;
        const diff = currentY - lastScrollY;

        // 下スクロール
        if (diff > SCROLL_THRESHOLD && currentY > 100) {
            header.classList.add('is-hidden');
        }

        // 上スクロール
        if (diff < -SCROLL_THRESHOLD) {
            header.classList.remove('is-hidden');
        }

        lastScrollY = currentY;
    });
};