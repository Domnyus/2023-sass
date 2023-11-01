const { src, dest, watch, series } = require("gulp")
const sass = require("gulp-sass")(require("sass"))

function buildStyle()
{
    return src("index.scss").pipe(sass()).pipe(dest("css"));
}

function watchStyle()
{
    watch(["index.scss"], buildStyle);
}

exports.default = series(buildStyle, watchStyle);