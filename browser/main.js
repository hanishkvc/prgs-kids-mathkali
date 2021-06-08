/*
 * Main: the main manager of things wrt this logic
 * HanishKVC, 2021
 * GPL
 */


var gelAdd;



function setup_things() {
	gelAdd = document.getElementById("add");
	gelAdd.onclick = (ev) => hoc_add(ev, gelMain);
}


function start_here() {
	setup_things();
}


