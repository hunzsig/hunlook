## UI problems

###### Here is a summary of the process and solutions of various strange problems encountered in the process of UI production

### Write nested suite in UI suite, the suite is invalid

* Status: Write secondary UI in scripts to integrate with main, but it has not been successful

> The problem is that the developer has a slight lack of ability to master the code, resulting in problems in the UI
> nest

* Solution

```
Adhere to the principle that one package does one thing, and do not write complex nested UI before capacity improvement
```

### The texture setting of FrameBackdrop is invalid

* Status: Use the tga image resource in assets in FrameBackdrop, but can't find it

> The problem is that the identity of the kit is lost when the object is instantiated, resulting in the addressing
> failure

* Solution

```lua
-- The package directory name is：hunzsig_pic
-- The image path is singluar/assets/war3mapUI/assets/pic.tga
local kit = "hunzsig_pic" -- here the kit should have the same name as the directory

stage.pic = FrameBackdrop( "chaosStrings->pic", FrameGameUI)
    .relation(FRAME_ALIGN_CENTER, stage.sx, FRAME_ALIGN_CENTER, 0.01, 0)
    .size(0.3, 0.3)
    .texture('pic') -- missing

stage.pic = FrameBackdrop(kit .. "->pic", FrameGameUI) -- add the kit to the index segment and split it with ->
    .relation(FRAME_ALIGN_CENTER, stage.sx, FRAME_ALIGN_CENTER, 0.01, 0)
    .size(0.3, 0.3)
    .texture('pic')
```

### UI adaptive initialization failed

* Status: When the window enters the game, maximize the window
* F10 enters the game after restarting the game. UI adaptation has no effect
* When the window is modified, it becomes effective again

> The problem is that the adaptive call is too late, and the initialization size has skipped the automatic process

* Solution

```lua
stage.pic = FrameBackdrop(kit .. "->pic", FrameGameUI)
    .relation(FRAME_ALIGN_CENTER, stage.sx, FRAME_ALIGN_CENTER, 0.01, 0)
    .size(0.6, 0.45)
    .adaptive(true)
    .texture('pic')
    .show(true)
-- Set adaptive to the top, after modification
stage.pic = FrameBackdrop(kit .. "->pic", FrameGameUI)
    .adaptive(true)
    .relation(FRAME_ALIGN_CENTER, stage.sx, FRAME_ALIGN_CENTER, 0.01, 0)
    .size(0.6, 0.45)
    .texture('pic')
    .show(true)
```


