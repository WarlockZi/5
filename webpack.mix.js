const mix = require('laravel-mix');

mix

  .js('resources/js/Main/app.js', 'public')
  .js('resources/js/React/react.js', 'public')
  .js('resources/js/Auth/auth.js', 'public')

  .react()

  .sass('resources/sass/app.scss', 'public')
  .sass('resources/sass/react.scss', 'public')
  .sass('resources/sass/auth.scss','public')

  .sourceMaps()
  // .browserSync('localhost:8000')

// это для source-map
if ( ! mix.inProduction()) {
  mix.webpackConfig({
    devtool: 'source-map'
  })
}


mix.browserSync({
  proxy: 'localhost:8000'
});

