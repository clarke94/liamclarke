const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');

(async () => {
    await imagemin(['static/content/images/*.{jpg,png}'], {
        destination: 'static/content/images/',
        plugins: [
            imageminJpegtran(),
            imageminPngquant({
                quality: [0.6, 0.8],
            }),
        ],
    });
})();
