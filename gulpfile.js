var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('compile', function () {

	var tsProjectDts = ts.createProject('tsconfig.json', { sortOutput: true });
	var tsResult = gulp.src('src/**.ts')
		.pipe(ts(tsProjectDts));
	tsResult.dts
		// .pipe(concat('index.d.ts'))
		.pipe(gulp.dest('dist'));
});


gulp.task('default',["compile"], function() {
    // gulp.watch('*.ts', ['compile']);
});
