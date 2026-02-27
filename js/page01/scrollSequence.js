import {qs} from '../common/utils.js';

export const initScrollSequence = () => {
	// スクロール対応での連番画像切り替え

	const sequenceImg = qs('.sequence_img');
	const innovationSection = qs('#innovation');

	const frameCount = 194; // 0000〜0193
	const scrollArea = 2000; // ← この値で「速さ」を調整

	/* ========= 画像プリロード ========= */
	function preloadSequenceImages() {
		for (let i = 0; i < frameCount; i++) {
			const img = new Image();
			const padded = String(i).padStart(4, '0');
			img.src = `images/page01/watch_frames/land-dweller-${padded}.jpg`;
		}
	}

	// 初期化時に全フレーム画像をプリロード
	preloadSequenceImages();

	// セクションの位置を取得
	const sectionTop = innovationSection.offsetTop;

	window.addEventListener('scroll', () => {
		const windowScrollY = window.scrollY;

		// セクションの上端がビューポートの上端に到達した時のスクロール相対位置
		const scrollRelative = windowScrollY - sectionTop;
		
		// スクロール進捗（0〜1）
		const progress = Math.min(Math.max(scrollRelative / scrollArea, 0), 1);

		// フレーム番号
		const frameIndex = Math.floor(progress * (frameCount - 1));

		// 0000形式に変換
		const padded = String(frameIndex).padStart(4, '0');

		sequenceImg.src = `images/page01/watch_frames/land-dweller-${padded}.jpg`;
	});
};