## Plugin Library

#### Sometimes we don't want to modify the core library directly

#### And sometimes, for various reasons, we don't want to make a sublibrary public while the project is still in development

#### This is where the war3mapPlugins plugin library comes in handy. Plugins are independent of the project and make sharing code easier.

#### The following example will use the Printer plugin to illustrate.

> First, let's take a look at the directory structure of Printer.

![Plugins1](https://gitlab.com/h-document/lik/-/raw/main/assets/plugins1.png)

#### A plugin consists of two parts: encrypt and plulibrary. These two directories are fixed.

* encrypt is used to define the obfuscation rules for the plugin's custom content, with files starting from plulibrary.
* plulibrary is where the library code is placed. You can write whatever you want, but if you follow the main library structure, you can get more low-level assistance, such as obfuscation.

#### If plulibrary is a supplement to existing logic, the rules will be inherited and no additional coding is required.

#### If the oop under plulibrary is defined according to the current structure, the code will be automatically obfuscated during packaging.

> Here's a directory structure worth referencing.

![Plugins2](https://gitlab.com/h-document/lik/-/raw/main/assets/plugins2.png)

#### After everything in the plugin is written, it won't take effect automatically.

#### Like UIKit, you need to reference which plugin to enable in assets.

```lua
_assets_plugins("Printer")
