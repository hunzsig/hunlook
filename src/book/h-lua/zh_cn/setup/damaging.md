### 预设伤害流

> 用于插入伤害流程的设定
>
> 根据你编写定义的顺序自上而下开始执行，options会向下流动保存，可以往里面保存一些值，流到下一个定义使用

```lua
-- 流：自上而下
-- 流动下options中的数据得以保留而延续
-- 当options.damage <= 0，则停止后续流动

--- 有时需要提取一些需要的参数
damaging.defined("prop", function(options)
    options.defend = hattr.get(options.targetUnit, "defend") or 0
end)

--- 无敌判断
damaging.defined("invincible", function(options)
    if (his.invincible(options.targetUnit) == true) then
        options.damage = 0
    end
end)

--- 防御减伤
damaging.defined("defend", function(options)
    if (options.defend ~= 0) then
        options.damage = options.damage - options.defend
    end
end)
```
