export const initDetailSwiper = () => {
  // ヘッダーナビゲーションのカルーセル設定

  const detailSwiper = new Swiper('#watch_slides .swiper', {
    grabCursor: true, // カーソルをグラブにする
    loop: true, // スライドのループ設定
    loopAdditionalSlides: 1, // 最後のスライドの次に最初のスライドを表示する
    spaceBetween: 8, // 画像同士の隙間を指定
    centeredSlides: true, // アクティブなスライドを中央に配置する
    watchSlidesProgress: true,

    navigation: { // 独自ボタンの設定
      prevEl: '.detail-button-prev', // 前ボタン
      nextEl: '.detail-button-next',  // 後ボタン
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
};

