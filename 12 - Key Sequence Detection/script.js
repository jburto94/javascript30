const pressed = [];
const code = 'gold';
const header = document.querySelector('div');

window.addEventListener('keyup', (e) => {
	pressed.push(e.key);
	console.log(pressed);
	if(pressed.length > code.length) {
		pressed.shift();
	}

	if(pressed.join('').includes(code)) {
		console.log('congrats');
		header.textContent = 'YOU CRACKED IT!';
		header.classList.add('cracked');
	}
});