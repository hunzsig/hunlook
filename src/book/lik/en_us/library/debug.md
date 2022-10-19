### Debug Print

> **All** debugging, after -r is packaged, it will be invalid automatically, you can use it with peace of mind
>
> Each debugging will cause **I/O blocking**, and it will cause lag when used in large quantities

### Simple print

```lua
print(123)
print("abc")
print({ 1, 2, 3 })
print(123, "abc")
print("你好，世界！")
```

### Dump print

```lua
dump({
    "你好",
    string = "世界",
    table = {
        1, 3, 5,
        7, 9, 72
    }
})
```

![Print](https://gitlab.com/h-document/singluar/-/raw/main/images/print.png)

### Stack Debug

```lua
stack()
```

### Must Debug

> Judgable Boolean, when it does not hold, the program will directly abort throwing errors and tracing

```lua
must(isObject(whichUnit,"Unit")) -- determine if whichUnit is the <Unit>
must(instanceof(whichButton,"Frame")) -- determine if whichButton is instance of <Frame>
```

### File Logs

> Automatically segment by minutes, save the data in the debugging World of Warcraft directory

```lua
logger("message")
```

### Publish notice

> Debugging will still be enabled when using the test version to go online. Please package the online version and upload
> it to the platform.[refer](https://singluar.hunzsig.org/?p=other&n=dz)
