let mix = require('laravel-mix');

mix.js('src/js/app.js', 'www/js').setPublicPath('www').vue();
mix.css('src/css/style.css', 'css/style.css')