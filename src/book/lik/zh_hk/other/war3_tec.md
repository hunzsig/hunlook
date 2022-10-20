## 魔獸作圖小技巧

### 如何令加載地圖時播放音樂

隨意創建一個F4觸發器

轉為自定義代碼並刪除裏面所有代碼

貼上以下代碼即可：
> * 此方法在重製版魔獸中可能是無效的

```jass
function myBgm takes string s returns nothing
    local string uri = "main.mp3" //這個路徑你可以播放默認的音樂（在F5）也可以播放F12導入的音樂
    call SetMapDescription(s)
    call PlayMusic(uri)
    set uri = null
endfunction
#define SetMapDescription(s) myBgm(s)
```

### 為什麼我的mp3背景音樂不能循環播放

背景音樂無法循環播放時，可以嘗試格式工廠轉wav再轉回mp3

一般問題已解決~

### 如何令一個技能隱藏但是依然有效

設置它的圖標座標為（0,-11）

### 物品編輯器如何輸入負數的數值

按住shift再雙擊即可輸入負值，某些技能負數會引起崩潰，如“水元素”

### 如何修改單位的最大生命/魔法

利用生命牌的bug可以實現，例如X點生命值。

有個叫生命護身符的物品，將它的技能設為2級，1級數據為0，2級數據為-X，將技能添加給目標單位後，設為2級，然後刪除

目標單位會永久增加X點生命值

> * 最大魔法值同理
