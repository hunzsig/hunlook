## 特殊効果

#### 稲妻効果

```lua
Lightning(LIGHTNING_TYPE.thunderRed, 0.3, source:x(), source:y(), source:h(), targer:x(), targer:y(), targer:h())
```

#### ポイント効果

```lua
--- 3秒間続く水爆破
Effect("NagaDeath", 0, 0, 20 + japi.Z(0, 0), 3)

--- 永続的なポスト削除方法
local e = Effect("NagaDeath", 0, 0, 20 + japi.Z(0, 0), -1)
time.setTimeout(3, function()
    destroy(e)
end)

--- 単位を中心に作成
(Unit):effect("NagaDeath", 3)
```

#### アタッチエフェクト

```lua
--- 0.5秒の治療を継続し、デフォルト-1
EffectAttach((Unit), "HealTarget2", "origin", 0.5)

--- 単位を中心に作成
(Unit):attach("HealTarget2", "origin", 0.5)
```

#### アタッチエフェクトのbuffへの適用

> スキルエフェクトには特殊効果が付着することがありますが、スキルエフェクトは途中でクリーンアップされます
>
> ここでアタッチエフェクトのステートレス呼び出しを使用することができ、エフェクトの存亡問題を独自に管理する必要はありません

```lua
--- attachバインド効果
--- detachデタッチ解除効果
(Unit):buff("火炎免疫")
    :signal(BUFF_SIGNAL.up)
    :icon("ability/FireMan")
    :description("火炎免疫中")
    :duration(2)
    :purpose(function(buffObj)
        buffObj:attach("buff/Bullerouge", "origin")
        buffObj:enchantImmune(DAMAGE_TYPE.fire, "+=1")
    end)
    :rollback(function(buffObj)
        buffObj:detach("buff/Bullerouge", "origin")
        buffObj:enchantImmune(DAMAGE_TYPE.fire, "-=1")
    end)
    :run()
```
