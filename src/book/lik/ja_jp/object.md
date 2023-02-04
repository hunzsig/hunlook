## Object オブジェクト

#### すべてのファサードの一覧

```lua
Ability スキル
AbilityFunc スキル機能
AbilitySlot スキルバー
AbilityTpl スキルテンプレート
AI 戦略
Array 配列
AttackMode 攻撃モード
Attribute プロパティ
AttributeFunc プロパティ機能
Aura 領域
Bgm バックミュージック
Buff 操作可能状態
Camera カメラレンズ
Corpse 死体
Cursor ポインタ
Destructable 破壊可能物
Dialog ダイアログ
Effect エフェクト
EffectAttach エフェクトアタッチタイプ
Enchant 付魔
Flow 流体
Frame インタフェース
FrameAnimate インタフェースアニメーション
FrameBackdrop インタフェースの背景
FrameBackdropTile 界面背景分類
FrameBar インタフェースバー
FrameBarState インタフェースステータスバー
FrameBlock インタフェース空占
FrameButton インタフェースボタン
FrameCustom インタフェースのカスタマイズ
frameDrag インタフェースドラッグ
FrameHighLight インタフェースがハイライトされている
FrameLabel インタフェースの見出し
FrameList インタフェースのリスト
FrameMap インタフェースマップ
FrameModel インタフェースモデル
FramePop インタフェース気泡
FrameText インタフェーステキスト
FrameTextarea インタフェーステキストフィールド
FrameToolTips かいめんだんそう
Game ゲーム
Group グループ
Image 図
Item アイテム
ItemFunc アイテム機能
ItemSlot アイテムバー
ItemTpl アイテムテンプレート
Lightning 稲妻効果
Matrix 行列
Monitor モニタ
Player プレイヤー
Procoss プロセス
Quest クエスト
Rect 領域
Server サーバ
Store 倉庫
Team チーム
Timer タイマ
Tpl テンプレート
UIKit UIキット
Unit 単位
UnitFunc 単位機能
UnitTpl 単位テンプレート
V3d 3Dサウンド
Vcm パネルサウンド
Vector 2の2次元ベクトル
Vector 3の3次元ベクトル
Vwp 武器音効果
WarehouseSlot倉庫バー
Weather 天気
```

#### オブジェクトの破壊管理

```lua
local u = Unit(...)
isDestory(u) -- 判定オブジェクトの生存状態
destory(u) -- オブジェクトを破壊する
```
