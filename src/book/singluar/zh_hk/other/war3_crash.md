## 魔獸常見崩潰原因

* 死循環邏輯1：任意單位進入區域1，立即移動觸發單位到區域2->任意單位進入區域2，立即移動觸發單位到區域1
* 死循環邏輯2：任意單位造成傷害->命令其對受傷害者造成傷害
* 死循環邏輯3：任意單位發佈無目標指令->命令觸發單位無目標-停止
* 負數水元素
* 死亡單位設置光環等級
* 範圍9999999的地獄火
* 過多的elseif
* 連接字符串以每次大於3個字符的速度次數過多
* Filter和Condition的參數用null 而不是直接用null代替boolexpr
* LightningEx的z過高或者移動了null
* 給單位添加多個等級上限很高的技能
* 普通單位添加工程升級
* 蝗蟲群的蝗蟲位置移動速度為 0
* 新建或者移動單位坐標出完整地圖區域
* 設置等價物循環
* 普通單位英雄物品欄吃書
* 圖標的坐標出界例如 (-1,-1) 或者 (5,4)
  > 註意 0,-11是允許的，可以用來隱藏圖標
* 超過一個單位放 普通單位－英雄 或者 英雄－普通單位 英雄－英雄的變身
* 用優化器slk錯誤的優化
* 物品的描述中出現 "<"
* 地圖初始化時按種族在玩家開始點為玩家創建單位,需要延時創建
* 無攻擊單位釋放攻擊地麵
* 多人遊戲下，在上一局遊戲中對玩家執行過"勝利"或"失敗"動作，在下一局，此玩家創建單位後對玩家使用SelectUnitForPlayerSingle函數（玩家選中某單位動作）此崩潰幾率出現，人數越多幾率越高
* 當單位在攻擊可破壞物（例如場景裏的石頭和樹這類）瞬間刪除可破壞物,會立刻崩潰
* lua2jass: function泄漏
* 動態註冊觸發器臨界量崩潰
* 引入模型本身具有質量問題，在調用模型時會內存崩潰
* 使用了低質量模型，但魔獸模型細節、動畫質量、紋理質量、粒子效果冇有全部配置“高”，在調用模型時會內存崩潰
