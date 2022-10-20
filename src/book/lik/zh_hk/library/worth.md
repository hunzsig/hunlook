## worth 層級資源

### 玩家財物資源單位轉化規則的設定

> 遊戲財物規則設定
>
> 一般寫於setup

```lua
-- 財物設定
Game():worth("lumber", "木頭", { "gold", 1000000 }) -- 1木 = 1000000金
Game():worth("gold", "黃金", { "silver", 100 }) -- 1金 = 100銀
Game():worth("silver", "白銀", { "copper", 100 }) -- 1銀 = 100銅
Game():worth("copper", "青銅") -- 無下級
Game():worth("other", "其他") -- 無下級
```

### 使用玩家方法設定資源

```lua
Player(1):worth("=", { gold = 1, silver = 101, copper = 111 })
Player(1):worth("-", { silver = 110 })
```

### 資源其他方法測試

```lua

print("上->下轉換")
dump(Game():worthU2L({ silver = 44, gold = 1 }))
dump(Game():worthU2L({ gold = 1, silver = 2, copper = 3 }))
dump(Game():worthU2L({ gold = 2, copper = 1234 }))

print("下->上轉換")
dump(Game():worthL2U({ copper = 16400 }))
dump(Game():worthL2U({ copper = 11203 }))
dump(Game():worthL2U({ copper = 21374 }))

print("數學運算")
dump(Game():worthCale({ gold = 100 }, "*", 0.5))
dump(Game():worthCale({ gold = 100 }, "/", 2))
dump(Game():worthCale(3, "*", { gold = 100 }))
dump(Game():worthCale({ gold = 100 }, "+", { gold = 100 }))
dump(Game():worthCale({ gold = 100 }, "-", { gold = 100 }))

print("對比測試")
print('Compare1 ', Game():worthCompare({ silver = 1, gold = 1 }, { silver = 98, copper = 22 }))
print('Compare2 ', Game():worthCompare({ silver = 10, copper = 1000 }, { copper = 2000 }))
print('Compare3 ', Game():worthCompare({ gold = 2 }, { copper = 1001, silver = 190 }))
print('Compare4 ', Game():worthCompare({ gold = 2 }, { other = 5 }))

print("子判斷")
print('Equal1 ', Game():worthEqual({ silver = 1, gold = 1 }, { silver = 1, gold = 1 }))
print('Equal2 ', Game():worthEqual({ silver = 1, gold = 1 }, { copper = 66 }))
print('Equal3 ', Game():worthEqual({ silver = 1, gold = 1 }, { silver = 1, gold = 1, other = 3 }))
print('Greater1 ', Game():worthGreater({ silver = 10, copper = 1000 }, { copper = 1000 }))
print('Greater2 ', Game():worthGreater({ silver = 10, copper = 1000 }, { copper = 3000 }))
print('Greater3 ', Game():worthGreater({ silver = 10, copper = 1000 }, { other = 5 }))
print('Less1 ', Game():worthLess({ gold = 2 }, { silver = 10 }))
print('Less2 ', Game():worthLess({ gold = 2 }, { silver = 201 }))
print('Less3 ', Game():worthLess({ gold = 2 }, { gold = 2, other = 1 }))
print('EqualOrGreater1 ', Game():worthEqualOrGreater({ gold = 2, silver = 1 }, { gold = 2 }))
print('EqualOrGreater2 ', Game():worthEqualOrGreater({ gold = 2 }, { gold = 2 }))
print('EqualOrGreater3 ', Game():worthEqualOrGreater({ gold = 2 }, { other = 2 }))
print('EqualOrLess1 ', Game():worthEqualOrLess({ gold = 2 }, { gold = 2 }))
print('EqualOrLess2 ', Game():worthEqualOrLess({ gold = 2 }, { gold = 2, silver = 1 }))
print('EqualOrLess3 ', Game():worthEqualOrLess({ gold = 2 }, { other = 2 }))

```
