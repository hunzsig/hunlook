## 命令行

### 新建项目

```
> sl.exe new demo //新建一个地图项目，名为demo
```

### 使用WE编辑地形

> 编辑完后在使用test时会自动将改动记录回你的项目中

```
> sl.exe we demo //以WE打开项目demo，主要用于编辑地形
```

### 模型批量查看

命令后续共有2个参数

* 1 类别：分为 -a(查看assets) -n(查看assetsNew) -p(查看某个项目assets的model声明虚幻代码)
* 2 过滤：搜索

> 模型默认scale1.00，方便对比
>
> 路径带有item_的模型将scale2.00，便于查看（因为物品模型通常偏小）
>
> 路径带有eff_的模型将scale0.75，便于查看（因为特效模型通常凌乱）

```
> sl.exe model -a //查看根assets目录下的模型
> sl.exe model -a buff //查看根assets目录下的模型，同时只查看路径带有buff的模型
> sl.exe model -a buff,eff //查看根assets目录下的模型，同时只查看路径带有buff或eff的模型
> sl.exe model -n //查看根assetsNew目录下的模型
> sl.exe model -p:demo  //查看demo项目的model声明虚幻模型
```

### 运行测试

命令后续共有2个参数

* 1 项目：具体项目名称，如demo
* 2 模式：(默认 -h)
    * -t(test 临时) 只建立临时目录并打包ini地图等资源，不会构建测试地图和开启测试
    * -h(hot 热更新) 开窗口调试。可F10重启获得脚本更新，也可以修改文件实时更新脚本
    * -b(build 构建打包) 开窗口调试。无热更，加密，没有slk优化。
    * -d(distributable 构建打包) 开窗口调试。无热更，加密并乱构、自动slk优化。
    * -r(release 上线发行+slk优化) 没有调试窗口。无热更，加密并乱构、自动slk优化。

> 一般实际运行的测试图都是放在 Warcraft III Frozen Throne\Maps\Test\WorldEditTestMap.w3x
>
> 具体位置可参考WE里面的配置

```
> sl.exe run demo -t //生成临时文件查看
> sl.exe run demo -h //热更新模式下并调试demo
> sl.exe run demo -b //构建脚本加密地图并调试demo
> sl.exe run demo -d //构建脚本加密且slk优化的地图并调试demo
> sl.exe run demo -r //构建上线地图并测试
```

> 在模式后添加~符号，可以跳过资源变更，特别适用于纯代码改动时的测试
```
> sl.exe run demo -h~
> sl.exe run demo -b~
> sl.exe run demo -d~
> sl.exe run demo -r~
```

### 同时开启N个魔兽客户端（支持JAPI）

> 默认打开2个，最多一次性打开9个(并不建议，单人4个足矣)

```
> sl.exe multi 4 //打开4个
```

### 关闭所有War3客户端

> 此命令需要管理员权限，请留意

```
> sl.exe kill
```

### 清理缓存

```
> sl.exe clear demo //清理构建的临时文件
```

### 删除所有本地DZ服务器数据

```
> sl.exe clean
```

### 查看当前工具版本

```
> sl.exe version
```
