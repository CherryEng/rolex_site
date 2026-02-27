
// 要素取得
export const qs = (selector, scope = document) => scope.querySelector(selector);

// 複数要素取得
export const qsa = (selector, scope = document) => scope.querySelectorAll(selector);

// クラス切り替え
export const toggleClass = (el, className) => {
    if (!el) return;
    el.classList.toggle(className);
};