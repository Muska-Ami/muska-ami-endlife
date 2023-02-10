---
title: '在这Termux里捣鼓IntelliJ IDEA'
date: 2022-11-06 14:57:00
tag: 教程
---
懂得都懂，写Java写习惯了突然没电脑用不能用IDEA就很难受，然后就捣鼓了一下尝试Termux安装IDEA

## 安装Ubuntu系统

这里用`proot-distro`来安装和启动Ubuntu
首先执行安装命令安装(如果较慢请自备魔法，或者等)
安装`proot-distro`

```bash
pkg install proot-distro
```

安装`Ubuntu`

```bash
proot-distro install ubuntu
```

安装完毕后，执行下方命令进入系统

```bash
proot-distro login ubuntu
```

然后你就完成一半了!

## 部署VNC服务

接下来让我们安装VNC服务，这里用的是`tmoe`的脚本
启动`tmoe`脚本

```bash
cd /tmp
curl -LO https://l.tmoe.me/2.awk
awk -f 2.awk
```

然后选择`<Tools>`
![](https://resource.huahuo-cn.tk/media/blog/termux-idea/Screenshot_20221106_150608_com.termux_edit_27848059930646.jpg)
选择`GUI:图形界面`
![](https://resource.huahuo-cn.tk/media/blog/termux-idea/Screenshot_20221106_150617_com.termux_edit_27841159832209.jpg)
选择`rootless_DE`，这样有没有root都可以跑
![](https://resource.huahuo-cn.tk/media/blog/termux-idea/Screenshot_20221106_150639_com.termux_edit_27833758068148.jpg)
这里选择`xface`
![](https://resource.huahuo-cn.tk/media/blog/termux-idea/Screenshot_20221106_150642_com.termux_edit_27826552737941.jpg)
![](https://resource.huahuo-cn.tk/media/blog/termux-idea/Screenshot_20221106_150705_com.termux_edit_27819461874400.jpg)
然后会提示是否安装推荐软件，这个安不安装不影响，取决于你自己
等等安装完成，会提示启动的VNC，我这里用`<tiger>`
![](https://resource.huahuo-cn.tk/media/blog/termux-idea/Screenshot_20221106_150924_com.termux_edit_27812829290026.jpg)
选择一个VNC端口，等会连接要用
![](https://resource.huahuo-cn.tk/media/blog/termux-idea/Screenshot_20221106_150931_com.termux_edit_27802792696798.jpg)
至此部署完毕，全部选择最后一项退出tmoe脚本

## 安装IntelliJ IDEA

首先预备一个VNC客户端(随便下一个，这里推荐`VNC Viewer`)，等会连接要用
使用自带`apt`命令安装Java

```bash
apt update
apt install openjdk-8-jre
```

然后让我们下载IntelliJ IDEA Linux版本
[https://www.jetbrains.com/idea/](https://www.jetbrains.com/idea/)
然后复制到一个目录下并解压，比如我放在`/opt/idea/`中

```bash
cp <idea文件路径带名称> /opt/idea/
cd /opt/idea/
tar xzvf <idea文件名>
```

然后就大功告成！没错，不需要配置环境变量

## 连接VNC

设置下管理员密码，不然我自己都不知道

```bash
passwd
```

输出

```bash
root@localhost:/opt/idea# passwd
New password:
Retype new password:
passwd: password updated successfully
```

就成功了
先启动VNC服务

```bash
startvnc
```

返回

```bash
root@localhost:/tmp# startvnc
Starting vnc server ...
The current vnc port is 5902, and vnc address is localhost:5902                               removed '/tmp/.X2-lock'
removed '/tmp/.X11-unix/X2'
sudo service dbus start
 * Starting system message bus dbus     [ OK ]
 * dbus is not running                         Dbus is not running.
正在启动vnc服务,本机vnc地址 localhost:5902
IPv6地址 [::1]:5902                            [2409:815c:e614:146:e0d9:6073:d069:871f]:5902
The LAN VNC address 局域网地址 192.168.1.113:5902
vnc pid: 19185
session pid: 19187
cat -n /root/.vnc/vnc.log
     1
     2  Xvnc TigerVNC 1.12.0 - built 2022-03-25 17:06
     3  Copyright (C) 1999-2021 TigerVNC Team and many others (see README.rst)
     4  Underlying X server release 12101003, X.Org                                                5
     6
     7  Sun Nov  6 07:33:19 2022
     8   vncext:      VNC extension running!
     9   vncext:      Listening for VNC connections on all interface(s), port 5902                10   vncext:      created VNC server for screen 0
```

打开安装的VNC客户端，添加VNC服务器，地址写`localhost:<刚才选的端口>`，连接
显示像我这个图就成功了
![](https://resource.huahuo-cn.tk/media/blog/termux-idea/Screenshot_20221106_153428_com.realvnc.viewer.android.jpg)
这里直接移除插件就行
打开刚才我们安装idea的位置，解压出的文件中有个`bin`文件夹，里面有个`idea.sh`，运行即可启动IntelliJ IDEA
![](https://resource.huahuo-cn.tk/media/blog/termux-idea/Screenshot_20221106_154249_com.realvnc.viewer.android.jpg)
