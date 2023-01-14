## 上線對戰平臺須知

> 上線的地圖需要在釋出後臺勾選上啟用平臺的 japi 選項，否則無法呼叫 lua 引擎庫

> 如我的專案叫 helloworld

1、第一步做好你的圖，做不好就不用看後面了

2、熱更新測試專案

```
> lik.exe run helloworld
```

3、測試專案預打包

```
> lik.exe run helloworld -b
```

4、二次測試

```
> lik.exe run helloworld -d
```

5、將專案進行上線打包

```
> lik.exe run helloworld -r
```

6、專案打包完會啟動測試，此時已經在你的war3根目錄的map/test目錄內有了結果檔案，如：

> \Warcraft3\Maps\Test\WorldEditTestMap.w3x

7、把地圖檔案改個名，例如你的地圖是劍聖求生之路：crazy.v1.0.w3x,就可以上傳地圖到對戰平臺了！

### CONGRATULATIONS！
