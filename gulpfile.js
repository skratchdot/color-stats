var colorStats = require('./lib/color-stats.js');
var fs = require('fs');
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var nodeunit = require('gulp-nodeunit');

var jshintTask = function (task, paths) {
	gulp.task(task, function () {
		gulp.src(paths)
			.pipe(jshint())
			.pipe(jshint.reporter('default'));
	});
};

gulp.task('fix-readme', function () {
	var contents = fs.readFileSync('./README.md', 'utf-8').toString();
	var header1 = '#### Get Stats Result:';
	var header2 = '\n\n## Credits';
	var result = colorStats('#4682b4');
	var newReadme = [
		contents.substr(0, contents.indexOf(header1) + header1.length),
		'```javascript',
		JSON.stringify(result, null, '  '),
		'```',
		contents.substr(contents.indexOf(header2), contents.length)
	];
	fs.writeFileSync('./README.md', newReadme.join('\n'), 'utf-8');
});

gulp.task('test', function () {
	gulp.src('test/**/*.js')
		.pipe(nodeunit());
});

gulp.task('watch', function () {
	gulp.watch(['lib/**/*.js', 'test/**/*.js'], ['jshint:lib', 'jshint:test', 'test', 'fix-readme']);
	gulp.watch(['*.js', '*.json'], ['jshint:root']);
});

// setup tasks
jshintTask('jshint:root', ['*.js', '*.json']);
jshintTask('jshint:lib', 'lib/**/*.js');
jshintTask('jshint:test', 'test/**/*.js');
gulp.task('default', ['jshint:root', 'jshint:lib', 'jshint:test', 'test', 'fix-readme', 'watch']);

// handle errors
process.on('uncaughtException', function (e) {
	console.error(e);
});
