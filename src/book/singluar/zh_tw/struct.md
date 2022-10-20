## 目錄結構

> （*）Required 必要性，丟失崩潰
>
> （~）Automatic 臨時性，缺少自動構建
>
> （·）Customize 自定義，按需構建

```
├── assets -（*|·）資源庫
│   ├── war3mapFont - 放字體，隻支持 ttf
│   ├── war3mapIcon - 放圖標，隻支持 tga
│   ├── war3MapLoading - 載入圖，隻支持單圖 tga 或 規則組合 tga
│   ├── war3mapModel - 放模型，隻支持 mdx，貼圖不要扔進來
│   ├── war3mapPreview - 預覽圖，隻支持 tga
│   ├── war3mapSelection - 放選擇圈，參考已提供格式
│   ├── war3mapSound - 放音效音樂，隻支持 mp3
│   ├── war3mapTextures - 放模型貼圖，隻支持 blp
│   └── war3mapUI - 放UI套件，已有格式參考
├── assetsNew -（*|·）與assets結構一緻，處理新資源時使用
├── projects -（~|·）用來放置你的地圖項目目錄，如 project_demo
│   └── project_demo -（·）
├── temp -（~）緩存
├── vendor -（*）
│   ├── kernel - 功能核心
│   ├── lni - 重要地圖數據
│   ├── models - model命令地圖模版
│   ├── w3x2lni - w3x2lni工具(v:2.7.2)
│   └── WE - 馬仔工具
├── conf -（~|·）配置
└── sl.exe -（*）命令工具
```

### 項目結構

> singluar大多數功能皆為**配置聲明式**，先後順序要求較低
>
> 在項目內完全**不需要**且**不應該**使用require加載文件
>
> 文件會按文件名**從上往下**自動載入，如果你編寫了自運行的腳本，請自己註意加載順序（例如加個下劃線在名字前麵什麼的）

```
└── project_demo - 項目目錄
    ├── assets - 項目資源引用, 必須寫在此名字目錄下，不要把流程代碼寫裏麵
    ├── scripts - 項目腳本代碼，必須寫在此名字目錄下
    │   ├── globals - 全局定義（僅供參考）
    │   │    ├── setup - 用於定義遊戲設定（僅供參考）
    │   │    ├── tpl - 用於建立對象模版（僅供參考）
    │   └── process - 項目流程代碼，流程以 start 開始
    └── w3x - 地圖文件（冇事別亂改，使用we命令修改參數，保存後自動生成備份）
        ├── map - 地圖lni（不要輕易改，除非你懂）
        ├── table - ini式的物編（不要改，不搭理物編）
        └── war3mapMap.blp - 略縮圖（不用改）
```

### UI套件(Kit)結構

```
└── my_kit - 套件名稱
    ├── assets -（*|·）放資源
    │   ├── my.tga - 一個我的圖
    │   ├── btn - 支持多級目錄
    │   │   └── bag.tga - 一個背包圖標
    │   └── brun.mdx - 支持模型等
    ├── main.fdf -（·）支持額外fdf，但不推薦（必須叫main名字）
    └── main.lua -（*）套件腳本代碼（必須叫main名字）
```

### 載入圖結構

> 同名時，優先使用目錄而不是單圖

```
├── default.tga - 支持單圖載入圖模式
└── default - 也支持目錄套載入圖模式
    ├── bc.tga - 進度條顔色
    ├── bg.tga - 進度條底色
    └── pic.tga - 背景鏤空圖
```
