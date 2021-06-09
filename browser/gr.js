/*
 * A bunch of Graphics/Canvas related operations
 * HanishKVC, 2021
 * GPL
 */


var g = { x: 0, y: 0 };
var ob = { w: 20, h: 20 };

function create_biscuit() {
	let pf = new Path2D();
	pf.moveTo(0, 0);
	pf.lineTo(0, ob.h);
	pf.lineTo(ob.w, ob.h);
	pf.lineTo(ob.w, 0);
	pf.lineTo(0, 0);
	pf.moveTo(ob.w*0.5, ob.h*0.1);
	pf.lineTo(ob.w*0.5, ob.h*0.9);
	ob.full = pf;
	let ph = new Path2D();
	ph.moveTo(0, 0);
	ph.lineTo(0, ob.h);
	ph.lineTo(ob.w*0.5, ob.h);
	ph.lineTo(ob.w*0.4, ob.h*.5);
	ph.lineTo(ob.w*0.5, 0);
	ph.lineTo(0, 0);
	ob.half = ph;
}


function draw_biscuits(x, y, fullCnt, halfCnt) {
	gCtxt.save();
	if (x === -1) x = g.x;
	if (y === -1) y = g.y;
	gCtxt.translate(x,y);
	for(i=0; i<halfCnt; i++) {
		gCtxt.stroke(ob.half);
		gCtxt.translate(0,ob.h+2);

	}
	for(i=0; i<fullCnt; i++) {
		gCtxt.stroke(ob.full);
		gCtxt.translate(0,ob.h+2);
	}
	gCtxt.restore();
}


function gr_clean() {
	gCtxt.fillStyle = "#8080D0";
	gCtxt.fillRect(0,0,gelCanvas.width, gelCanvas.height);
}


function gr_init(elCanvas) {
	gCtxt = elCanvas.getContext('2d');
	elCanvas.width = window.innerWidth*0.98;
	elCanvas.height = Math.round(window.innerHeight*0.66);
	gr_clean();
	create_biscuit();
}

