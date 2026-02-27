import { qsa } from './utils.js';

export const initScrollAnimation = () => {
    const fadeItems = qsa('.fade-item');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // 一度だけ
                    console.log('ssss');
                    
                }
            });
        },
        {
            root: null,
            rootMargin: '0px 0px -10% 0px',
            threshold: 0.2
        }
    );

    fadeItems.forEach(item => observer.observe(item));
};