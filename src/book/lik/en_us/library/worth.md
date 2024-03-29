## Worth Hierarchical Resources

### Setting of the rules for converting players' property resource units

> Game Property Rules Setting
>
> Generally written in setup

```lua
-- Property setting
Game():worth("lumber", "Lumber", { "gold", 1000000 }) -- 1L = 1000000G
Game():worth("gold", "Gold", { "silver", 100 }) -- 1G = 100S
Game():worth("silver", "Silver", { "copper", 100 }) -- 1S = 100C
Game():worth("copper", "Copper") -- No subordinate
Game():worth("other", "Other") -- No subordinate
```

### Use the player method to set resources

```lua
Player(1):worth("=", { gold = 1, silver = 101, copper = 111 })
Player(1):worth("-", { silver = 110 })
```

### Testing other methods of resources

```lua

print("worthU2L")
dump(Game():worthU2L({ silver = 44, gold = 1 }))
dump(Game():worthU2L({ gold = 1, silver = 2, copper = 3 }))
dump(Game():worthU2L({ gold = 2, copper = 1234 }))

print("worthL2U")
dump(Game():worthL2U({ copper = 16400 }))
dump(Game():worthL2U({ copper = 11203 }))
dump(Game():worthL2U({ copper = 21374 }))

print("worthCale")
dump(Game():worthCale({ gold = 100 }, "*", 0.5))
dump(Game():worthCale({ gold = 100 }, "/", 2))
dump(Game():worthCale(3, "*", { gold = 100 }))
dump(Game():worthCale({ gold = 100 }, "+", { gold = 100 }))
dump(Game():worthCale({ gold = 100 }, "-", { gold = 100 }))

print("Compare")
print('Compare1 ', Game():worthCompare({ silver = 1, gold = 1 }, { silver = 98, copper = 22 }))
print('Compare2 ', Game():worthCompare({ silver = 10, copper = 1000 }, { copper = 2000 }))
print('Compare3 ', Game():worthCompare({ gold = 2 }, { copper = 1001, silver = 190 }))
print('Compare4 ', Game():worthCompare({ gold = 2 }, { other = 5 }))

print("SubCompare")
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
