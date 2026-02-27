import { initNavigation } from "./common/navigation.js";
import { initNaviSwiper } from "./common/naviSwiper.js";
import { initScrollAnimation } from "./common/scrollAnimation.js";
import { initHeaderScroll } from "./common/headerScroll.js";
import { initBgImages } from "./index/bgImages.js";
import { initTabs } from "./index/tabs.js";
import { initSnapScroll } from "./index/snapScroll.js";


document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initNaviSwiper();
    initScrollAnimation();
    initHeaderScroll();
    initBgImages();
    initTabs();
    initSnapScroll();
});