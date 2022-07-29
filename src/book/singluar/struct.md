## 目录结构

```
├── assets
│   ├── war3mapFont - 放字体，只支持 ttf
│   ├── war3mapIcon - 放图标，只支持 tga
│   ├── war3MapLoading - 载入图，只支持单图 tga 或 规则组合 tga
│   ├── war3mapModel - 放模型，只支持 mdx，贴图不要扔进来
│   ├── war3mapPreview - 预览图，只支持 tga
│   ├── war3mapSelection - 放选择圈，参考已提供格式
│   ├── war3mapSound - 放音效音乐，只支持 mp3
│   ├── war3mapTextures - 放模型贴图，只支持 blp
│   └── war3mapUI - 放UI套件，已有格式参考
├── assetsNew - 与assets结构一致，处理新资源时使用
├── projects - 用来放置你的地图项目目录，如 project_demo
│   └── project_demo
├── temp - 临时目录
├── vendor
│   ├── kernel - 功能核心
│   ├── lni - 重要地图数据
│   ├── models - model命令地图模版
│   ├── w3x2lni - w3x2lni工具(v:2.7.2)
│   └── WE - 马仔工具
└── sl.exe - 命令工具
```

### 项目结构

> 项目内完全不需要且不应该使用require加载文件
>
> 文件会按文件名从上往下自动加载，如果你编写了立即运行的脚本，请自己注意加载顺序
>
> 例如加个下划线在名字前面什么的

```
└── project_demo - 项目目录
    ├── assets - 项目资源引用, 必须写在此名字目录下，不要把流程代码写里面
    ├── scripts - 项目脚本代码，必须写在此名字目录下
    │   ├── globals - 全局定义（仅供参考）
    │   │    ├── setup - 用于定义游戏设定（仅供参考）
    │   │    ├── tpl - 用于建立对象模版（仅供参考）
    │   └── process - 项目流程代码，流程以 start 开始
    └── w3x - 地图文件（没事别乱改，使用we命令修改参数，保存后自动生成备份）
        ├── map - 地图lni（不要轻易改，除非你懂）
        ├── table - ini式的物编（不要改，不搭理物编）
        └── war3mapMap.blp - 略缩图（不用改）
```
