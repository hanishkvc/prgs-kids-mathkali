/*
 * Main: the main manager of things wrt this logic
 * HanishKVC, 2021
 * GPL
 */


function hoc_add(ev, elQ, elH, elA) {
	let v1 = Math.round(Math.random()*10);
	let v2 = Math.round(Math.random()*10);
	elQ.textContent = `What is ${v1} + ${v2}?`;
}
