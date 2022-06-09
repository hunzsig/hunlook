## hslk 使用入门

> hslk是h-lua的物编生成方式，只要在hslk目录中运用设定好的方法，即可创建物编
>
> ！！可以参考 hello world <a target="_blank" href="https://github.com/h-lua/helloworld">点击参考</a>

### 类型

```
unit(common/hero) 单位
item(common) 物品
ability(common/empty) 技能
buff(common) 魔法效果
upgrade(common) 科技
destructable(common) 可破坏物
doodad(common) 装饰物
```

### 框架自定义字段

> 【改不了】的字段定义了也没效
>
> 【不建议用】的字段说明不推荐使用
>
> 【物品专用】的字段说明只在hslk_item有效

```lua
_id = "【改不了】自动生成的物编ID"
_id_force = "【不建议用】自定义物编ID"
_class = "【改不了】hslk数据类别"
_type = "hslk数据形式"
_parent = "模版物编ID"
_attr = "属性"
_remarks = "结尾灰字描述"
_cast = "【物品专用】施法前摇"
_cost = "【物品专用】施法耗蓝"
_cooldown = "【物品专用】冷却时间（秒）"
_cooldownTarget = "【物品专用】冷却技能目标，参考CONST_ABILITY_TARGET"
```

#### 配置hslk

> hslk的数据配置在【你的项目】的hslk目录中，即可测试自动构建并读取
>
> 支持默认程度的自定义配置，例如物编文本生成时的颜色等
>
> 默认内置一套配置，使用conf方法全覆盖即可

```lua
hslk_conf({
  -- 描述文本颜色,可配置 hcolor 里拥有的颜色函数，也可以配置 hex 6位颜色码
  color = {
    hotKey = "ffcc00", -- 热键
    itemCoolDown = "ccffff", -- 物品冷却时间
    itemAttr = "b0f26e", -- 物品属性
    itemOverlie = "ff59ff", -- 物品叠加
    itemWeight = "ee82ee", -- 物品重量
    itemRemarks = "969696", -- 物品备注
    abilityCoolDown = "ccffff", -- 技能冷却时间
    abilityAttr = "b0f26e", -- 技能属性
    abilityRemarks = "969696", -- 技能备注
    heroWeapon = "ff3939", -- 英雄攻击武器类型
    heroAttack = "ff8080", -- 英雄基础攻击
    heroRange = "99ccff", -- 英雄攻击范围
    heroPrimary = "ffff00", -- 英雄主属性
    heroSecondary = "ffffcc", -- 英雄主属性
    heroMove = "ccffcc", -- 英雄移动
  }, 
})
```

### 构建物编单位

```lua
hslk_unit({
    Name = "大步兵",
    abilList = "Avul,Apit,Aneu",
    file = "units\\human\\TheCaptain\\TheCaptain",
    Art = "ReplaceableTextures\\CommandButtons\\BTNTheCaptain.blp",
    pathTex = "PathTextures\\4x4SimpleSolid.tga",
    modelScale = 1.10,
    scale = 1.10,
    HP = 100,
    spd = 0,
    sight = 800,
    nsight = 800,
    unitSound = "HighElfSwordsman",
    weapsOn = 0,
    race = "human",
    UberSplat = "HSMA",
})
```

### 构建物编物品

```lua
hslk_item({
    Name = "不能闪避护符",
    Art = "ReplaceableTextures\\CommandButtons\\BTNTalisman.blp",
    goldcost = 3500,
    lumbercost = 0,
    powerup = 0,
    sellable = 1,
    pawnable = 1,
    droppable = 1,
    Hotkey = "Q",
    _remarks = "戴上这个护符不能闪避？！",
    _attr = _attr({
        defend = "+1",
    }),
})
```

### 自定义物编模版

```lua
hslk_unit({
  _parent = "hpea"
})
```

### 自定义物编ID

```lua
hslk_unit({_id_force = "V001"}) -- 大写转英雄
hslk_unit({_id_force = "v001"}) -- 小写转一般
```
