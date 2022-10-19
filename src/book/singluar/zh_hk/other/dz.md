## 上線官方對戰平臺須知

> 上線的地圖需要在發佈後臺勾選上啓用平臺的 japi 選項，否則無法調用 lua 引擎庫

> 如我的項目叫 helloworld

1、第一步做好你的圖，做不好就不用看後麵了

2、熱更新測試項目

```
> sl.exe run helloworld
```

3、測試項目預打包

```
> sl.exe run helloworld -b
```

4、二次測試

```
> sl.exe run helloworld -d
```

5、將項目進行上線打包

```
> sl.exe run helloworld -r
```

6、項目打包完會啓動測試，此時已經在你的war3根目錄的map/test目錄內有了結果文件，如：

> \Warcraft3\Maps\Test\WorldEditTestMap.w3x

7、把地圖文件改個名，例如你的地圖是劍聖求生之路：crazy.v1.0.w3x,就可以上傳地圖到官方對戰平臺了！

### CONGRATULATIONS！
