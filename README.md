<h1 align=center>style-plus</h1>
<p align=center>
  <a href="./README.zh-CN.md">简体中文</a> | <b>English</b>
</p>

Enhanced style attribute, supporting [CSS nesting](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting/Using_CSS_nesting) syntax
This means that you can write CSS selectors in inline styles

## Example
```html
<ul style="display: flex;li{flex: 1}">
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

## Usage
```html
<script src="https://unpkg.com/style-plus"></script>
```
**or**
```html
<script src="https://cdn.jsdelivr.net/npm/style-plus"></script>
```
