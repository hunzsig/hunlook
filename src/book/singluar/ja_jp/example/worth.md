## worth 価値

### プレイヤ財物資源単位変換規則の設定

> ゲーム財貨規則設定
>
> 一般的にsetupに書く

```lua
-- 財物設定
Game().worth("lumber", "木", { "gold", 1000000 }) -- 1木 = 1000000金
Game().worth("gold", "金", { "silver", 100 }) -- 1金 = 100銀
Game().worth("silver", "銀", { "copper", 100 }) -- 1銀 = 100銅
Game().worth("copper", "銅") -- 子なし
```

### プレイヤメソッドを使用したリソースの設定

```lua
Player(1).worth("=", { gold = 1, silver = 101, copper = 111 })
Player(1).worth("-", { silver = 110 })
```

### リソースのその他の方法のテスト

```lua

print("上->下変換")
dump(Game().worthU2L({ silver = 44, gold = 1 }))
dump(Game().worthU2L({ gold = 1, silver = 2, copper = 3 }))
dump(Game().worthU2L({ gold = 2, copper = 1234 }))

print("下->上へ変換")
dump(Game().worthL2U({ copper = 16400 }))
dump(Game().worthL2U({ copper = 11203 }))
dump(Game().worthL2U({ copper = 21374 }))

print("算術演算")
dump(Game().worthCale({ gold = 100 }, "*", 0.5))
dump(Game().worthCale({ gold = 100 }, "/", 2))
dump(Game().worthCale(3, "*", { gold = 100 }))
dump(Game().worthCale({ gold = 100 }, "+", { gold = 100 }))
dump(Game().worthCale({ gold = 100 }, "-", { gold = 100 }))

print("比較テスト")
print('Compare1 ', Game().worthCompare({ silver = 1, gold = 1 }, { silver = 98, copper = 22 }))
print('Compare2 ', Game().worthCompare({ silver = 10, copper = 1000 }, { copper = 2000 }))
print('Compare3 ', Game().worthCompare({ gold = 2 }, { copper = 1001, silver = 190 }))

print("サブコントラストテスト")
print('Equal1 ', Game().worthEqual({ silver = 1, gold = 1 }, { silver = 1, gold = 1 }))
print('Equal2 ', Game().worthEqual({ silver = 1, gold = 1 }, { copper = 66 }))
print('Equal3 ', Game().worthEqual({ silver = 1, gold = 1 }, { silver = 1, gold = 1, other = 3 }))
print('Greater1 ', Game().worthGreater({ silver = 10, copper = 1000 }, { copper = 1000 }))
print('Greater2 ', Game().worthGreater({ silver = 10, copper = 1000 }, { copper = 3000 }))
print('Greater3 ', Game().worthGreater({ silver = 10, copper = 1000 }, { other = 5 }))
print('Less1 ', Game().worthLess({ gold = 2 }, { silver = 10 }))
print('Less2 ', Game().worthLess({ gold = 2 }, { silver = 201 }))
print('Less3 ', Game().worthLess({ gold = 2 }, { gold = 2, other = 1 }))
print('EqualOrGreater1 ', Game().worthEqualOrGreater({ gold = 2, silver = 1 }, { gold = 2 }))
print('EqualOrGreater2 ', Game().worthEqualOrGreater({ gold = 2 }, { gold = 2 }))
print('EqualOrGreater3 ', Game().worthEqualOrGreater({ gold = 2 }, { other = 2 }))
print('EqualOrLess1 ', Game().worthEqualOrLess({ gold = 2 }, { gold = 2 }))
print('EqualOrLess2 ', Game().worthEqualOrLess({ gold = 2 }, { gold = 2, silver = 1 }))
print('EqualOrLess3 ', Game().worthEqualOrLess({ gold = 2 }, { other = 2 }))

```
