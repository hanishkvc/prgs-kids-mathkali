/*
 * Main: the main manager of things wrt this logic
 * HanishKVC, 2021
 * GPL
 */


function vhint_add(v1, v2) {
	gr_clean();
	draw_biscuits(10,10, v1, 0);
	draw_biscuits(100,10, v2, 0);
}


function hoc_add(ev, elQ, elH, elA) {
	let v1 = Math.round(Math.random()*10);
	let v2 = Math.round(Math.random()*10);
	elQ.textContent = `What is ${v1} + ${v2}?`;
	vhint_add(v1, v2);
}
