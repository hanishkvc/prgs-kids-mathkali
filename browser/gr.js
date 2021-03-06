/*
 * A bunch of Graphics/Canvas related operations
 * HanishKVC, 2021
 * GPL
 */


var g = { x: 0, y: 0 };
var ob;


function init_biscuits() {
	let ob = {};
	ob.w = Math.round(g.screenWidth * 0.04);
	ob.h = Math.round(g.screenHeight * 0.04);
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


/*
 * draw a bunch of objects.
 * ob: the object
 * x,y: the starting location. If -1, then pick from global next x,y values.
 *	even this logic will update the global x and y.
 * full: the details about full size objects that need to be shown.
 * half: the details about half size objects that need to be shown.
 * 	cnt: the number of such objects to show.
 * 	color: array of [color values + number of objects with that color].
 */
function draw_objects(ob, x, y, full, half) {
	g.ctxt.save();
	g.ctxt.save();
	if (x === -1) x = g.x; else g.x = x;
	if (y === -1) y = g.y; else g.y = y;
	if (half.color === undefined) half.color = [ {cnt:half.cnt, color: 'green'} ];
	if (full.color === undefined) full.color = [ {cnt:full.cnt, color: 'green'} ];
	g.ctxt.translate(x, y);
	colorIndex = 0;
	for(i=0; i<half.cnt; i++) {
		if (i >= half.color[colorIndex].cnt) {
			colorIndex += 1;
		}
		let color = half.color[colorIndex].color;
		g.ctxt.fillStyle = color;
		g.ctxt.fill(ob.half);
		g.ctxt.stroke(ob.half);
		g.y += ob.h+2;
		g.ctxt.translate(0, ob.h+2);
		if ((g.screenHeight-g.y) < (ob.h*2)) {
			g.x += (ob.w+2);
			g.y = y;
			g.ctxt.restore();
			g.ctxt.save();
			g.ctxt.translate(g.x, g.y);
		}
	}
	colorIndex = 0;
	for(i=0; i<full.cnt; i++) {
		if (i >= full.color[colorIndex].cnt) {
			colorIndex += 1;
		}
		let color = full.color[colorIndex].color;
		g.ctxt.fillStyle = color;
		g.ctxt.fill(ob.full);
		g.ctxt.stroke(ob.full);
		g.y += ob.h+2;
		g.ctxt.translate(0, ob.h+2);
		if ((g.screenHeight-g.y) < (ob.h*2)) {
			g.x += (ob.w+2);
			g.y = y;
			g.ctxt.restore();
			g.ctxt.save();
			g.ctxt.translate(g.x, g.y);
		}
	}
	g.x += (ob.w+2);
	g.ctxt.restore();
	g.ctxt.restore();
}


function gr_clear() {
	g.ctxt.fillStyle = "#8080D0";
	g.ctxt.fillRect(0,0,gelCanvas.width, gelCanvas.height);
}


function gr_init(elCanvas) {
	g.ctxt = elCanvas.getContext('2d');
	elCanvas.width = window.innerWidth*0.98;
	elCanvas.height = Math.round(window.innerHeight*0.66);
	g.screenWidth = elCanvas.width;
	g.screenHeight = elCanvas.height;
	gr_clear();
	ob = init_biscuits();
}

