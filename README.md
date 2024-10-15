<h1>
  <p align=center>
    style-plus
  </p>
</h1>
<p align=center>
  <b>简体中文</b> | <a href="./README.zh-CN.md">English</a>
</p>

## precondition
Browser support [CSS nesting](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)

## style of writing
```html
<div style="&{ <CSS 嵌套语法> }"/>
```

## example
```html
<ul style="&>li{
  color:blue;
  &:hover{
    color:red;
  }
}">
  <li>1</li>
  <li>2</li>
</ul>
```

## install

```html
<script src="https://unpkg.com/style-plus"></script>
```
**or**
```html
<script src="https://cdn.jsdelivr.net/npm/style-plus"></script>
```
