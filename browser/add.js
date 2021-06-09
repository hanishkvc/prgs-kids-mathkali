/*
 * Main: the main manager of things wrt this logic
 * HanishKVC, 2021
 * GPL
 */


function vhint_add(v1, v2) {
	gr_clear();
	draw_objects(ob, 40,20, v1, 0);
	draw_objects(ob, -1,20, v2, 0);
}


function hoc_add(ev, elQ, elH, elA) {
	let v1 = Math.round(Math.random()*99);
	let v2 = Math.round(Math.random()*99);
	elQ.textContent = `What is ${v1} + ${v2}?`;
	vhint_add(v1, v2);
	show_multichoice(elA, v1+v2, 99*2);
}
