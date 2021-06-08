/*
 * Main: the main manager of things wrt this logic
 * HanishKVC, 2021
 * GPL
 */


var gelTop, gelMain, gelBottom;
var gelQtn, gelHint, gelAns;
var gelAdd;



function setup_things() {
	gelTop = document.getElementById("top");
	gelMain = document.getElementById("main");
	gelBottom = document.getElementById("bottom");
	gelQtn = document.getElementById("question");
	gelHint = document.getElementById("hint");
	gelAns = document.getElementById("answer");
	gelAdd = document.getElementById("add");
	gelAdd.onclick = (ev) => hoc_add(ev, gelQtn, gelHint, gelAns);
}


function start_here() {
	console.log("MathKali: Starting...");
	setup_things();
}


