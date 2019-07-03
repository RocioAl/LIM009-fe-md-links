"use strict";

// let ruta= 'C:\\Users\\Rocio Soledad\\Desktop\\LIM009-fe-md-links\\LIM009-fe-md-links';
// let ruta='https://github.com/markedjs/marked/issues/1279';
// let ruta= 'C:\\Users\\Rocio Soledad\\Desktop\\LIM009-fe-md-links\\LIM009-fe-md-links\\Readme.md';
var marked = require('marked');

module.exports.linksmd = function (markdown) {
  var links = [];
  var renderer = new marked.Renderer();

  renderer.link = function (href, title, text) {
    links.push({
      text: text,
      href: href
    });
  };

  marked(markdown, {
    renderer: renderer
  });
  return links;
}; // console.log(linksmd(ruta));