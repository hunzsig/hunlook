## 目录结构

> （*）Required 必要性，丢失崩溃
>
> （~）Automatic 临时性，缺少自动构建
>
> （·）Customize 自定义，按需构建

```
├── assets -（*|·）资源库
│   ├── war3mapFont - 放字体，只支持 ttf
│   ├── war3mapIcon - 放图标，只支持 tga
│   ├── war3MapLoading - 载入图，只支持单图 tga 或 规则组合 tga
│   ├── war3mapModel - 放模型，只支持 mdx，贴图不要扔进来
│   ├── war3mapPreview - 预览图，只支持 tga
│   ├── war3mapSelection - 放选择圈，参考已提供格式
│   ├── war3mapSound - 放音效音乐，只支持 mp3
│   ├── war3mapTextures - 放模型贴图，只支持 blp
│   └── war3mapUI - 放UI套件，已有格式参考
├── assetsNew -（*|·）与assets结构一致，处理新资源时使用
├── projects -（~|·）用来放置你的地图项目目录，如 project_demo
│   └── project_demo -（·）
├── temp -（~）缓存
├── vendor -（*）
│   ├── kernel - 功能核心
│   ├── lni - 重要地图数据
│   ├── models - model命令地图模版
│   ├── w3x2lni - w3x2lni工具(v:2.7.2)
│   └── WE - 马仔工具
├── conf -（~|·）配置
└── sl.exe -（*）命令工具
```

### 项目结构

> singluar大多数功能皆为**配置声明式**，先后顺序要求较低
>
> 在项目内完全**不需要**且**不应该**使用require加载文件
>
> 文件会按文件名**从上往下**自动载入，如果你编写了自运行的脚本，请自己注意加载顺序（例如加个下划线在名字前面什么的）

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

### UI套件(Kit)结构

```
└── my_kit - 套件名称
    ├── assets -（*|·）放资源
    │   ├── my.tga - 一个我的图
    │   ├── btn - 支持多级目录
    │   │   └── bag.tga - 一个背包图标
    │   └── brun.mdx - 支持模型等
    ├── main.fdf -（·）支持额外fdf，但不推荐（必须叫main名字）
    └── main.lua -（*）套件脚本代码（必须叫main名字）
```

### 载入图结构

> 同名时，优先使用目录而不是单图

```
├── default.tga - 支持单图载入图模式
└── default - 也支持目录套载入图模式
    ├── bc.tga - 进度条颜色
    ├── bg.tga - 进度条底色
    └── pic.tga - 背景镂空图
```
