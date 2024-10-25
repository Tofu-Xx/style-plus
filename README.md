<h1 align=center>style-plus</h1>
<p align=center>
  <a href="./README.zh-CN.md">简体中文</a> | <b>English</b>
</p>

> Enhanced style attribute, supporting CSS nesting syntax

## Prerequisites

Browser support for [CSS nesting](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)

## Usage

```html
<div style="&{ <CSS nesting syntax> }" />
```

## Example

```html
<ul style="& > li {
  color: blue;
  &:hover {
    color: red;
  }
}">
  <li>1</li>
  ...
</ul>
```

## Installation

```html
<script src="https://unpkg.com/style-plus"></script>
```

**or**

```html
<script src="https://cdn.jsdelivr.net/npm/style-plus"></script>
```
