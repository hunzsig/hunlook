### F9 任务

```lua
-- 任务
Quest("主动投降", "right")
    .icon("ReplaceableTextures\\CommandButtons\\BTNTomeOfRetraining.blp")
    .content("-gg 投降并退出")

Quest("查看你的APM数值", "right")
    .icon("ReplaceableTextures\\CommandButtons\\BTNTomeOfRetraining.blp")
    .content("-apm 查看你的APM数值")

Quest("调整你的视距", "right")
    .icon("ReplaceableTextures\\CommandButtons\\BTNTomeOfRetraining.blp")
    .content({
    "-d +[number] 增加视距",
    "-d -[number] 减少视距",
    "-d =[number] 设置视距",
})
```
