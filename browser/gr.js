/*
 * A bunch of Graphics/Canvas related operations
 * HanishKVC, 2021
 * GPL
 */


var g = { x: 0, y: 0 };
var ob;


function init_biscuits() {
	let ob = {};
	ob.w = Math.round(g.screenWidth * 0.06);
	ob.h = Math.round(g.screenHeight * 0.06);
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
	return ob;
}


function draw_objects(ob, x, y, fullCnt, halfCnt) {
	gCtxt.save();
	gCtxt.save();
	if (x === -1) x = g.x; else g.x = x;
	if (y === -1) y = g.y; else g.y = y;
	gCtxt.translate(x, y);
	for(i=0; i<halfCnt; i++) {
		gCtxt.stroke(ob.half);
		g.y += ob.h+2;
		gCtxt.translate(0, ob.h+2);
		if ((g.screenHeight-g.y) < (ob.h*2)) {
			g.x += (ob.w+2);
			g.y = y;
			gCtxt.restore();
			gCtxt.save();
			gCtxt.translate(g.x, g.y);
		}
	}
	for(i=0; i<fullCnt; i++) {
		gCtxt.stroke(ob.full);
		g.y += ob.h+2;
		gCtxt.translate(0, ob.h+2);
		if ((g.screenHeight-g.y) < (ob.h*2)) {
			g.x += (ob.w+2);
			g.y = y;
			gCtxt.restore();
			gCtxt.save();
			gCtxt.translate(g.x, g.y);
		}
	}
	g.x += (ob.w+2);
	gCtxt.restore();
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
	g.screenWidth = elCanvas.width;
	g.screenHeight = elCanvas.height;
	gr_clean();
	ob = init_biscuits();
}

