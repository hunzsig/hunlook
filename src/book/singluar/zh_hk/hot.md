## 熱更新

#### run 命令默認或啓用 -h 模式下進行測試時

#### 會自動啓用熱更新，而熱更新指的是對應的代碼段自動重置

#### 你可以在範圍內對目錄文件進行增加、刪除、重名、修改內容等操作

> 修改內容的操作在測試開始會有起始波動過濾，所以不一定會立刻捕獲，修改幾次後正式開始捕獲

#### 熱更新覆蓋的範圍包括有：

```text
/vendor/kernel/library/
/assets/war3mapUI/
/projects/*/
```

#### 需要明確的一點是，範圍包含不代表就一定能有效的熱更新

#### 操作也不一定完全起效，這取決於你對代碼的執行理解程度

* 需要區分開熱更新與熱執行的區別
* 有的東西熱更了也沒效：如各種assets、嵌套UIKit等；多試慢慢都會知道
* 不必害怕熱更導致的報錯，錯多了才會更熟練，多試錯多瞭解

### 比如這裏熱更一個print

> 當你修改內容後，會看到命令台提示已熱更，而456也已經打印

```lua
--- old
print(123)

--- new
print(456)
```

### 而這裏熱更一個function

> 當你修改內容後，會看到命令台提示已熱更，但function並不會執行，因為你只是重新定義了它

```lua
--- old
myFunc = function()
    print(123)
end

--- new
myFunc = function()
    print(456)
end
```

##### 熱更的操作使得你可以在運行的同時處理更多的細節問題

##### 熱更的便利程度取決你對它的熟練程度，多使用才能更好運用它，熟能生巧
