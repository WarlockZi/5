const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
  .sourceMaps()
  .react()
  .sass('resources/sass/app.scss',
    'public/css')


mix.browserSync({
  proxy: 'localhost:8000'
});
