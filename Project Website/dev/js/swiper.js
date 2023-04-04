// var controlledSwiper = new Swiper(".controlledSwiper", {
// 	initialSlide: 0,
// 	loop: true,
// 	centeredSlides: true,
// 	allowSlideNext: false,
// 	allowSlidePrev: false,
// 	allowTouchMove: false,
// 	observeParents: true,
// });

var swiper = new Swiper(".mySwiper", {
	initialSlide: 0,
	loop: true,
	effect: "coverflow",
	keyboard: {
		enabled: true,
	},
	grabCursor: true,
	centeredSlides: true,
	loopedSlides: 3,
	slidesPerView: "auto",
	coverflowEffect: {
		rotate: 30,
		stretch: 80,
		depth: 500,
		modifier: 0.8,
		slideShadows: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	// controller: {
	// 	control: controlledSwiper,
	// },
});

let first = true;

const mySwiper = document.querySelector('.mySwiper');

function isInViewport(elem) {
	var bounding = elem.getBoundingClientRect();
	return (
		bounding.top >= 0 &&
		bounding.left >= 0 &&
		bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};

document.addEventListener('scroll', function () {
	if (isInViewport(mySwiper)) {
		if (first) {
			swiper.slideNext(500, true);
			first = false;
		}
	} else {
		first = true;
	}
})

// let activeSlide = 0;

// swiper.on('slideChange', function (e) {
// 	// controlledSwiper.activeSlide = swiper.activeSlide;
// 	console.log('swiper: ' + swiper.activeIndex);
// 	console.log('controlled: ' + controlledSwiper.activeIndex);
// })