## 属性系统

> 轻便强大的属性系统,能轻松几行代码就实现绝大多数属性的实时改动

### hattribute.setRelation

属性每1点属性映射 可以模拟三围加成等

> [参考](https://h-lua.hunzsig.org/?p=setup&n=attrThree)

### gold_ratio / lumber_ratio / exp_ratio / sell_ratio

黄金率 / 木头率 / 经验率 / 售卖率（%）

> 影响资源获取率 售卖率以默认的50%为准
>
> 假如某玩家作者设置TA的售卖率不等于50，那么会自动算出差值，给予扣款或补偿

### life / life_back

生命 / 生命恢复

> 单位的最大生命值 / 每秒对生命恢复的量

### mana / mana_back

魔法 / 魔法恢复

> 单位的最大魔法值 / 每秒对魔法恢复的量

### move

移动力

> 每秒移动最大距离
>
> [范围] 0～?取决于地图的平衡常数设置(一般设为522)
>
> 数值无上限，但地图移动上限为522
>
> 假设移动力为2000，则实际移动仍为522，而其他由移动力影响的技能属性将以2000点计算

### defend / defend_white / defend_green

护甲（总/白/绿）

> 可以直接抵消伤害，可以反增伤

> 可以使用hattr.set改动defend,实际改的是defend_green

### str / str_white / str_green

力量（总/白/绿）

> 可以使用hattr.set设置str,但实际改动的是str_green

### agi / agi_white / agi_green

敏捷（总/白/绿）

> 可以使用hattr.set设置str,但实际改动的是agi_green

### int / int_white / int_green

智力（总/白/绿）

> 你可以使用hattr.set设置int,但实际改动的是int_green

### attack / attack_white / attack_green

攻击

> 一个单位的攻击 = 白+绿
>
> 由于攻击多数情况下存在区间浮动，所以这个值在特定情况下需要加上 attack_sides
>
> 你可以使用hattr.set设置attack,但实际改动的是attack_green
>
> 在调用攻击附魔后，攻击可以附带元素 单位进行攻击的能力，一般分为近战或者远程 攻击间隔

### attack_space

攻击间隔

> 根据原始攻速和攻击速度计算出的间隔值
>
> 但是set的时候实际设置的是原始间隔(attack_space_origin)

### attack_range

攻击范围

> 单位进行攻击的最大距离

### attack_speed

攻击速度（%）

> 攻击一次的间隔 假设当前攻速增益为 x% [单位：击/秒]
>
> 攻击间隔公式：(基本间隔*100) / (100+x)

### reborn

复活时间（秒）

> 此值默认-999，无复活效果 当这个值大于等于0时，且单位是英雄，单位会拥有复活的效果 复活的流程执行是一个默认函数，有需要可修改 hevent_default_actions.hero.reborn

### DAMAGE_SRC

伤害方式共 4 种

> 详情请看const
> * [未知方式]没有被定义的都会是未知来源，一种概念
> * [攻击方式]普通攻击、魔兽原生技能造成的伤害
> * [技能方式]技能设定（触发技能buff、技能debuff、技能特效）
> * [物品方式]物品伤害，一种概念
>
> 伤害优先级由伤害流决定，而伤害流由你决定，[参考](https://h-lua.hunzsig.org/?p=setup&n=damaging)
