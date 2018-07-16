var os = require('os');
var colors = require('colors');

function formatTime() {
	var time = os.uptime();
	var hours = Math.floor(time / 3600);
	time = time - hours * 3600;
	var minutes = Math.floor(time / 60);
	var seconds = Math.floor(time - minutes * 60);


	console.log(colors.green("Uptime: ~ ") + hours + 'h ' + minutes + " min " + seconds + ' sec');
}

exports.print = formatTime;
