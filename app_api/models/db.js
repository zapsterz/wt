var mongoose = require( 'mongoose' );

var dbURI = 'mongodb://127.0.0.1/wts';

if (process.env.NODE_ENV === 'production'){
	dbURI = process.env.MONGOLAB_URI;
}
mongoose.connect(dbURI);


var readLine = require ("readline");
if (process.platform === "win32"){
	var rl = readLine.createInterface ({
		input: process.stdin,
		output: process.stdout
	});
	rl.on ("SIGINT", function (){
		process.emit ("SIGINT");
	});
};

mongoose.connection.on('connected', function () {
	console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error',function (err) {
	console.log('Mongoose connection error: '+ err);
});

mongoose.connection.on('disconnected', function () {
	console.log('Mongoose disconnected');
});

var gracefulShutdown = function (msg, callback) {
	mongoose.connection.close(function () {
		console.log('Mongoose disconnected through ' + msg);
		callback();
	});
};

//for nodemon restarts
process.once('SIGUSR2', function () {
	gracefulShutdown('nodemon restart', function () {
		process.kill(process.pid, 'SIGUSR2');
	});
});


//for app termination
process.on('SIGINT', function () {
	gracefulShutdown('app termination', function () {
		process.exit(0);
	});
});

//for heroku app termination
process.on('SIGTERM', function() {
	gracefulShutdown('Heroku app shutdown', function () {
		process.exit(0);
	});
});

//file including schemas
//require('./quizzes');
//require('./questions');
//require('./user_results');
//require('./admin_results');
//require('./userquizzes');
require('./users');
//require('./groups');
//require('./groupsadmins');
//require('./quizzesdone');
//require('./quizzestodo');
