---
title: 'HTML(CSS) Chromium内核浏览器自定义滑动条'
date: 2021-11-27 22:06:15
tag: 教程
---
<h3>::-webkit-scrollbar</h3>
滚动条整体部分，其中的属性有width，height，background，border，border-radius（就和一个块级元素一样）等。
其中：
width：定义的是纵向滚动条的宽度。不能控制横向滚动条的宽度。
height：定义的是横向滚动条的高度。同理不能控制横向滚动条的高度

- 一个简单的演示

```css
::-webkit-scrollbar {
    background: skyblue;
    width: 10px;
    height: 10px;
    border: 1px #000 solid;
    border-radius: 2px;
}
```

它不仅能控制窗口的滚动条，也能控制标签的滚动条。  
<h3>::-webkit-scrollbar-button</h3>
滚动条两端的按钮，可以用 display:none 让其不显示，也可以添加背景图片，颜色改变显示效果

- 演示

```css
::-webkit-scrollbar-button {
    background: red;
    border-radius: 2px;
}
```

<h3>::-webkit-scrollbar-track</h3>
外层轨道，可以用 display:none 让其不显示，也可以添加背景图片，颜色改变显示效果

- 演示

```css
::-webkit-scrollbar-track {
    border: 1px pink solid;
}
```

<h3>::-webkit-scrollbar-track-</h3>
内层轨道，外层轨道设置了，这个内层轨道也会跟着变
<h3>::-webkit-scrollbar-thumb</h3>
滚动条里的滑块

- 演示

```css
::-webkit-scrollbar-thumb {
    background: black;
    border: 1px white solid;
}
```

<h3>::-webkit-scrollbar-corner</h3>
边角
<h3>::-webkit-resizer</h3>
右下角拖动块
