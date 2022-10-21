### F9 任務

```lua
--- 任務
Quest("gg")
    :title("自発的に降伏する")
    :side("right")
    :icon("ReplaceableTextures\\CommandButtons\\BTNTomeOfRetraining.blp")
    :content("-gg 降伏して退出する")

Quest("apm")
    :title("あなたのAPM値を見る")
    :side("right")
    :icon("ReplaceableTextures\\CommandButtons\\BTNTomeOfRetraining.blp")
    :content("-apm あなたのAPM値を見る")

Quest("fov")
    :title("視野を調整する")
    :side("right")
    :icon("ReplaceableTextures\\CommandButtons\\BTNTomeOfRetraining.blp")
    :content({ "-d +[number] による視距離の増加", "-d -[number] による視距離の減少", "-d =[number] による視距離の設定" })
```
