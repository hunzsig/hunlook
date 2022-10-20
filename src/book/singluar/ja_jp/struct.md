## ディレクトリ構造

>（*）Required必要性、クラッシュの損失
>
>（~）Automatic一時的で自動構築が不足している
>
>（・）Customizeカスタム、オンデマンド構築

```
├── assets -（*|·）リポジトリ
│   ├── war3mapFont - フォントを入れて、ttfだけをサポートします
│   ├── war3mapIcon - アイコンを放して、tgaだけをサポートします
│   ├── war3MapLoading - 図をロードして、単一図のtgaあるいは規則の組み合わせのtgaだけをサポートします
│   ├── war3mapModel - モデルを配置して、mdxだけをサポートして、マップは投げ込まないでください
│   ├── war3mapPreview - プレビュー図、tgaのみサポート
│   ├── war3mapSelection - 指定された形式を参照して選択範囲を配置
│   ├── war3mapSound - サウンドトラックを再生し、mp 3のみをサポート
│   ├── war3mapTextures - モデルマップを配置し、blpのみをサポートする
│   └── war3mapUI - UIスイートを配置して、すでにフォーマット参照があります
├── assetsNew -（*|·）assets構造と一致し、新しいリソースを処理する際に使用する
├── projects -（~|·）地図プロジェクトディレクトリ、たとえば project_demo
│   └── project_demo -（·）
├── temp -（~）キャッシュ
├── vendor -（*）
│   ├── kernel - 機能コア
│   ├── lni - 重要な地図データ
│   ├── models - modelコマンドマップテンプレート
│   ├── w3x2lni - w3x2lniツール(v:2.7.2)
│   └── WE - 馬の子道具
├── conf -（~|·）構成
└── sl.exe -（*）コマンドツール
```

### プロジェクト構造

> singluarのほとんどの機能は**コンフィギュレーション宣言**であり、優先順位の要件が低い
>
> プロジェクト内の完全な**に**は必要ありません。**はrequireを使用してファイルをロードすべきではありません。
>
> ファイルはファイル名**で上下**から自動的にロードされます。自己実行スクリプトを作成した場合は、ロード順序に注意してください（名前の前にアンダースコアを付けるなど）

```
└── project_demo - プロジェクトディレクトリ
    ├── assets - プロジェクトリソースの参照は、この名前のディレクトリに記入しなければならず、プロセスコードを記入しないでください
    ├── scripts - プロジェクトスクリプトコード、この名前のディレクトリに書き込む必要があります
    │   ├── globals - グローバル定義（参照用）
    │   │    ├── setup - ゲーム設定を定義するために使用する（参考用）
    │   │    ├── tpl - オブジェクトテンプレートの作成に使用（参考用）
    │   └── process - startで始まるプロジェクトプロセスコード
    └── w3x - 地図ファイル（むやみに変更しないで、weコマンドを使ってパラメータを修正して、保存後に自動的にバックアップを生成する）
        ├── map - 地図lni（あなたが理解しない限り、簡単に変更しないでください）
        ├── table - Mini式の物編（変えないで、物編を取り合わない）
        └── war3mapMap.blp - 略図（変更しない）
```

### UIキット（Kit）構造

```
└── my_kit - スイート名
    ├── assets -（*|·）資源を放出する
    │   ├── my.tga - 私の図
    │   ├── btn - マルチレベルディレクトリのサポート
    │   │   └── bag.tga - リュックサックのアイコン
    │   └── brun.mdx - サポートモデルなど
    ├── main.fdf -（·）追加のfdfはサポートされていますが、推奨されていません（main名でなければなりません）
    └── main.lua -（*）スイートスクリプトコード（main名でなければなりません）
```

### ロードマップ構造

> 同じ名前の場合は、単一の図ではなくディレクトリを優先して使用します

```
├── default.tga - シングル図ロード図モードのサポート
└── default - カタログセットロード図モードもサポート
    ├── bc.tga - プログレスバーの色
    ├── bg.tga - プログレスバーの地色
    └── pic.tga - 背景透かし図
```