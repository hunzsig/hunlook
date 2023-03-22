## パッケージ修正

#### 自動混同はかなり細かく調整され、処理されていますが

#### ただし、-bおよびその後のパッケージ化後にエラーが発生することは少数あります

#### 注釈情報、文字列呼び出し対象方法など、万が一あっても簡単に解決できる例を挙げます

```lua
local process = Process("test")
process:onStart(function(this)
    print("--これは破壊天滅地の印刷です")
end)
```

#### ここでは -h テストの結果は実行可能です

![PackageH](https://gitlab.com/h-document/lik/-/raw/main/assets/packageH.png)

#### しかし、-b を使用するときにエラーが発生しました

![PackageB](https://gitlab.com/h-document/lik/-/raw/main/assets/packageB.png)

#### 多くの人はこの時すでに困惑していて、この時慌ててはいけなくて、私達はパッケージの臨時書類が実はすべて temp ディレクトリの中にあることを知っています

#### プロンプトによって script\process\test.lua であることがわかり map ディレクトリに入って問題を検索します

> これ _build は -b 命令に対応する一時ディレクトリです

![PackageBuild](https://gitlab.com/h-document/lik/-/raw/main/assets/packageBuild.png)

#### コードファイルを開くとエラーが表示されます

![PackageError](https://gitlab.com/h-document/lik/-/raw/main/assets/packageError.png)

#### これではもちろん、結果コードをフォーマットします。

![PackageFormat](https://gitlab.com/h-document/lik/-/raw/main/assets/packageFormat.png)

#### print("--これは破壊天滅地の印刷です") の後ろにある「これは破壊天滅地の印刷です」）が消えているのが見えます

#### コメントを削除したときに削除されたことを示します

#### このように書かないでください。最適化されるので、>>

```lua
local process = Process("test")
process:onStart(function(this)
    print(">>これは破壊天滅地の印刷です")
end)
```

#### -b テストでエラーが発生しなくなり、問題が解決

#### 最後のパッシブな修正を除いて、通常、私たちはテストの時に端末が提示した問題に注意することができます

#### 例えばリソースが発生しない警告、リソースが使用されていない警告

![PackageAssetsError](https://gitlab.com/h-document/lik/-/raw/main/assets/packageAssetsError.png)

![PackageAssetsWarn](https://gitlab.com/h-document/lik/-/raw/main/assets/packageAssetsWarn.png)
