const mix = require('laravel-mix');
mix.setPublicPath(__dirname);

// Render Tailwind style (input, output)
mix.postCss('assets/styles/base.css', 'assets/styles/theme.css', [
  require('postcss-import'),
  require('tailwindcss'),
]);

mix.browserSync({
  proxy: 'https://dev.mcgonigle.studio/projects/mcgonigle.dev',
  open: false,
  notify: false,
  files: [
    '**/**/*.htm',
  ],
});