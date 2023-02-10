---
title: 'Velocity代理端踩坑'
date: 2023-01-01 12:54:53
tag: [ "Minecraft", "Velocity" ]
---

!!! note
    这都踩坑，难受了

Velocity端使用 `modern` 模式转发数据的时候，子端的 `spigot.yml` 中需要把 `bungeecord` 选项改为 `false` ，不然会导致无法加入

同时要转发数据时要在Paper的配置文件里面将Velocity填写，以及将Velocity端中 `forwarding.secret` 文件内容填写到Paper的设置

要禁用Velocity端的 `/server` 命令，需要移除权限 `velocity.command.server`
我的方案是在Velocity端装Lockperms插件然后移除权限
参考: [https://docs.papermc.io/velocity/built-in-commands#server](https://docs.papermc.io/velocity/built-in-commands#server)
