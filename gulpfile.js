var gulp = require("gulp"),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    sourcemaps = require("gulp-sourcemaps");
    browserSync = require("browser-sync").create();


function style() {
    return (
        gulp
            .src('./sass/**/*.scss')
            .pipe(sourcemaps.init())
            .pipe(sass())
            .on("error", sass.logError)
            .pipe(postcss([ autoprefixer(), cssnano() ])) 
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('./css/'))
            // Add browsersync stream pipe after compilation
            .pipe(browserSync.stream())
    );
}


// Add browsersync initialization at the start of the watch task
function watch() {
    browserSync.init({
        // You can tell browserSync to use this directory and serve it as a mini-server
        server: {
            baseDir: '.',
        },
        // If you are already serving your website locally using something like apache
        // You can use the proxy setting to proxy that instead
        //proxy: "https://gulp4.dev.maxx7.net",

        socket: {
           // For local development only use the default Browsersync local URL.
           domain: 'localhost:3000'
           // For external development (e.g on a mobile or tablet) use an external URL.
           // You will need to update this to whatever BS tells you is the external URL when you run Gulp.
           // domain: '192.168.1.91:3000'
       }


    });

    gulp.watch("./sass/**/*.scss", style);
}

exports.style = style;
exports.watch = watch;