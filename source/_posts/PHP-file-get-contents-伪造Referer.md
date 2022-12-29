---
title: PHP file_get_contents() 伪造Referer
date: 2022-12-29 10:33:19
tags:
---
方法如下
添加请求的Referer地址
```php
<?php
$url = ""; // 请求地址
$referer = ""; // 这里写Referer
$opt = array('http' => array('header'=>"Referer: $referer"));
$context = stream_context_create($opt);
$fgc = file_get_contents($url, false, $context);
```

!!! note 笔记：获取随机二次元图——破解微博图床Referer检测
    代码如下
    原理：添加Referer为 `https://weibo.com` ，通过 `file_get_contents()` 由服务器获得图像数据再输出给客户端
    需要设置 `header()` 中 `Content-type`

```php
<?php
$url = "https://api.ixiaowai.cn/api/api.php";
$opt = array('http' => array('header'=>"Referer: https://weibo.com"));
$context = stream_context_create($opt);
header("Content-type: image/jpeg");
echo file_get_contents($url, false, $context);
```
