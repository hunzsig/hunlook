## コマンドツール

### 新規プロジェクト

```
> lik.exe new demo //demoという新しい地図プロジェクト
```

### WEを使用した地形の編集

> 編集後にtestを使用すると自動的に変更がプロジェクトに記録されます

```
> lik.exe we demo //馬仔WEでプロジェクトdemoを開き、主に地形編集に使用する
```

### モデルの一括表示

コマンドに続くパラメータは3つあります

* 1 カテゴリ：-a（assetsを表示）-n（assetsNewを表示）-p（あるプロジェクトassetsのmodel宣言幻コードを表示）に分ける
* 2 ページ数：1ページ目から始まる数字
* 3 フィルタリング：検索けんさく

> 模型默认scale1.00，方便对比

```
> lik.exe model -a //ルートassetsディレクトリの下のモデルの表示、1ページ目
> lik.exe model -a 2 buff //ルートassetsディレクトリの下のモデルを表示します。2ページ目、パスにbuffがあるモデルのみを表示します
> lik.exe model -n //ルートassetsNewディレクトリの下のモデルを表示して、1ページ目
> lik.exe model -n 3//ルートassetsNewディレクトリの下のモデルを表示して、3ページ目
> lik.exe model -p:demo 1  //demoプロジェクトのmodel宣言幻モデルを見る、1ページ目
> lik.exe model -p:demo 2 unit //demoプロジェクトのmodel宣言幻モデルを表示し、2ページ目、同時にunitを持つパスを持つモデルのみを表示する
```

### テストの実行

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
>
> 加密乱构可参考 [参照](https://lik.hunzsig.org/?p=other&n=encrypt)

```
> lik.exe run demo -t //生成临时文件查看
> lik.exe run demo -h //热更新模式下并调试demo
> lik.exe run demo -b //构建脚本加密地图并调试demo
> lik.exe run demo -d //构建脚本加密且slk优化的地图并调试demo
> lik.exe run demo -r //构建上线地图并测试
```

> 在模式后添加~符号，可以跳过资源变更，特别适用于纯代码改动时的测试

```
> lik.exe run demo -h~
> lik.exe run demo -b~
> lik.exe run demo -d~
> lik.exe run demo -r~
```

### 同时开启N个魔兽客户端（支持JAPI）

> 默认打开2个，最多一次性打开9个(并不建议，单人4个足矣)

```
> lik.exe multi 4 //打开4个
```

### 关闭所有War3客户端

> 此命令需要管理员权限，请留意

```
> lik.exe kill
```

### 清理缓存并删除本地服务器数据

```
> lik.exe clear
```
