---
title: 调用Bukkit内置API读取指定YAML文件作为配置调用
date: 2022-09-04 15:18:00
---
有时候想要读取自定义文件作为配置文件用，但是Bukkit没有内置，只有一个`Plugin.getConfig()`方法获取`config.yml`作为配置文件，就很烦
但是Bukkit提供了`FileConfiguration`和`YamlConfiguration`方法，可以自己调接口
实例如下:
```java
public static FileConfiguration extraConfigs(Plugin plugin, String config) {
    return YamlConfiguration.loadConfiguration(
        // 从插件目录下获取
        new File(plugin.getDataFolder(), config)
    );
}
```
上面是写进一个方法里面，可以直接调
```java
/*
 plugin是你的插件对象
 config是你的配置文件名字，如果需要读子目录就要写相对于插件目录的绝对路径
*/
extraConfigs(Plugin plugin, String config);
```
或者直接写成一个变量
```java
// 需要先定义插件对象Plugin plugin
FileConfiguration Config = YamlConfiguration.loadConfiguration(
    new File(plugin.getDataFolder(), "文件名")
);
```
然后就可以像`Plugin.getConfig()`一样获取Yaml内的值
例如:
```java
// 例子1
extraConfigs(Bukkit.getPlugin("Demo"), "custom-config.yml").getString("demo");
// 例子2
Plugin plugin = Bukkit.getPlugin("Demo");
FileConfiguration Config = YamlConfiguration.loadConfiguration(
    new File(plugin.getDataFolder(), "demo")
);
Config.getString("demo");
```