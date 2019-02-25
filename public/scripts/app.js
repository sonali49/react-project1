'use strict';

console.log('App.js is running!');

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'River of news'
  ),
  React.createElement(
    'span',
    null,
    'This is testing again'
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
