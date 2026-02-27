import { qsa } from '../common/utils.js';

export const initBgImages = () => {

	// 背景画像割り振り
	const items = qsa('.details_link');
	items.forEach((item, index) => {
		const num = String(index + 1).padStart(2, '0');
		item.style.backgroundImage = `url(images/top/bg_watches/watch_${num}.jpg)`;
	});
};