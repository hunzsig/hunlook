## 如何學習

### 入門的法訣

接觸這個框架的萌新，或無經驗、或接觸過、或熟練使用其他技術製圖。

首先使用本框架，儘量不要帶有先入為主的觀念，把已有的放一放，重新接受這個新的事物。

大多數情況原有的概念會很好的幫助你入門新的概念，但有時卻會阻礙你理解新的模式新的環境。

### 知之為不知

有的萌新閲讀了部分文檔後，意識到自己的技術還不足夠駕馭框架，懂得自行前往學習。這是值得稱道的行為！ 例如你還沒熟悉 [Lua，找一些公開的教程學習](https://www.runoob.com/lua/lua-tutorial.html)，這非常好。

值得注意的是，教程也得自我篩選，不能隨便學習，儘量學基礎的而不要學繁雜的重複的。舉個例子：本框架開箱即用，環境乾淨無毒無害，入門門檻極低，已經有了一套相當完善的配置。這時你看到一個Lua作圖環境搭建，雖然可能你不會，但我覺得你沒必要專門去學習，對大部分人來説你學完也沒用武之地。

何況市面上的不少教程工具比較劣質，什麼異步創建單位，本地測試循環，參雜惡性代碼等等奇怪操作，學了説不定還會誤導你。有疑惑問問原作者。如果有發現問題，還能及時溝通。我不敢給你提供的東西就一定正確，但不妨先看看框架做的，畢竟你看這個文檔就是為了學習它。你如果説你根本不是來學習使用的搗亂者，我的建議是請關閉此文檔並刪除相關的一切，走好不送哈，不要影響別人熱愛的人。

### 不應該做的事

在鍵盤鼠標事件裏，執行只能在同步環境下使用的函數

* 只在裏面使用異步運行函數或手動同步

不遵循框架結構，自行使用 require

* 如果你能控制，那麼隨便使用，如果不能，請儘量自加載

使用 table、function 作為另一個 table 的 key

* 禁用

使用 table、function 作為prop 的 key

* 禁用

使用 pairs 遍歷 kv型 table

* 使用 Array、ipair、pairx代替

修改項目後，跳過其他測試直接 -r 測試

* 沒有人能保證自己不犯錯，多測幾次沒有壞處

### 懂得問問題

下列問問題方法相信可以幫助你~

![Question](https://gitlab.com/h-document/lik/-/raw/main/assets/question1.png)

![Question](https://gitlab.com/h-document/lik/-/raw/main/assets/question2.png)

### 善用工具

在chatGPT發佈後，湧現出了更多的可能性，視之為洪水猛獸不可取，應作為工具運用好它們

> 更多如：文言一心、NewBing、Copilot、Cursor等等，這裏我就不推薦了，可自行了解。

比如我就運用AI幫忙翻譯並修改文檔

![AiTrans1](https://gitlab.com/h-document/lik/-/raw/main/assets/aiTrans1.png)

![AiTrans2](https://gitlab.com/h-document/lik/-/raw/main/assets/aiTrans2.png)

你也可以試着使用AI幫助你理解代碼、優化代碼

![AiSee1](https://gitlab.com/h-document/lik/-/raw/main/assets/aiSee1.png)

![AiSee2](https://gitlab.com/h-document/lik/-/raw/main/assets/aiSee2.png)

![AiSee3](https://gitlab.com/h-document/lik/-/raw/main/assets/aiSee3.png)

你也可以試着使用AI幫助你尋找代碼裏面的bug

![AiSee4](https://gitlab.com/h-document/lik/-/raw/main/assets/aiSee4.png)

又或者直接讓AI幫你幹起來

> 指示：冷卻改為666秒，名字改為人類滅亡，技能被動觸發條件改為單位攻擊的時候

![AiDo1](https://gitlab.com/h-document/lik/-/raw/main/assets/aiDo1.png)

> 指示：參考已有的劍之勇氣技能，幫我寫一個類似效果的技能，名字叫人類防禦終章，原來每層增加攻擊改為每層增加防禦力15點和移動力30點

![AiDo2](https://gitlab.com/h-document/lik/-/raw/main/assets/aiDo2.png)

雖然AI説的不一定準確，也肯定會犯錯，但只要學會分辨，去除糟粕、留存精華，定能助你一臂之力。

##### 學習是門學問，有時退步反而更能進步。任何事物都是辯證的，當我們面對難題不奏效時，不妨考慮退一步，思考思考再前行。最後祝君，碼落驚風雨，技成泣鬼神。
