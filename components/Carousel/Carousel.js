class Carousel {
	constructor(element) {
		this.element = element;
		this.leftBtn = this.element.querySelector('.left-button');
		this.rightBtn = this.element.querySelector('.right-button');
		this.imgs = this.element.querySelectorAll('img');
		this.index = 1;

		this.leftBtn.addEventListener('click', () => this.left());
		this.rightBtn.addEventListener('click', () => this.right());
	}
	left() {
		this.imgs.forEach((img) => (img.style.display = 'none'));

		if (this.index > -1) {
			this.imgs[this.index].style.display = 'block';
			this.index -= 1;
		} else {
			this.imgs[3].style.display = 'block';
			this.index = 3;
		}
	}
	right() {
		this.imgs.forEach((img) => (img.style.display = 'none'));

		if (this.index < 4) {
			this.imgs[this.index].style.display = 'block';
			this.index += 1;
		} else {
			this.imgs[0].style.display = 'block';
			this.index = 0;
		}
	}
}

let carousel = document.querySelector('.carousel');
new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index ====
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
