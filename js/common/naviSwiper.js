export const initNaviSwiper = () => {
  // ヘッダーナビゲーションのカルーセル設定
  
  const naviSwiper = new Swiper('.navi_carousel .swiper', {
    grabCursor: true, // カーソルをグラブにする
    loop: true, // スライドのループ設定
    loopAdditionalSlides: 1, // 最後のスライドの次に最初のスライドを表示する
    slidesPerView: 'auto', // 一つの領域に画像を何枚表示するかを指定
    spaceBetween: 8, // 画像同士の隙間を指定
    slidesPerGroup: 3,
    speed: 600,

    navigation: { // 独自ボタンの設定
      prevEl: '.navi-button-prev', // 前ボタン
      nextEl: '.navi-button-next',  // 後ボタン
    },
  });
};

