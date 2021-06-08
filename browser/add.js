

function hoc_add(ev, el) {
	let v1 = Math.round(Math.random()*10);
	let v2 = Math.round(Math.random()*10);
	el.textContent = `What is ${v1} + ${v2}?`;
}
