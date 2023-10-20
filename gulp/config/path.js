import * as nodePath from "path"

const rootFolder = nodePath.basename(nodePath.resolve());
const distFolder = "./dist";
const srcFolder = "./src";

export const path = {
    dist: {
        html: `${distFolder}/`,
        css: `${distFolder}/css/`,
        js: `${distFolder}/js/`,
        images: `${distFolder}/img/`,
        fonts: `${distFolder}/fonts/`,
        files: `${distFolder}/files/`
    },
    src: {
        html: `${srcFolder}/*.html`,
        scss: `${srcFolder}/scss/style.scss`,
        js: `${srcFolder}/js/app.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        files: `${srcFolder}/files/**/*.*`,
        svgicons: `${srcFolder}/svgicons/*.svg`
    },
    watch: {
        html: `${srcFolder}/**/*.html`,
        scss: `${srcFolder}/scss/**/*.scss`,
        js: `${srcFolder}/js/**/*.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
        files: `${srcFolder}/files/**/*.*`
    },
    clean: distFolder,
    rootFolder: rootFolder,
    distFolder: distFolder,
    srcFolder: srcFolder,
};  