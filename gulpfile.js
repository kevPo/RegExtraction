var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');

var paths = {
    styles: {
		src: './content/sass',
		files: './content/sass/**/*.scss',
		dest: './content'
	}
}

var displayError = function(error) {
    var errorString = '[' + error.plugin + ']';
	errorString += ' ' + error.message.replace("\n",''); 

	if(error.fileName)
		errorString += ' in ' + error.fileName;

	if(error.lineNumber)
		errorString += ' on line ' + error.lineNumber;

	console.error(errorString);
}

gulp.task('sass', function (){
	gulp.src(paths.styles.files)
	.pipe(sass({
		outputStyle: 'compressed',
		sourceComments: 'map',
		includePaths : [paths.styles.src]
	}))
	.on('error', function(err){
		displayError(err);
	})
	.pipe(prefix(
		'last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'
	))
	.pipe(gulp.dest(paths.styles.dest))
});

gulp.task('default', ['sass'], function() {
	gulp.watch(paths.styles.files, ['sass'])
	.on('change', function(evt) {
		console.log(
			'[watcher] File ' + evt.path.replace(/.*(?=sass)/,'') + ' was ' + evt.type + ', compiling...'
		);
	});
});