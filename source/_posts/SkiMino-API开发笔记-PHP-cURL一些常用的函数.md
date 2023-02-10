---
title: 'SkiMino API开发笔记：PHP-cURL一些常用的函数'
date: 2022-1-2 15:16:22
tag: 笔记
---
使用PHP快速进行cURL请求
包括设置UA,Referer,超时时间等

```php
/**
 * @param mixed $url 请求地址
 * @param string $UA UA（可选）
 * @param string $refer 设置Referer
 * @param string $timeout 设置超时时长
*/
function curl($url, $UA = 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36 Edg/96.0.1054.53', $refer = '', $timeout = 10) {
	$header[] = "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8";
    $header[] = "Accept-Encoding: gzip, deflate, sdch, br";
    $header[] = "Accept-Language: zh-CN,zh;q=0.9";
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
	curl_setopt($ch, CURLOPT_USERAGENT, $UA);
	curl_setopt($ch, CURLOPT_REFERER, $refer);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_ENCODING, 'gzip,deflate');
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
	curl_setopt($ch, CURLOPT_TIMEOUT, $timeout);
	$output = curl_exec($ch);
	curl_close($ch);
	return $output;
}
```

使用PHP-cURL获取跳转到的链接

```php
/**
 * @param mixed $url 短链接（原链接）
*/
function LocaUrl($url) {
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_USERAGENT, "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36 Edg/96.0.1054.53"); //UA
	curl_setopt($ch, CURLOPT_VERBOSE, true);
	curl_setopt($ch, CURLOPT_HEADER, true);
	curl_setopt($ch, CURLOPT_NOBODY, true);
	curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET'); //请求方式
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_TIMEOUT, 10); //超时时长
	curl_setopt($ch, CURLOPT_AUTOREFERER, true);
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
	$res = curl_exec($ch);
	$info = curl_getinfo($ch);
	$retURL = $info['url'];
	curl_close($ch);
	return $retURL;
}
```
