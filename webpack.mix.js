const mix = require('laravel-mix');

mix
  .js('resources/js/app.js', 'public/js')
  .js('resources/js/react.js', 'public/js/react')
  .sourceMaps()
  .react()
  .sass('resources/sass/app.scss',
    'public/css',{
      // sassOptions: {
      //   outputStyle: 'nested'
      // }
    })
  .sass('resources/sass/react.scss',
  'public/css/react',{
    // sassOptions: {
    //   outputStyle: 'nested'
    // }
  })


mix.browserSync({
  proxy: 'localhost:8000'
});
