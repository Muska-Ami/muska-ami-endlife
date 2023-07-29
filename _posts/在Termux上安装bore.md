---
title: '在Termux上安装bore'
date: 2022-11-06 14:50:00
tag: 教程
---
最近发现了bore这样一个项目:
![bore](https://resource.huahuo-cn.tk/media/blog/bore-inc.jpg)
其实就是类似`frp`的NAT打洞工具，但是对比了一下，bore更适合cli开发
于是就打算在Termux上安装

## Termux-Tools一键安装

```bash
pkg install bore
```
然后执行命令`bore`，应该会看到如下输出
![bore-ret](https://resource.huahuo-cn.tk/media/blog/bore-ret.jpg)
这样代表你安装成功了

## 开启bore隧道

运行`local`命令，启动bore隧道
```bash
bore local <本地端口> --to bore.pub
```
或者使用自定义bore服务器
```bash
bore local <本地端口> --to <远程服务器地址>
```
输出如下内容则代表成功了，`listening at `后面的`bore.pub:<远程端口>`就是远程访问地址
这个地址是随机分配的，不用担心被占用
```bash
2022-11-06T06:42:17.773908Z  INFO bore_cli::client: connected to server remote_port=38309
2022-11-06T06:42:17.774004Z  INFO bore_cli::client: listening at bore.pub:38309
```

## 自建bore服务器

运行下面的命令即可启动bore服务器
```bash
bore server
```
输出下面的就是成功开启，`listening addr=`后面就是访问地址
```bash
2022-11-06T06:45:13.617597Z  INFO bore_cli::server: server listening addr=0.0.0.0:7835
```
