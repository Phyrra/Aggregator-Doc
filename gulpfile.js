var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tsify = require('tsify')
var embedTemplates = require('gulp-angular-embed-templates');
var sass = require('gulp-sass');
var concatCss = require('gulp-concat-css');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
	return gulp.src([
			'app/**/*.scss'
		])
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('tmp/css/.'))
		.pipe(concatCss('styles.css'))
		.pipe(gulp.dest('build'));
});
 
gulp.task('embed-templates', function() {
    return gulp.src('app/**/*.ts')
        .pipe(embedTemplates({
			sourceType: 'ts',
			basePath: 'app/components',
			skipFiles: function(file) {
				return file.path.endsWith('sama-content.ts');
			}
		}))
        .pipe(gulp.dest('tmp/precompile'));
});

gulp.task('compile', ['embed-templates'], function() {
    return browserify({
        basedir: '.',
        debug: true,
        entries: [
			'tmp/precompile/module.ts'
		],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('build'));
});

gulp.task('copy', function() {
	gulp.src([
		'app/index.html',
		'app/content.html',
		'favicon.ico',
		'bower_components/sama-aggregator/lib/Aggregator.js'
	])
	.pipe(gulp.dest('build'));

	gulp.src([
		'node_modules/zone.js/dist/zone.js',
		'node_modules/reflect-metadata/Reflect.js',
		'node_modules/font-awesome/css/font-awesome.min.css'
	])
	.pipe(gulp.dest('build/deps'));

	gulp.src([
		'node_modules/font-awesome/fonts/*'
	])
	.pipe(gulp.dest('build/fonts'))

	return true;
});

gulp.task('build', ['compile', 'sass', 'copy'], function() {
	
});

gulp.task('serve', ['build'], function() {
	browserSync.init({
		server: './build',
		online: true // speeds up startup
	});
});

gulp.task('quick-serve', function() {
	browserSync.init({
		server: './build',
		online: true // speeds up startup
	});
});