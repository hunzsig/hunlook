### 更新ログ

> 2022/10

* 新しいstring.repeater
* 新しいWEATHER _TYPE
* ・・・カテゴリーを追加
* ・・・ヒント特性
* 新しいWeather.period
* 新しいRect.weather
* ・・・多天気をサポート
* 最適化ツールは重複リソース検出をサポート

> 2022/09

* 新しいmath.slopeAngle
* ホットの削除は自動processをサポートしていない

> 2022/08

* 新しいFrameDisAdaptive
* 新しいツールコマンドclean
* 新しいstring.fill
* 新しいtable.slice
* tableデータ比較ロジックの最適化
* amphebiousデータ対応データの最適化
* Unit moveTypeの非飛行記録の最適化
* ServerSaveValue kv長さ判断メカニズムの最適化
* enchant反応目標メカニズムの最適化
* japiを最適化します。Zデータ取得機構
* Attack動作待ち時間の最適化
* Unit moveType一定確率設定が無効なバグを修正する

> 2022/07

* 新しいArray GCメカニズム
* 新しいCursorの種類
* 新しいFrameTooltipsメカニズム
* 新しいロガーデバッグログ
* 新しいtable.wheelホイールオフセット
* 新しいFrame.show
* 新しいAbility.worthCost
* 最適化されたweaponMaterialをweaponSoundに変更
* damageイベントフィードバックを最適化し、データドレナージおよび瞬断メカニズムに変更
* Imageの最適化これで随意寸法をサポート
* Unit orderRouteの機能を最適化し、エンドレスに切断できず、手動での一時停止をサポート
* sightデータが確率的にずれているバグを修正する
* ItemTplの初期pawnableデータエラーのバグを修正する
* Image position initバグの修正
* base 64を削除
* Unit standの削除
* FrameシリーズのHighlightメソッドを削除するには、現在は自己参照が必要です
* attach型effectの重複判定を削除し、現在は自己判別が必要
* 最下位のDzFrameSetParentを削除し、仮想設定のみの実行はサポートしない

> 2022/06

* Decoに代わる新しいDestructable
* 新しいprop基盤テクノロジー、間違いのないデータサンドボックスのブロック状態
* ・・・非同期データ修正キャプチャの許可を追加する
* ・・・propでデータ問題を心配することなくget、set、clearが可能
* 新しいability missile、leap、crackFly
* ・・・コールバック関数をpointデータ構造体に変換する
* ・・・missile効率精度が大幅に向上
* ・・・leap効率最適化かつ軽薄な旋回パラメータ
* ・・・crackFly効率を最適化し、多次元バウンドパラメータを追加
* 新しいBgm音楽、非同期データストリームの分離に変更
* 新しいVcmの一般的なサウンドは、非同期データストリームの分離に変更されました
* 新しいV 3 dサラウンドサウンド、非同期データストリームの分離に変更
* 新しいカメラレンズ、リアルタイム制御の分離非同期データストリームに変更
* 新しいCursorポインタ、パターン、安全領域を簡単にカスタマイズできるようになりました。
* 新しいFrame（サブクラスを含む）、任意のイベント追跡登録メカニズムを実現し、奇抜なイベントをカスタマイズできる
* 新しいFrameTooltipsのデフォルト展示メカニズム、より人間的
* 新しいFrameLabelの新しいサイズと文字の最適化
* 新しいゲームの新しい方法worth：Equal、Greater、Less、EqualOrGreater、EqualOrLess
* 新しいmath新しいメソッドtrunc、format、isNaN
* 新しいImageクラス
* 新しいmustアサーション
* Buffを最適化し、暴露時間にインタフェースを修正
* 最適化されたゲームのworthCompareメソッドは、現在等しいと判断できないが、異なる戻り値になる
* ttgの最適化
* prop初期設定メカニズムの最適化
* bjパラメータの最適化
* Arrayデータが乱れる確率の問題を修正します。メソッドの一部を削除
* すべてのportalメソッドを削除し、positionと改名
* Buttonを中心とした廃棄物の大部分を削除するfdf
* japi関数の一部を削除し、カプセル化して隔離する

> 2022/05

* 新しいAttributeメソッドでは、cost、castChant、coolDown、coolDownSecを追加
* ・・・任意のスキル属性を動的に修正するために使用可能
* 新しいUnitメソッドstature（単位体高）
* FrameButtonの最適化
* ability crashFlyの機能を最適化し、パフォーマンスを向上
* Unit punish判定に確率エラーがあった問題を修正する

> 2022/04

* 新たな魔付き分離実行
* 新しいイベント反応ライター
* 新たなダメージフロー実行
* 新しいdatumライブラリ
* 新しいmathライブラリ関数cale
* 新しいtableライブラリ関数rand
* 包括的なデータストリームの解離をサポートする新しいprop基盤の活力
* 新しいBuffキャプチャ
* 新しいWorthコンピューティング
* 新しい方法coolingInstant
* runキャッシュコマンドの最適化
* ItemレベルとAbilityレベルのバインディングメカニズムの最適化
* プロセス移行メカニズムの最適化
* 特定の状況でエラーが発生したツールのバグを修正する
* Playerを修復します。alert bug
* FrameLabel adaptiveの認識エラーの修正
* engineヒープスタックスタック履歴残留バグの修正
* propがdiff存在時にオフセットする確率があるバグを修正
* ゲームのintroductionを削除する

> 2022/03

* リソースをスキップする新しいrunメソッド
* 既知のbugsを修正
* イベントオブジェクトエラーのバグの一部を修正
* 修復ツールがプロジェクト名がNULLの場合にエラー論理分岐に入るバグ

> 2022/02

* 新しい予備イベントProp
* 最適化ツールの簡素化
* attrの自動換算メカニズムの最適化
* 非同期データにインデックスオフセットが発生する可能性があるバグを修正

> 2022/01

* 新しい文字列マジック方法
* 新しいttgライブラリ
* Timerの最適化

> 2021/12

* 新しいコマンドversion
* 段階的な完結を最適化
* 各種bugsの修復

> 2021/11

* 新しいコマンドmodel run
* 構造化UIKitの最適化

> 2021/09 ~ 10

* 新しいProcess
* 最適化機能の補完と再構築

> 2021/05 ~ 09

* 新しい大量の機能追加
* bugsの修復

> 2021/05/01

* 審査項目
