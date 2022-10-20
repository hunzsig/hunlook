### F9 任務

```lua
--- 任務
Quest("gg")
    :title("主動投降")
    :side("right")
    :icon("ReplaceableTextures\\CommandButtons\\BTNTomeOfRetraining.blp")
    :content("-gg 投降並退出")

Quest("apm")
    :title("查看你的APM數值")
    :side("right")
    :icon("ReplaceableTextures\\CommandButtons\\BTNTomeOfRetraining.blp")
    :content("-apm 查看你的APM數值")

Quest("fov")
    :title("調整你的視距")
    :side("right")
    :icon("ReplaceableTextures\\CommandButtons\\BTNTomeOfRetraining.blp")
    :content({ "-d +[number] 增加視距", "-d -[number] 減少視距", "-d =[number] 設置視距" })
```
