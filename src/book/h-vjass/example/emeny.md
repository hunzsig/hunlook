## 设定敌人玩家

> 将多个玩家设为敌人，并使用敌人模块创建，自动分配玩家创建单位
>
> 常用于解决单玩家指令不足问题

### 设定玩家6-11作为电脑玩家敌人

```object-j
call henemy.setEnemyName("我是敌人") 
call henemy.setEnemyPlayer(players[6]) 
call henemy.setEnemyPlayer(players[7]) 
call henemy.setEnemyPlayer(players[8]) 
call henemy.setEnemyPlayer(players[9]) 
call henemy.setEnemyPlayer(players[10]) 
call henemy.setEnemyPlayer(players[11])
```

### 共享设定好的敌人的视野给真实玩家

> 常用于TD

```vb
call henemy.setIsShareView(true)
```
