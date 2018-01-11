function debounce(func, wait) {
	let timeout;
	return function() {
		const context = () => func.apply(this, arguments);
		clearTimeout(timeout);
		timeout = setTimeout(context, wait)
	}
};

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(event) {
	sliderImages.forEach(slideImage => {
		// half way through the image
		const slideInLocation = (window.scrollY + window.innerHeight) - 
			(slideImage.height) / 2;	
		const isHalfShown = slideInLocation > slideImage.offsetTop;
		if(isHalfShown) {
			slideImage.classList.add('active');
		}
	});
}

window.addEventListener('scroll', debounce(checkSlide, 15));