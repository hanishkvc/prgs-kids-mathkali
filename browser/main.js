/*
 * Main: the main manager of things wrt this logic
 * HanishKVC, 2021
 * GPL
 */


var gelTop, gelMain, gelBottom;
var gelQtn, gelHint, gelAns;
var gelAdd;


function update_status(msg) {
}

function show_multichoice(el, ans, maxValue, fixedPoints=0, numMCs=4) {
	el.innerHTML = "";
	let pos = Math.round(Math.random()*numMCs);
	mc = [];
	for(i = 0; i < pos; i++) {
		let other = Math.random()*(ans-1);
		mc.push(other);
	}
	mc.push(ans);
	for(i = pos+1; i < 4; i++) {
		let other = (ans+1) + Math.random()*(maxValue-ans);
		mc.push(other);
	}
	for(i in mc) {
		btn = document.createElement("button");
		btn.id = "b${i}";
		btn.textContent = mc[i].toFixed(fixedPoints);
		el.appendChild(btn);
	}
}


function setup_things() {
	gelTop = document.getElementById("top");
	gelMain = document.getElementById("main");
	gelBottom = document.getElementById("bottom");
	gelQtn = document.getElementById("question");
	gelHint = document.getElementById("hint");
	gelAns = document.getElementById("answer");
	gelCanvas = document.getElementById("canvas");
	gelStatus = document.getElementById("status");
	gelAdd = document.getElementById("add");
	gelAdd.onclick = (ev) => hoc_add(ev, gelQtn, gelHint, gelAns);
}


function start_here() {
	console.log("MathKali: Starting...");
	setup_things();
	gr_init(gelCanvas);
}


