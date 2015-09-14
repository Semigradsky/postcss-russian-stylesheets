<img src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f1f7-1f1fa.png" alt="flag" width="32" /> PostCSS Russian Stylesheets [![Build Status][ci-img]][ci]
===

[PostCSS] plugin for writing Russian Style Sheets.

Based on [1css](https://github.com/azproduction/1css).

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/Semigradsky/postcss-russian-stylesheets.svg
[ci]:      https://travis-ci.org/Semigradsky/postcss-russian-stylesheets

## Input
```css
.some-class {
  высота: 20пикселей;
  отображение: блочное;
  цвет: черный;
  цвет-фона: желтый;
}
```


## Output
```css
.some-class {
  height: 20px;
  display: block;
  color: black;
  background-color: yellow;
}
```

## Usage
```js
postcss([ require('postcss-russian-stylesheets') ])
```

See [PostCSS] docs for examples for your environment.

See also [postcss-russian-units](https://github.com/Semigradsky/postcss-russian-units):
```css
.some-class {
  высота: 10ногтей;
  ширина: 4перста;
}
```
