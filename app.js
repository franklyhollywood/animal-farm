// import functions and grab DOM elements

// initialize state

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state

import { cat, dog, horse } from './utils.js';

const horseEl = document.getElementById('horse-image');
const dogEl = document.getElementById('dog-image');
const catEl = document.getElementById('cat-image');
horseEl.addEventListener('click', () => {
	horse();
});

dogEl.addEventListener('click', () => {
	dog();
});

catEl.addEventListener('click', () => {
	cat();
});

document.addEventListener('keydown', (event) => {
	if (event.key === 'c') {
		cat();
	}

	if (event.key === 'h') {
		horse(); // calling my function -- cooking my dish
	}

	if (event.key === 'd') {
		dog();
	}
});
