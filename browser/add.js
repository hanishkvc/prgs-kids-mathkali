/*
 * Main: the main manager of things wrt this logic
 * HanishKVC, 2021
 * GPL
 */


function vhint_add(data) {
	gr_clear();
	let v1 = data.v1;
	let v2 = data.v2;
	let res = data.res;
	let v1Full = { cnt: v1 , color: [ { cnt: v1, color: "green" } ] };
	let v1Half = { cnt: 0 };
	let v2Full = { cnt: v2 , color: [ { cnt: v2, color: "green" } ] };
	let v2Half = { cnt: 0 };
	let rem;
	if (res !== undefined) {
		v1Full.color[0].cnt = res;
		rem = res - v1;
		if (rem < 0) {
			v1Full.color.push({ cnt: v1, color: "yellow" });
		}
		v2Full.color[0].cnt = rem;
		rem = rem - v2;
		if (rem < 0) {
			v2Full.color.push({ cnt: v2, color: "yellow" });
		}
	}
	draw_objects(ob, 40, 20, v1Full, v1Half);
	draw_objects(ob, -1, 20, v2Full, v2Half);
}


function hoc_add(ev, elQ, elH, elA) {
	update_status("Answer the new question...");
	let v1 = Math.round(Math.random()*99);
	let v2 = Math.round(Math.random()*99);
	elQ.textContent = `What is ${v1} + ${v2}?`;
	data = {'v1': v1, 'v2': v2};
	vhint_add(data);
	show_multichoice(elA, v1+v2, 99*2);
}
