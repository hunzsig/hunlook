### F9 任務

```lua
-- タスク＃タスク＃
Quest("自発的に降伏する", "right")
    .icon("ReplaceableTextures\\CommandButtons\\BTNTomeOfRetraining.blp")
    .content("-gg 降伏して退出する")

Quest("あなたのAPM値を見る", "right")
    .icon("ReplaceableTextures\\CommandButtons\\BTNTomeOfRetraining.blp")
    .content("-apm あなたのAPM値を見る")

Quest("視野を調整する", "right")
    .icon("ReplaceableTextures\\CommandButtons\\BTNTomeOfRetraining.blp")
    .content({
    "-d +[number] 視距を上げる",
    "-d -[number] スタジアを減らす",
    "-d =[number] スタジアの設定",
})
```
