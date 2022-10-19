### F9 Quest

```lua
--- Quest
Quest("gg")
    :title("Voluntary surrender")
    :side("right")
    :icon("ReplaceableTextures\\CommandButtons\\BTNTomeOfRetraining.blp")
    :content("-gg Surrender and exit")

Quest("apm")
    :title("View your APM value")
    :side("right")
    :icon("ReplaceableTextures\\CommandButtons\\BTNTomeOfRetraining.blp")
    :content("-apm view your APM value")

Quest("fov")
    :title("Adjust your sight distance")
    :side("right")
    :icon("ReplaceableTextures\\CommandButtons\\BTNTomeOfRetraining.blp")
    :content({ "-d +[number] Increase", "-d -[number] Reduce", "-d =[number] Set" })
```
