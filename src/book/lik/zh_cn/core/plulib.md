## 插件库

#### 有时候我们并不想直接修改功能库 library

#### 又有时候项目处于开发途中或其他原因，也不想公开项目子库 sublibrary

#### 这时 war3mapPlugins 插件库的作用就出来了。插件独立于项目之外，在分享代码的时候会更加方便

#### 下面将以实例插件 Printer 说明

> 这里先观察一下 Printer 的目录结构

![Plugins1](/assets/plugins1.png)

#### 一个插件包含两部分 encrypt 和 plulibrary，这两个目录是固定的

* encrypt 用于定义插件自定义内容的混淆规则，file由plulibrary后开始
* plulibrary 就是库代码放置的地方，你可以随意编写，但当你与主library结构一致时，可获得更多底层协助，如混淆等

#### plulibrary如果是对原来已有逻辑的补充，那么规则会**沿用已有的而不需要额外编写**

#### 而plulibrary下的oop严重根据当前结构来定义的话，在打包时则会自动进行代码混淆

> 这里看一个值得参考的目录结构

![Plugins2](/assets/plugins2.png)

#### 插件所有的东西编写完成后，并不会自动生效

#### 与UIKit类似，你需要启用哪一个插件，需要自己在assets中引用

```lua
_assets_plugins("Printer")
```
