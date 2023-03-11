## Sub Library

#### Although the framework library is very complete and powerful, there are times when it can't be satisfied

#### After the project is built, a local core library library can be created independently

#### There are many advantages of using the library. It is strongly not recommended to write extensions outside the library

* Automatic loading, fitting tool link
* Convenient management, greatly reducing maintenance costs
* Path mandatory, easy to copy between different projects
* Rule adaptation and automatic handling of confusion

#### The following will show the process of extending a method for Game

```
New a project called demo
```

#### According to the directory structure of the library, we can know that there are classes under oop

#### The class contains the implementation source code of Game object game.lua

```lua
Path to reference library
lik\library\oop\class\game.lua

Relatively build the path of the library once
demo\sublibrary\oop\class\game.lua
```

#### Reference class to add a method infoCenter for it

> This example has been included in the new project of default new

```lua
---@type GameClass
local class = Class(GameClass)

---@param modify string|nil
---@return self|string
function class:infoCenter(modify)
    return self:prop("infoCenter", modify)
end
```

#### In addition to expanding existing functions, new modules are also supported and can be freely used
