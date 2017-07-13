import Marked from 'marked';

const renderer = new Marked.Renderer();

// Heading
renderer.heading = function (string, level) {
  if (level > 2) {
    return `\n[h1]${string}[/h1]\n`;
  }
  return `\n[h1][b]${string}[/b][/h1]\n`;
};

// Italic
renderer.em = function (string) {
  return `[i]${string}[/i]`;
};

// Strong
renderer.strong = function (string) {
  return `[b]${string}[/b]`;
};

// Strike
renderer.del = function (string) {
  return `[strike]${string}[/strike]`;
};

// Paragraph
renderer.paragraph = function (text) {
  return `\n${text}\n`;
};

renderer.br = function () {
  return '\n';
};

// Url
renderer.link = function (href, title, text) {
  return `[url=${href}]${text}[/url]`;
};

// List or Olist
renderer.list = function (body, ordered) {
  if (ordered) {
    return `[olist]\n${body}[/olist]\n`;
  }
  return `[list]\n${body}[/list]\n`;
};

// List item
renderer.listitem = function (string) {
  return `[*]${string}\n`;
};

// Quote
renderer.blockquote = function (text) {
  const reg = /^\[(.*?)\]/;
  if (reg.test(text)) { // Contain author
    return `[quote=${RegExp.$1}]${text.replace(reg, '')}[/quote]\n`;
  }
  return `[quote]${text}[/quote]\n`;
};

// Code
renderer.code = function (string) {
  return `[code]\n${string}\n[/code]\n`;
};

renderer.codespan = function (string) {
  return `[b][i]${string}[/i][/b]`;
};

renderer.image = function (href) {
  return `[img]${href}[/img]`;
};

module.exports = function (text) {
  return Marked(text, { renderer, smartypants: false });
};
