/*
 * Main: the main manager of things wrt this logic
 * HanishKVC, 2021
 * GPL
 */


var gelTop, gelMain, gelBottom;
var gelQtn, gelHint, gelAns;
var gelAdd;


function update_status(msg) {
	gelStatus.textContent = msg;
}


function show_multichoice(el, ans, maxValue, fixedPoints=0, numMCs=4, cbFunc, cbArgs) {
	el.innerHTML = "";
	let pos = Math.round(Math.random()*numMCs);
	let mc = [];
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
		let msg;
		let btn = document.createElement("button");
		btn.id = "b${i}";
		value = mc[i];
		if (value === ans) {
			msg = `Correct Ans: ${value}`;
		} else {
			msg = "Wrong answer";
			if (cbFunc) cbFunc(cbArgs);
		}
		btn.onclick = function(ev) {
			update_status(msg);
		}
		btn.textContent = value.toFixed(fixedPoints);
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


