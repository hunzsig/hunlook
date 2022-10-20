## 魔獣によく見られる崩壊原因

* デッドサイクルロジック1：任意の単位がゾーン1に入り、トリガ単位をゾーン2に直ちに移動2->任意の単位がゾーン2に入り、トリガ単位をゾーン1に直ちに移動
* デッドサイクルロジック2：任意の単位にダメージを与える->ダメージを受けた者にダメージを与えるように命令する
* デッドサイクルロジック3：任意の単位による目標なし命令の発行->命令トリガ単位に目標なし-停止
* 負数の水元素
* 死亡単位はリングレベルを設定する
* 範囲9999999の地獄の火
* 過剰なelseif
* 接続文字列が1回に3文字以上の速度で多すぎる
* FilterとConditionのパラメータはboolexprの代わりにnullを使用するのではなくnullを使用する
* LightningExのzがnullを移動しすぎている
* レベル上限の高いスキルを単位に複数追加
* 一般単位追加工事のアップグレード
* バッタの群れのバッタの位置移動速度は0
* 完全な地図領域を示すための単位座標の新規作成または移動
* 等価物循環の設定
* 一般単位英雄アイテム欄は本を食べる
* アイコンの座標アウト、たとえば（-1，-1）または（5，4）
  > 注0、-11は許可されており、アイコンを隠すために使用できます
* 1つ以上の単位に通常の単位を置く－英雄または英雄－通常の単位英雄－英雄の変身
* 最適化器slkエラーによる最適化
* アイテムの説明に「<」が表示される
* マップの初期化時に種族別にプレイヤーの開始点に単位を作成するには、作成を遅らせる必要があります
* 攻撃単位なしで攻撃床を解放する
* マルチプレイの下で、前回のゲームでプレイヤーに対して「勝利」または「失敗」アクションを実行したことがあり、次のゲームでは、このプレイヤーが単位を作成した後にSelectUnitForPlayerSingle関数を使用してプレイヤーにクラッシュ確率が発生し、人数が多いほど確率が高くなります
* シーン内の石や木などの破壊可能なものを攻撃した瞬間に単位が破壊可能なものを削除すると、すぐに崩壊します
* lua 2 jass：functionリーク
* トリガクリティカルクラッシュの動的登録
* モデルの導入自体に品質の問題があり、モデルを呼び出すとメモリがクラッシュする
* 低品質モデルを使用していますが、魔獣モデルの詳細、アニメーションの品質、テクスチャの品質、パーティクル効果のすべてに「高」が設定されておらず、モデルを呼び出すとメモリがクラッシュします