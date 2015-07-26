Package.describe({
  name: 'miniwe:range2dslider',
  version: '0.0.4',
  summary: 'Simple and easily customizable plugin for quickly creating sliders from http://xdsoft.net/jquery-plugins/demo/range2dslider/',
  git: 'https://github.com/Miniwe/range2dslider.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.addFiles([
    'jquery.range2dslider.css',
    'jquery.range2dslider.js'
  ], 'client');
});
