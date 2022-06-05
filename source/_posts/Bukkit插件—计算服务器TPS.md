---
title: Bukkit插件—计算服务器TPS
date: 2022-06-05 16:23:42
tags: 教程
---
CraftBukkit没内置TPS接口，所以整了个TPS计算

## 前置代码

先新创建个类，比如我这个叫**ServerTPS**，往里面塞计算器
```java
public class ServerTPS implements Runnable {
    public static final long[] TICKS = new long[600];
    public static int TICK_COUNT = 0;

    public static double getTPS() {
        return getTPS(100);
    }

    public static double getTPS(int ticks) {
        if (TICK_COUNT < ticks) {
            return 20.0D;
        }
        int target = (TICK_COUNT - 1 - ticks) % TICKS.length;
        long elapsed = System.currentTimeMillis() - TICKS[target];

        return ticks / (elapsed / 1000.0D);
    }

    public static long getElapsed(int tickID) {
        long time = TICKS[(tickID % TICKS.length)];
        return System.currentTimeMillis() - time;
    }

    public void run() {
        TICKS[(TICK_COUNT % TICKS.length)] = System.currentTimeMillis();
        TICK_COUNT += 1;
    }
}
```
然后再在主类的**onEnable()**里面调用
```java
// 我这里类名叫ServerTPS，所以用的是new ServerTPS()
// 用的时候注意改成自己的类名
Bukkit.getServer().getScheduler().scheduleSyncRepeatingTask(this, new ServerTPS(), 100L, 1L);
```

## 使用

获得当前TPS
```java
// 记得引入类
import example.ServerTPS;

ServerTPS.getTPS();
```
获取相对滞后程度
```java
// 记得引入类
import example.ServerTPS;

ServerTPS.getElapsed()
```
