## 快速开始

* 版本稳定、安全安心
* 菜鸟入门、自由拓展
* 功能基础、魔兽原生

### 先行准备

关闭编辑器的"逆天"触发

高级-游戏平衡常数-将对属性有关的项，通通设置0（除非你有需要）

### 代码编辑器

编辑器推荐使用Vscode 并按照Jass相关插件【反正也没哪个特别好用，变个颜色就差不多了】。

> <a target="_blank" href="https://code.visualstudio.com/">VS Code</a>

### 克隆（下载）项目

```
git clone https://github.com/h-vjass/h-vjass
```

### 使用WE新建一个你的地图

打开地图 按F4打开触发编辑器

在最上方第一的位置添加一个【新触发】

> 选中新建的触发点击菜单【编辑】将他转为自定义文本，如下：

```
function Trig_[YOUR_TRIGGER]_Actions takes nothing returns nothing
endfunction

//===========================================================================
function InitTrig_[YOUR_TRIGGER] takes nothing returns nothing
set gg_trg_[YOUR_TRIGGER] = CreateTrigger(  )
call TriggerAddAction( gg_trg_[YOUR_TRIGGER], function Trig_[YOUR_TRIGGER]_Actions )
endfunction
```

这些默认的function都是没有用的，将他们全部删除，留下一个[空白的文本区]

在文本区顶部 *include* h-vjass的根目录文件h-vjass.j,注意相对路径要正确，以你的【YDWE.exe】相对的目录为准（不建议路径存在有中文）

> 如果此时你已经完成上述步骤，那么文本区内现在应该是这样的：

```
include "[relatively_path]/h-vjass/h-vjass.j"
```

保存地图查看是否出错，如果没有出错则v-vjass库添加成功

以上仅为添加h-vjass，而在制作地图的实践中，你应该是建立自己的main文件来引用h-vjass（如可参考目录中的hMain.j）

> 那么文本区内现在应该改为这样的：

```
include "[relatively_path]/h-vjass/hMain.j"
```

h-vjass库仅仅提供一些功能函数协助做图作者更加轻松制作地图

h-vjass库不保证完全正确无bug，高效率，所以如有需要，请自行修改源码进行游戏制作，这里不过是给出一种方式

h-vjass库中lib/attribute*系列方法是一套属性系统，如不使用请关闭，如果使用，请根据演示demo地图查看对应的属性设置方法

建议直接使用demo.w3x作为模板开发您的地图，当然你也可以自己建立，但要注意的事，你需要在F12引入ui文件夹的所有文件，并修改好路径如下：

```
文件 -> 自定义路径
boold2.blp -> boold2.blp
CommandFunc.txt -> units\CommandFunc.txt
war3mapMisc.txt -> war3mapMisc.txt
war3mapskin.txt -> war3mapskin.txt
```

同时你必须创建系统所需要的所有技能及物品模板，详情请查看demo，由于自主过程十分繁琐，强烈建议使用demo.w3x进行二次开发

### 拓展例子地图

> 拓展地图会编写一些业务，来引导你进行学习

* <a target="_blank" href="https://github.com/h-vjass/hyper-space-td">时空之轮TD</a>

###### 温馨提示：此框架已完全停止维护，可自行维护 <a target="_blank" href="https://afdian.net/a/hunzsig">请作者喝杯茶</a>

###### Lik框架： <a target="_blank" href="https://lik.hunzsig.com">Lik</a>

###### Singluar框架： <a target="_blank" href="https://singluar.hunzsig.com">Singluar</a>

###### H-lua框架： <a target="_blank" href="https://h-lua.hunzsig.com">H-Lua</a>
