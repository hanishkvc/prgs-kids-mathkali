/*
 * Manage some user related data like time taken, ...
 * HanishKVC, 2021
 * GPL
 */


var user = {};


function user_starttime(type) {
	user.type = type;
	user.curTime = performance.now()/1000;
}


function user_update(correct) {
	let type = user.type;
	if (type === undefined) {
		console.log("ERRR:UserUpdateTime called with undefined type");
		return;
	}
	let time = performance.now()/1000;
	time = (time - user.curTime);
	if (user.times[type] === undefined) user.times[type] = { min: 99999, max: 0, avg: 0, correct: 0, wrong: 0 };
	if ((correct === undefined) || (correct === false)) {
		user.times[type].wrong += 1;
		return;
	}
	user.times[type].correct += 1;
	if (user.times[type].min > time) user.times[type].min = time;
	if (user.times[type].max < time) user.times[type].max = time;
	user.times[type].avg = (user.times[type].avg + time)/2;
}


function user_setup() {
	user.type = undefined;
	user.totalTime = 0;
	user.curTime = 0;
	user.times = { };
}


