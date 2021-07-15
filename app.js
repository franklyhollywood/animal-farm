// import functions and grab DOM elements

// initialize state

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state

const h1El = document.getElementById('header');
const horseEl = document.getElementById('horse-image');
const dogEl = document.getElementById('dog-image');
const catEl = document.getElementById('cat-image');
const horseSound = document.getElementById('horse-sound');
const dogSound = document.getElementById('dog-sound');
const catSound = document.getElementById('cat-sound');

console.log(h1El, horseEl, dogEl, catEl, horseSound, dogSound, catSound);
horseEl.addEventListener('click', () => {
	horseSound.play();
	h1El.textContent = 'horse';
});

dogEl.addEventListener('click', () => {
	dogSound.play();
	h1El.textContent = 'dog';
});

catEl.addEventListener('click', () => {
	catSound.play();
	h1El.textContent = 'cat';
});
