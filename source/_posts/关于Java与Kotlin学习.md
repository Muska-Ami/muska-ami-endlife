---
title: '关于Java与Kotlin的学习'
date: 2023-01-07 01:24:29
tag: 学习
---
入坑Java和Kotlin一来，弯路没少走，觉得该写篇感想了。

!!! warning
    本文内容全凭个人感受，不代表任何立场与观点

## 入坑Java与Kotlin的原因

Java入坑也有1年多了，Kotlin就短些，几个月吧，而且中途退坑了Kotlin好长一段时间，语法啥的都差不多忘了。

老实说，Java这门编程语言还是挺喜欢的，厌倦了Web技术，写点后端啥的也不错，因为我们这里几乎不上信息课，所以Python我也不会，自学了一段时间的PHP之后，对后端挺感兴趣，于是就打算开坑。开了个PHP的坑，无底洞，最后只能归档。但是一方面我个人对后端的兴趣不减，另一方面作为一名Minecraft Java版服务器的腐竹，考虑到两个因素，于是我入坑了Java。

## 入坑过程

入坑Java的第一次是自学Android APP，但是最后还是没搞懂(事实上到现在我还不会JavaFx)，于是就放弃了。后来看到了[Simple-Robot](https://simbot.forte.love/)这个玩意，又拿起来重新整了一下，结果显而易见，没有服务器，技术又差，就玩了几天然后跑了（XD。
正真正让我开始写Java项目的是[MiraiMC](https://github.com/DreamVoid/MiraiMC)这个项目，由于它可以通过Minecraft服务器运行，所以我对它非常的看重，并且看到它拥有较为齐全的API(也是最吸引我的)，于是便开始了我的Java之路。

最开始写的一团糟，然后就是不断的造Bug，顺便吐槽自己的项目[CatSero](https://github.com/XiaMoHuaHuo-CN/CatSero)，现在去看v1的代码感觉跟shit一样(到v2已经重写了4次了)。也正是在这个过程中，我入坑了Kotlin这门语言。
让我入坑Kotlin的，一方面是它的便捷性，比如下面这段Java代码:
```java
String s = "helloworld";
boolean b = true;
int i = 123;
long l = 123456789;
```
前面要定义一堆的类型，而Kotlin:
```kotlin
val s = "helloworld"
val b = true
val i = 123
val l = 123456789
```
直接无脑 `val` 或者 `var` ，根本不用管类型(有时候也会声明)，而且不需要打 `;` 来结束语句，就很舒服，而且这个类似js的样式非常吸引我(虽然我的js技术力为0，QAQ)。

## 入坑后

其实我现在觉得还好，自己对Java这块有些掌握，Kotlin那边方法基本相似，所以没什么语言鸿沟。

目前Java与Kotlin混写，有时候不由自主在Kotlin语句后面加 `;` ，然后编辑器警告了才发现就很艹。

入坑的时候我用的是 `Maven` 构建，后来因为多种原因换成了 `Gradle` 构建，这里想喷一下Maven中央仓库国内真的慢。

## 之后

emm，希望以后能精通Java吧，毕竟这门语言还是挺强的。