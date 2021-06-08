/*
 * A bunch of Graphics/Canvas related operations
 * HanishKVC, 2021
 * GPL
 */


function create_biscuit() {
	pf = new Path2D();
	pf.moveTo(0,0);
	pf.lineTo(0,20);
	pf.lineTo(20,20);
	pf.lineTo(20,0);
	pf.lineTo(0,0);
	pf.moveTo(5,5);
	pf.lineTo(5,15);
	pf.lineTo(15,15);
	pf.lineTo(15,5);
	pf.lineTo(5,5);
	ph = new Path2D();
	ph.moveTo(0,0);
	ph.lineTo(0,20);
	ph.lineTo(10,20);
	ph.lineTo(10,15);
	ph.lineTo(5,15);
	ph.lineTo(5,5);
	ph.lineTo(10,5);
	ph.lineTo(10,0);
	ph.lineTo(0,0);
}


function draw_biscuits(x, y, fullCnt, halfCnt) {
	gCtxt.save();
	gCtxt.translate(x,y);
	for(i=0; i<halfCnt; i++) {
		gCtxt.stroke(ph);
		gCtxt.translate(0,20);
	}
	for(i=0; i<fullCnt; i++) {
		gCtxt.stroke(pf);
		gCtxt.translate(0,20);
	}
	gCtxt.restore();
}


function gr_clean() {
	gCtxt.fillStyle = "#8080D0";
	gCtxt.fillRect(0,0,gelCanvas.width, gelCanvas.height);
}


function gr_init(elCanvas) {
	gCtxt = elCanvas.getContext('2d');
	elCanvas.width = window.innerWidth;
	elCanvas.height = Math.round(window.innerHeight*0.66);
	create_biscuit();
}

