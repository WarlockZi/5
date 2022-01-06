const mix = require('laravel-mix');

mix

  .js('resources/js/app.js', 'public/js')
  // .js('resources/js/react.js', 'public/js/react')

  .react()

  .sass('resources/sass/app.scss',
    'public/css',{
    })
  // .sass('resources/sass/react.scss',
  // 'public/css/react',{
  // })

  .sourceMaps()

// это для source-map
if ( ! mix.inProduction()) {
  mix.webpackConfig({
    devtool: 'inline-source-map'
  })
}


mix.browserSync({
  proxy: 'localhost:8000'
});
