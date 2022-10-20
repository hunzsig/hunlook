### F9 任務

```lua
-- 任務
Quest("主動投降", "right")
    .icon("ReplaceableTextures\\CommandButtons\\BTNTomeOfRetraining.blp")
    .content("-gg 投降並退出")

Quest("檢視你的APM數值", "right")
    .icon("ReplaceableTextures\\CommandButtons\\BTNTomeOfRetraining.blp")
    .content("-apm 檢視你的APM數值")

Quest("調整你的視距", "right")
    .icon("ReplaceableTextures\\CommandButtons\\BTNTomeOfRetraining.blp")
    .content({
    "-d +[number] 增加視距",
    "-d -[number] 減少視距",
    "-d =[number] 設定視距",
})
```
