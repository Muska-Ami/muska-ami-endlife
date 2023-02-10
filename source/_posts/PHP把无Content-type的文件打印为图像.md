---
title: 'PHP把无Content-type的文件打印为图像'
date: 2022-2-7 18:13:15
tag: 教程
---
用了GD库，记得开扩展

```php
/**
 * @param string url 图片地址
 * @param string type 图片类型
*/

$url = '';
$type = '';

switch ($type) {
    case 'png':
        header("Content-type: image/png");
        $im = imagecreatefrompng($url);
        imagepng($im);
        imagedestroy($im);
    break;
    case 'jpeg':
        header("Content-type: image/jpeg");
        $im = imagecreatefromjpeg($url);
        imagejpeg($im);
        imagedestroy($im);
    break;
    case 'webp':
        header("Content-type: image/webp");
        $im = imagecreatefromwebp($url);
        imagewebp($im);
        imagedestroy($im);
    break;
    case 'gif':
        header('Content-type: image/gif');
        $im = imagecreatefromgif($url);
        imagegif($im);
        imagedestroy($im);
    break;
    case 'wbmp':
        header('Content-type: image/wbmp');
        $im = imagecreatefromwbmp($url);
        imagewebp($im);
        imagedestroy($im);
    break;
    case 'svg':
        header('Content-type: image/svg+xml');
        echo file_get_contents($url);
    break;
    default:
        http_response_code (503);
        echo json_encode(
            array(
                "code" => 503,
                "message" => 'No set \'type\' or \'type\' can\'t identify'
            )
        );
    break;
}
```
