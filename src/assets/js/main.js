const counter = () => {
	const counters = document.querySelectorAll(".counter");

	if (!counters.length) return;

	counters.forEach(counter => {
		const input = counter.querySelector(".counter__input");
		const decrement = counter.querySelector(".counter__decrement");
		const increment = counter.querySelector(".counter__increment");

		input.addEventListener("input", e => {
			if (+e.target.value < 1) {
				input.value = 1;
			}
		});

		decrement.addEventListener("click", () => {
			if (+input.value !== 1) {
				input.value--;
			}
		});

		increment.addEventListener("click", () => {
			input.value++;
		});
	});
};

counter();

const searchFormMobile = () => {
	const form = document.querySelector(".search-form-mobile");

	if (!form) return;

	const close = form.querySelector(".search-form__btn");
	const toggle = document.querySelector(".mobile-search-icon");

	toggle.addEventListener("click", () => {
		form.classList.add("active");
	});

	close.addEventListener("click", () => {
		form.classList.remove("active");
	});
};

searchFormMobile();

const mobileMenu = () => {
	const burger = document.querySelector(".burger");
	const menu = document.querySelector(".mobile-menu");

	burger.addEventListener("click", () => {
		burger.classList.toggle("active");
		menu.classList.toggle("active");
	});
};

mobileMenu();
