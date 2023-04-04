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
	pagination: {
		el: ".swiper-pagination",
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
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