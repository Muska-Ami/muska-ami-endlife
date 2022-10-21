---
title: 'Composer卡在Loading composer repositories with package information的解决方法'
date: 2021-10-17 14:31:15
tag: 教程
---
<p>主要是中国防火墙太那啥了，执行下面的命令修改拉取信息的源就可以了
{%codeblock%}composer config -g repo.packagist composer https://packagist.phpcomposer.com{%endcodeblock%}
下面再给出两个源:<br />
阿里云<br />
https://mirrors.aliyun.com/composer/<br />
腾讯云<br />
https://mirrors.cloud.tencent.com/composer/</p>
