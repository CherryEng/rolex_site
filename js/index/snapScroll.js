import { qs, qsa } from '../common/utils.js';

export const initSnapScroll = () => {
	// 慣性スクロールとビュー表示切替

	const collectionList = qs('#collection ul');
	const collectionListItems = qsa('#collection ul li');
	const snapBtn = qs('.snap_btn');

	let currentItem = 0;
	let isScrolling = false;
	let scrollTimeout;
	let isInertiaScrollEnabled = false;
	let wheelTimeout; // wheel イベント制御用

	function scrollToItem(index) {
		if (!isInertiaScrollEnabled) return;
		if (isScrolling) return;
		
		// 境界チェック
		if (index < 0 || index >= collectionListItems.length) return;
		
		isScrolling = true;
		currentItem = index;
		console.log('currentItem:', currentItem);
		
		collectionListItems[index].scrollIntoView({ behavior: 'smooth' });
		
		setTimeout(function () {
			isScrolling = false;
		}, 800);
	}
	
	// 表示モード切替
	snapBtn.addEventListener('click', () => {
		isInertiaScrollEnabled = !isInertiaScrollEnabled;
		snapBtn.classList.toggle('is_on', isInertiaScrollEnabled);
		document.body.classList.toggle('snap_mode', isInertiaScrollEnabled);
		if (snapBtn.classList.contains('is_on')) {
			snapBtn.textContent = 'Stop View';
		} else {
			snapBtn.textContent = 'View More';
		}
	});
	
	// ホイールイベントで慣性スクロール検知
	collectionList.addEventListener('wheel', function (e) {
		if (!isInertiaScrollEnabled) return;
		if (isScrolling) {
			e.preventDefault();
			return;
		}
		if (wheelTimeout) {
			e.preventDefault();
			return;
		}

		let delta = e.deltaY;
		let threshold = 5;

		if (Math.abs(delta) > threshold) {
			e.preventDefault();

			if (delta > 0 && currentItem < collectionListItems.length - 1) {
				scrollToItem(currentItem + 1);
			} else if (delta < 0 && currentItem > 0) {
				scrollToItem(currentItem - 1);
			}

			// wheel イベントの連続発火を防ぐ（900ms 間隔）
			wheelTimeout = true;
			setTimeout(() => {
				wheelTimeout = false;
			}, 900);
		}
	}, { passive: false });

	// スクロール終了を検知
	collectionList.addEventListener('scroll', function () {
		clearTimeout(scrollTimeout);

		scrollTimeout = setTimeout(function () {
			let scrollTop = collectionList.scrollTop;
			let itemHeight = collectionList.clientHeight;
			let newItem = Math.round(scrollTop / itemHeight);

			if (newItem !== currentItem && newItem >= 0 && newItem < collectionListItems.length) {
				currentItem = newItem;
			}
		}, 150);
	});
};