import { qsa } from '../common/utils.js';

export const initAutoSequence = () => {
	// 連番画像自動再生
	// タブメニューでの画像切り替え

	const image = document.getElementById('watch_image');
	const toggleBtn = document.getElementById('toggle_auto');
	const tabs = qsa('.watch_tab');

	const FRAME_COUNT = 249;
	const AUTO_ROTATE_SPEED = 0.4;
	let currentFrame = 0;
	let autoRotate = true;
	let currentWatch = 'everose_gold';

	/* ========= 画像プリロード ========= */
	function preloadImages(watch) {
		for (let i = 0; i < FRAME_COUNT; i++) {
			const img = new Image();
			const padded = String(i).padStart(4, '0');
			img.src = `images/page01/colors/${watch}/land-dweller-${padded}.avif`;
		}
	}

	/* ========= 画像切り替え ========= */
	function updateImage() {
		const frame = Math.floor(currentFrame);
		const padded = String(frame).padStart(4, '0');
		image.src = `images/page01/colors/${currentWatch}/land-dweller-${padded}.avif`;
	}

	/* ========= 自動回転 ========= */

	function autoLoop() {
		if (autoRotate) {
			currentFrame = (currentFrame + AUTO_ROTATE_SPEED) % FRAME_COUNT;
			updateImage();
		}
		requestAnimationFrame(autoLoop);
	}

	autoLoop();

	// 初期カラーの画像をプリロード
	preloadImages(currentWatch);

	/* ========= 自動回転 ON / OFF ========= */

	toggleBtn.addEventListener('click', () => {
		autoRotate = !autoRotate;
		toggleBtn.classList.toggle('is-on', autoRotate);
	});

	/* ========= タブ切り替え ========= */

	tabs.forEach(tab => {
		tab.addEventListener('click', () => {
			tabs.forEach(t => t.classList.remove('is-active'));
			tab.classList.add('is-active');

			// フェードアウト
			image.classList.add('fade-out');

			// アニメーション完了後に画像を変更
			setTimeout(() => {
				currentWatch = tab.dataset.watch;
				currentFrame = 0;
				updateImage();
			// 新しいカラーの画像をプリロード
			preloadImages(currentWatch);
				// フェードイン
				image.classList.remove('fade-out');
			}, 400);
		});
	});
};