var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var tsify = require("tsify")
var embedTemplates = require("gulp-angular-embed-templates");
var sass = require("gulp-sass");
var concatCss = require("gulp-concat-css");
var browserSync = require("browser-sync").create();

gulp.task("sass", function() {
	return gulp.src([
			'app/**/*.scss'
		])
		.pipe(sass().on("error", sass.logError))
		.pipe(gulp.dest("build/css/."))
		.pipe(concatCss("build/styles.css"))
		.pipe(gulp.dest('.'));
});
 
gulp.task("embed-templates", function() {
    return gulp.src("app/**/*.ts")
        .pipe(embedTemplates({
			sourceType: "ts",
			basePath: 'app/components',
			skipFiles: function(file) {
				return file.path.endsWith('sama-content.ts');
			}
		}))
        .pipe(gulp.dest("./build/precompile"));
});

gulp.task("build", ["embed-templates", "sass"], function() {
    return browserify({
        basedir: ".",
        debug: true,
        entries: [
			"build/precompile/module.ts"
		],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source("app.js"))
    .pipe(gulp.dest("build"));
});

gulp.task("serve", ["build"], function() {
	browserSync.init({
		server: './',
		online: true // speeds up startup
	});
});