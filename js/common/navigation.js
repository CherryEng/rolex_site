import { qs, qsa, toggleClass } from './utils.js';

export const initNavigation = () => {
    // ナビゲーションエリア展開と表示切替
    
    const navi = qs('.navi_container');
    const hamburger = qs('.hamburger');
    const hiddenContents = qsa('.hidden_contents');
    const delay = 600;
    const detailHeader = qs('#detail_header');

    hamburger.addEventListener('click', () => {
        // ナビゲーション展開
        toggleClass(navi, 'open');
        toggleClass(hamburger, 'open');
        
        // ナビゲーション表示切替
        hiddenContents.forEach( content => {
            if (navi.classList.contains('open')) {
                // アニメーション時間分待ってから非表示
                setTimeout(() => {
                    content.style.display = 'none';
                    if (detailHeader) {
                        detailHeader.style.display = 'none';
                    }
                }, delay);
            } else {
                content.style.display = 'block';
                if (detailHeader) {
                    detailHeader.style.display = 'flex';
                }
            }
        });
    });
};