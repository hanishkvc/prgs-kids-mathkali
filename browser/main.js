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


function show_multichoice(el, args) {
	let fixedPoints = args.fixedPoints ? args.fixedPoints : 0;
	let numMCs = args.numMCs ? args.numMCs : 4;
	el.innerHTML = "";
	let pos = Math.round(Math.random()*numMCs);
	let mc = [];
	for(i = 0; i < pos; i++) {
		let other = Math.random()*(args.ans-1);
		if (fixedPoints === 0) other = Math.round(other);
		mc.push(other);
	}
	mc.push(args.ans);
	for(i = pos+1; i < 4; i++) {
		let other = (args.ans+1) + Math.random()*(args.maxValue-args.ans);
		if (fixedPoints === 0) other = Math.round(other);
		mc.push(other);
	}
	for(i in mc) {
		let msg;
		let btn = document.createElement("button");
		btn.id = "b${i}";
		let value = mc[i];
		if (value === args.ans) {
			msg = `Answer ${value} is Correct`;
		} else {
			msg = `Answer ${value} is Wrong`;
		}
		btn.onclick = function(ev) {
			update_status(msg);
			args.cbArgs['res'] = value;
			if (args.cbFunc) args.cbFunc(args.cbArgs);
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


