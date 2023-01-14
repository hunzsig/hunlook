## 上線對戰平台須知

> 上線的地圖需要在發佈後台勾選上啓用平台的 japi 選項，否則無法調用 lua 引擎庫

> 如我的項目叫 helloworld

1、第一步做好你的圖，做不好就不用看後面了

2、熱更新測試項目

```
> lik.exe run helloworld
```

3、測試項目預打包

```
> lik.exe run helloworld -b
```

4、二次測試

```
> lik.exe run helloworld -d
```

5、將項目進行上線打包

```
> lik.exe run helloworld -r
```

6、項目打包完會啓動測試，此時已經在你的war3根目錄的map/test目錄內有了結果文件，如：

> \Warcraft3\Maps\Test\WorldEditTestMap.w3x

7、把地圖文件改個名，例如你的地圖是劍聖求生之路：crazy.v1.0.w3x,就可以上傳地圖到對戰平台了！

### CONGRATULATIONS！
