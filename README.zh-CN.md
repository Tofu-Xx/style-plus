<h1>
  <p align=center>
    style-plus
  </p>
</h1>
<p align=center>
  <b>简体中文</b> | <a href="./README.zh-CN.md">English</a>
</p>

> 增强style属性，支持CSS嵌套语法

## 前置条件

浏览器支持[CSS嵌套](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)

## 写法

```html
<div style="&{ <CSS 嵌套语法> }" />
```

## 例子

```html
<ul
  style="
    & > li {
      color: blue;
      &:hover {
        color: red;
      }
    }
  "
>
  <li>1</li>
  <li>2</li>
</ul>
```

## 安装

```html
<script src="https://unpkg.com/style-plus"></script>
```

**or**

```html
<script src="https://cdn.jsdelivr.net/npm/style-plus"></script>
```
