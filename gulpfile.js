var gulp = require("gulp");
var minify = require("gulp-minify");
var concat = require("gulp-concat");

gulp.task("build", function() {
	return gulp
		.src(["./lib/quicksettings.min.js", "./src/main.js"])
		.pipe(concat("koch-snowflake.js"))
		.pipe(
			minify({
				ext: {
					src: ".js",
					min: ".min.js"
				}
			})
		)
		.pipe(gulp.dest("./build/"));
});
