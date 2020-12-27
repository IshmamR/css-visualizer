document.querySelectorAll('input').forEach(input => {
	input.addEventListener('input', inputChange);
});

const arr = ['shadow-color', 'box-color', 'border-color', 'background-color'];
function inputChange(e) {
	document.documentElement.style.setProperty(
		`--${e.target.name}`, e.target.value
	)

	arr.forEach(elem => {
		let hex = document.querySelector(`#${elem}`).value;
		document.querySelector(`#${elem}-hex`).value = hex;
	})
}


let dragValue;
function move() {
	const box = document.querySelector('#box');
	box.onmousedown = function () {
		dragValue = box;
	}
}
document.onmouseup = function (e) {
	dragValue = null;
}
document.onmousemove = function (e) {
	let x = e.pageX;
	let y = e.pageY;

	dragValue.style.transform = 'translate(-50%, -50%)';
	dragValue.style.left = x + 'px';
	dragValue.style.top = y + 'px';
}
move();