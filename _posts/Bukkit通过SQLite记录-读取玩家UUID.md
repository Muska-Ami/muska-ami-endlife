---
title: 'Bukkit通过SQLite记录/读取玩家UUID'
date: 2022-7-28 19:38:00
tag: 教程
---
## SQL对接部分
先是个类，对接SQL

```java
package moe.xmcn.example;

import java.sql.*;
import java.util.Arrays;
import java.util.UUID;
import java.util.logging.Level;

public class Database {

    public static class UUIDDatabase {
        private static Connection getDatabase() {
            Connection c = null;
            try {
                Class.forName("org.sqlite.JDBC");
                c = DriverManager.getConnection("jdbc:sqlite:" + Config.plugin.getDataFolder() + "/database.db");
            } catch (Exception e) {
                Config.plugin.getLogger().log(Level.WARNING, "连接数据库发生异常:\n" + Arrays.toString(e.getStackTrace()));
            }
            return c;
        }

        public static void intTable() throws SQLException {
            Statement cs = getDatabase().createStatement();
            String ct = "CREATE TABLE IF NOT EXISTS UUIDTableMap" +
                        "(NAME TEXT     NOT NULL, " +
                        " UUID TEXT     NOT NULL)";
            cs.executeUpdate(ct);
            cs.close();
        }

        public static void insertTable(String player_name, UUID player_uuid) throws SQLException {
            Statement cs = getDatabase().createStatement();
            String ct = "INSERT INTO UUIDTableMap (NAME, UUID)" +
                        " VALUES ('" + player_name + "', '" + player_uuid + "')";
            cs.executeUpdate(ct);
            cs.close();
        }

        public static class readTable {
            public static UUID getUUID(String name) throws SQLException {
                UUID uuid = null;

                Statement cs = getDatabase().createStatement();
                ResultSet rs = cs.executeQuery("SELECT * FROM UUIDTableMap;");
                while (rs.next()) {
                    uuid = UUID.fromString(rs.getString(name));
                }
                rs.close();
                cs.close();
                return uuid;
            }

            public static String getName(UUID uuid) throws SQLException {
                String name = null;

                Statement cs = getDatabase().createStatement();
                ResultSet rs = cs.executeQuery("SELECT * FROM UUIDTableMap;");
                while (rs.next()) {
                    name = rs.getString(String.valueOf(uuid));
                }
                rs.close();
                cs.close();
                return name;
            }
        }
    }

}
```

## 记录部分

然后创建个监听器来监听Bukkit的PlayerJoinEvent，有玩家加入就记录进数据库就好了下面是个例子  
Config.plugin是我写在插件类里面的Plugin定义

```java
Plugin plugin = Main.getPlugin(Main.class);
```

```java
package moe.xmcn.example;

import moe.xmcn.catsero.utils.Config;
import moe.xmcn.catsero.utils.Database;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.player.PlayerJoinEvent;

import java.sql.SQLException;
import java.util.UUID;
import java.util.logging.Level;

public class PlayerRecord {

    public static class UUIDRecord implements Listener {
        @EventHandler
        public void record(PlayerJoinEvent pje) {
            String player_name = pje.getPlayer().getName();
            UUID player_uuid = pje.getPlayer().getUniqueId();
            try {
                Database.UUIDDatabase.insertTable(player_name, player_uuid);
            } catch (SQLException e) {
                Config.plugin.getLogger().log(Level.WARNING, "无法写入数据库");
            }
        }
    }
}
```

## 调用

通过玩家名获取UUID

```java
Database.UUIDDatabase.readTable.getUUID(String name);
```

通过UUID获取玩家名

```java
Database.UUIDDatabase.readTable.getName(String name);
```
