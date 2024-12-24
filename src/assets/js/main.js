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
