## 设置数据

#### 设置技能属性 [JAPI]

#### EXSetAbilityState

> takes ability abil, integer state_type, real value returns boolean

```lua
data_type = 1 --冷却时间
```

#### 设置技能数据 (整数) [JAPI]

#### EXSetAbilityDataInteger

> takes ability abil, integer level, integer data_type, integer value returns boolean

```lua
data_type = 104 --魔法消耗
data_type = 117 --单位类型
data_type = 200 --热键
data_type = 201 --关闭热键
data_type = 202 --学习热键
```

#### 设置技能数据 (实数) [JAPI]

#### EXSetAbilityDataReal

> takes ability abil, integer level, integer data_type, real value returns boolean

```lua
data_type = 101 --施放时间
data_type = 102 --持续时间(普通)
data_type = 103 --持续时间(英雄)  
data_type = 105 --施放间隔
data_type = 106 --影响区域
data_type = 107 --施放距离
data_type = 108 --数据A
data_type = 109 --数据B
data_type = 110 --数据C
data_type = 111 --数据D
data_type = 112 --数据E
data_type = 113 --数据F
data_type = 114 --数据G
data_type = 115 --数据H
data_type = 116 --数据I
```

#### 设置技能数据 (字符串) [JAPI]

#### EXSetAbilityDataString

> takes ability abil, integer level, integer data_type, string value returns boolean

```lua
data_type = 203 --名字
data_type = 204 --图标
data_type = 205 --目标效果
data_type = 206 --施放者效果
data_type = 207 --目标点效果
data_type = 208 --区域效果
data_type = 209 --投射物
data_type = 210 --特殊效果
data_type = 211 --闪电效果
data_type = 212 --buff提示
data_type = 213 --buff提示(扩展)
data_type = 214 --学习提示
data_type = 215 --提示
data_type = 216 --关闭提示
data_type = 217 --学习提示(扩展)
data_type = 218 --提示(扩展)
data_type = 219 --关闭提示(扩展)
```
