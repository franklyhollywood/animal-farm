const horseSound = document.getElementById('horse-sound');
const dogSound = document.getElementById('dog-sound');
const catSound = document.getElementById('cat-sound');
const h1El = document.getElementById('header');

export function horse() {
	horseSound.play();
	h1El.textContent = 'horse';
}

export function dog() {
	dogSound.play();
	h1El.textContent = 'dog';
}

export function cat() {
	catSound.play();
	h1El.textContent = 'cat';
}
