#####単位等級限界、技能経験計算

```lua

--スキルアップグレード限界および経験計算パラメータmax fixed ratio limit

Game().unitExp(100, 100, 1.20, 1000000)

```

######スキルバーホットキー、レベル限界、スキル経験計算

```lua

--ゲームの設定-スキルバーのホットキー

--デフォルトのコマンド占有推奨によりA S Hは使用されません

Game().abilityHotkey({ "Q", "W", "E", "R", "D", "F", "C", "V" })


--スキルアップグレード限界および経験計算パラメータmax fixed ratio limit

Game().abilityExp(99, 100, 1.00, 10000)

```

######アイテムバーホットキー、レベル限界、スキル経験計算

```lua

--ゲームの設定-アイテムバーのホットキー

--ここでは魔獣の78 45 12を使用しています

Game().itemHotkey({ "Numpad7", "Numpad8", "Numpad4", "Numpad5", "Numpad1", "Numpad2" })

--スキルアップグレード限界および経験計算パラメータmax fixed ratio limit

Game().itemExp(99, 100, 1.00, 10000)

```

#####プレイヤー倉庫上限

```lua

--ゲームの設定-プレイヤー倉庫

Game().warehouseSlot(18)
```
