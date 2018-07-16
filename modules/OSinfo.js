var os = require('os');
var colors = require('colors');
var formatTime = require('./time');

function getOSinfo() {
	var type = os.type();
	var release = os.release();
	var cpu = os.cpus()[0].model;
	var uptime = os.uptime();
	var userInfo = os.userInfo();
	if(type === 'Darwin') {
		type = "OSX";
	} else if(type === 'Windows_NT') {
			type = "Windows";
			}
	console.log(colors.grey('System: '), type);
	console.log(colors.red('release: '), release);
	console.log(colors.blue('CPU model: '), cpu);
	//console.log(formatTime())	//'Uptime: ~', (uptime / 60).toFixed(0), 'min');
	console.log(colors.yellow('User name: '), userInfo.username);
	console.log('Home dir: ', userInfo.homedir);
	formatTime.print();
}

exports.print = getOSinfo;
