## 更新日誌

> 2022/11

* 新登場 | Missile.scale
* 新登場 | EVENT.Unit.BeforeAttack
* 新登場 | EVENT.Unit.Be.BeforeAttack
* 新登場 | Unit.attackPoint
* 新登場 | Unit.weaponSoundMode
* 新登場 | Unit.weaponLength
* 新登場 | Unit.weaponHeight
* 最適化 | Server より優れたポリシーでデータを統合
* 最適化 | ability.lightning
* 修正 | ability.crackFly イベントデータエラーの問題
* 修正 | パッシブスキルと非ターゲットスキルが特定の状況下で攻撃アニメーションを妨害する問題

> 2022/10

* 新登場 | Player.worthRatio 財産取得率
    * ··· assets更生
    * ··· 自動的にworthの+オペレータと連動
    * ··· デフォルト100%
* 新登場 | EVENT.Unit.FeignDead 事件
    * ··· 現在復活できる単位は、死亡イベントではなく仮死イベントをトリガします
* 新登場 | Tpl.description
    * ··· 現在サポートされている文字列、文字列配列、関数
    * ··· {}文法糖を廃棄した
* 新登場 | colour リファクタリング
    * ··· assets更生
* 新登場 | sync.must
* 新登場 | async.must
* 新登場 | Frame.upperNode
* 新登場 | Frame.lowerNodes
* 新登場 | string.repeater
* 新登場 | WEATHER_TYPE
    * ··· カテゴリーを追加
    * ··· ヒント特性
* 新登場 | Weather.period
* 新登場 | Rect.weather
    * ··· 多天気をサポート
* 最適化 | すべてのサウンドの duration 時間戻り秒
* 最適化 | ツールは重複リソース検出をサポートする
* 最適化 | パス名に item_ すると、modelコマンドのscaleが2.00になります
* 最適化 | japi 二次パッケージFPS
* 最適化 | japi DzConvertWorldPositionはより強い歪みを採用
* 最適化 | Image show 特定の状況において確率的にロックされた視覚エラーが発生する問題
* 最適化 | new命令Demoの例コードを微調整した
* 修正 | レイアウトを変更した場合のFrameの位置決めオフセットの問題
* 修正 | colour.containColorがnilであるformatでエラーが発生した問題
* 修正 | ability.rebornデータエラー

> 2022/09

* 新的 | math.slopeAngle
* 削除 | hotは自動processをサポートしなくなりました

> 2022/08

* 新登場 | FrameDisAdaptive
* 新登場 | Tool Command: clean
* 新登場 | string.fill
* 新登場 | table.slice
* 最適化 | tableデータ比較ロジック
* 最適化 | amphibiousデータ対応データ
* 最適化 | Unit moveTypeの非飛行記録
* 最適化 | ServerSaveValue KV 長さ判断メカニズム
* 最適化 | enchant 反応目標メカニズム
* 最適化 | japi.Z データ取得メカニズム
* 最適化 | attack 動作の遅延
* 修正 | Unit moveType 一定確率設定が無効なバグ

> 2022/07

* 新登場 | Array GC メカニズム
* 新登場 | Cursor Type
* 新登場 | FrameTooltips
* 新登場 | logger
* 新登場 | table.wheel
* 新登場 | Frame.show
* 新登場 | Ability.worthCost
* 最適化 | weaponMaterialをweaponSoundに変更
* 最適化 | damageイベントフィードバック、データドレナージおよび瞬断メカニズムへの変更
* 最適化 | Image今すぐ随意寸法をサポート
* 最適化 | Unit orderRouteの機能は、エンドレスに中断されず、手動で一時停止できるようになりました
* 修正 | sightデータが確率的にずれているバグ
* 修正 | ItemTpl初期pawnableデータエラーのバグ
* 修正 | Image position initバグ
* 削除 | base64
* 削除 | Unit stand
* 削除 | FrameシリーズのHighlightメソッドは、現在は自己参照が必要です
* 削除 | attach型effectの重複判定は、現在自己判別が必要
* 削除 | 最下位DzFrameSetParent、仮想設定のみの実行はサポートされていない

> 2022/06

* 新登場 | Decoの代わりにDestructable
* 新登場 | prop基盤テクノロジー、間違いのないデータサンドボックスのブロック状態
    * ··· 非同期データ修正キャプチャの追加
    * ··· propでデータ問題を心配することなくget、set、clearが可能
* 新登場 | ability missile、leap、crackFly
    * ··· コールバック関数からpointデータ構造体へ
    * ··· missile効率精度が大幅に向上
    * ··· leap効率最適化かつ軽薄な旋回パラメータ
    * ··· crackFly効率を最適化し、多次元バウンドパラメータを追加
* 新登場 | Bgm音楽、非同期データストリームの分離に変更
* 新登場 | Vcm普遍的なサウンド、非同期データストリームの分離に変更
* 新登場 | V3dサラウンドサウンド、非同期データストリームの分離に変更
* 新登場 | カメラレンズ、リアルタイム制御の分離非同期データストリームに変更
* 新登場 | Cursorポインタ、図案、安全領域を簡単にカスタマイズできるようになりました
* 新登場 | Frame（サブクラスを含む）、任意のイベント追跡登録メカニズムを実現し、奇抜なイベントをカスタマイズできる
* 新登場 | FrameTooltipsのデフォルト表示メカニズム、より人間的
* 新登場 | FrameLabel新しいサイズと文字の最適化
* 新登場 | Game新しいメソッドworth：Equal、Greater、Less、EqualOrGreater、EqualOrLess
* 新登場 | math新しいメソッドtrunc、format、isNaN
* 新登場 | Image 画像
* 新登場 | mustアサーション
* 最適化 | Buff、暴露時間修正インタフェース
* 最適化 | GameのworthCompareメソッドは現在、等しいと判断できないが異なる戻り値になる
* 最適化 | ttg
* 最適化 | prop初期設定メカニズム
* 最適化 | bjパラメータ
* 修正 | Arrayデータが乱れる可能性がある問題。メソッドの一部を削除
* 削除 | すべてのportalメソッド、positionに改名
* 削除 | Buttonを中心とする廃棄物の大部分fdf
* 削除 | japi関数の一部をブロックして隔離

> 2022/05

* 新登場 | Attributeメソッドによってcost、castChant、coolDown、coolDownSecが追加されました
    * ··· 任意のスキル属性を動的に修正するために使用可能
* 新登場 | Unitメソッドstature（単位体高）
* 最適化 | FrameButton
* 最適化 | ability crashFlyの機能によりパフォーマンスを向上
* 修正 | Unit punish判定確率エラーの問題

> 2022/04

* 新登場 | Enchantment 分離実行
* 新登場 | Event 反応ライター
* 新登場 | Damage flow 実行
* 新登場 | datum library
* 新登場 | math.cale
* 新登場 | table.rand
* 新登場 | データフローの完全な解離をサポートする新しい｜prop底辺の活力
* 新登場 | Buff catcher
* 新登場 | Worth calculation
* 新登場 | CoolingInstant
* 最適化 | Run cache command
* 最適化 | ItemレベルとAbilityレベルのバインドメカニズム
* 最適化 | プロセス移行メカニズム
* 修正 | 特定の状況でツールによってエラーが発生したバグ
* 修正 | Player.alert bug
* 修正 | FrameLabel adaptive 認識エラーの問題
* 修正 | Engine ヒープスタックスタック履歴残留バグ
* 修正 | propがdiff存在時にオフセットする確率があるバグ
* 削除 | Game.introduction

> 2022/03

* 新登場 | リソースをスキップするrunメソッド
* 修正 | 既知のバグ
* 修正 | 一部のイベントオブジェクトのエラー
* 修正 | プロジェクト名がNULLの場合ツール入力エラー論理分岐のエラー

> 2022/02

* 新登場 | 予備イベントProp
* 最適化 | ツールの簡素化
* 最適化 | attrの自動換算メカニズム
* 修正 | 非同期データにインデックスオフセットが発生する可能性があるバグ

> 2022/01

* 新登場 | 文字列マジック方法
* 新登場 | ttg ライブラリ
* 最適化 | Timer

> 2021/12

* 新規 | コマンドversion
* 最適化 | 段階的終了
* 修復 | 各種bugs

> 2021/11

* 新登場 | model run
* 最適化 | UIKit

> 2021/09 ~ 10

* 新登場 | Process
* 最適化 | 機能補完と再構築

> 2021/05 ~ 09

* 新登場 | 大量の機能追加
* 修正 | bugs

> 2021/05/01

* 始める
