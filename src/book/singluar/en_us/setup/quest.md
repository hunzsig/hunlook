### F9 Quest

```lua
-- mission
Quest("Voluntary surrender", "right")
    .icon("ReplaceableTextures\\CommandButtons\\BTNTomeOfRetraining.blp")
    .content("-gg Surrender and exit")

Quest("View your APM value", "right")
    .icon("ReplaceableTextures\\CommandButtons\\BTNTomeOfRetraining.blp")
    .content("-apm 查看你的APM数值")

Quest("Adjust your sight distance", "right")
    .icon("ReplaceableTextures\\CommandButtons\\BTNTomeOfRetraining.blp")
    .content({
    "-d +[number] increase",
    "-d -[number] reduce",
    "-d =[number] set",
})
```
