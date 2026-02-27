import { initNavigation } from "./common/navigation.js";
import { initNaviSwiper } from "./common/naviSwiper.js";
import { initScrollAnimation } from "./common/scrollAnimation.js";
import { initHeaderScroll } from "./common/headerScroll.js";
import { initDetailSwiper } from "./page01/detailSwiper.js";
import { initScrollSequence } from "./page01/scrollSequence.js";
import { initAutoSequence } from "./page01/autoSequence.js";

document.addEventListener('DOMContentLoaded', () => {
	initNavigation();
	initNaviSwiper();
	initScrollAnimation();
	initHeaderScroll();
	initDetailSwiper();
	initScrollSequence();
	initAutoSequence();
});