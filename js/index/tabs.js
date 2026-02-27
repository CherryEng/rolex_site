import { qsa } from '../common/utils.js';

export const initTabs = () => {
    // タブメニュー切替
    
    const tabs = qsa('.tabs li');
    const contents = qsa('.tab_contents');

    tabs.forEach(clicked => {
        clicked.addEventListener('click', () => {

            // アクティブ状態をすべて外す
            tabs.forEach(tab => {
                tab.classList.remove('active');
            });
            
            // クリックされたタブをアクティブにする
            clicked.classList.add('active');
            
            // アクティブ状態をすべて外す
            contents.forEach(content => {
                content.classList.remove('active');
                content.style.display = 'none';
            });

            
            // クリックしたタブと対応するセクションをアクティブにする
            const changeContent = document.getElementById(clicked.dataset.id);
            changeContent.style.display = 'block';
            setTimeout(() => {
                changeContent.classList.add('active');
            }, 1);
        });
    });
};