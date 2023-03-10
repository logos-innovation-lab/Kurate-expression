var swiper = new Swiper(".mySwiper", {
	// initialSlide: 6,
	loop: true,
	effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: "auto",
	coverflowEffect: {
		rotate: 30,
		stretch: 80,
		depth: 500,
		modifier: 0.8,
		// scale: 0.85,
		slideShadows: true,
	},
	pagination: {
		el: ".swiper-pagination",
	},
});