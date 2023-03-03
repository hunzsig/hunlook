## Directory Structure

> 【*】Required Necessity, Lost Crash
>
> 【~】Automatic Temporary, lack of automatic builds
>
> 【◇】Customize Custom, build on demand

```text
├── assets -【*|◇】Resource Library
│   ├── war3mapFont - Put fonts, only support ttf
│   ├── war3mapIcon - Put icon, only support tga
│   ├── war3MapLoading - Load image, only supports single image tga or rule combination tga
│   ├── war3mapModel - Put the model, only support mdx, do not throw in the texture
│   ├── war3mapPreview - Preview image, only supports tga
│   ├── war3mapSelection - Put the selection circle, refer to the provided format
│   ├── war3mapSound - Play sound effect music, only support mp3
│   ├── war3mapTextures - Put model texture, only support blp
│   └── war3mapUI - Put UI kit, existing format reference
├── assetsNew -【*|◇】Consistent with the assets structure, used when dealing with new resources
├── projects -【~|◇】Used to place your map project directory, such as project_demo
│   └── project_demo -【◇】
├── encrypt -【◇】Define obfuscated rules
│   ├── force.json -【◇】Forced confusion of root words, low efficiency
│   └── rule.json -【◇】Confuse library file rules
├── library -【*】Core
├── support -【*】
│   ├── lni - ImportantMap Data
│   ├── models - ModelCommandMap Template
│   ├── w3x2lni - w3x2lni Tool(v:2.7.2)
│   └── WE - MaZai WE Tool
├── temp -【~】Cache
├── conf -【~|◇】Configure
└── lik.exe -【*】Command Tool
```

### Project Structure

> Most of the functions of sinluar are **configuration declarative**, and the sequence requirements are low.
>
> It is **not required** and should **not be used** to load files with require at all within the project
>
> The files will be automatically loaded **from top to bottom** according to the file name.
> If you write a self-running script, please pay attention to the loading order (such as adding an underscore before the
> name or something)

```
└── project_demo - Project Directory
    ├── assets - Project resource reference, must be written in this name directory, do not write process code in it
    ├── scripts - Project script code, must be written in this name directory
    │   ├── globals - Global Definition(For ReferenceOnly)
    │   │    ├── setup - Used to define game settings(For ReferenceOnly)
    │   │    ├── tpl - Used to create object templates(For ReferenceOnly)
    │   └── process - Project process code, the process starts with start
    ├── sublibrary -（·）Local sub core library (only the user-defined extension of the core library is written, and the corresponding structure of the file must be consistent with the global library)
    └── w3x - Map file (don't change anything, use the we command to modify the parameters, and automatically generate a backup after saving)
        ├── map - Map lni (don't change it easily, unless you understand it)
        ├── table - ini-style object editing (don't change it, don't follow the physical editing)
        └── war3mapMap.blp - Thumbnail (do not change)
```

### UI Kit Structure

```
└── my_kit - name
    ├── assets -（*|·）
    │   ├── my.tga - A picture
    │   ├── btn - Support Directory
    │   │   └── bag.tga - A picture of bag
    │   └── brun.mdx - Support Model or other assets
    ├── main.fdf -（·）Support additional FDF, but not recommended (must be called main name)
    └── main.lua -（*）Codes (must be called main name)
```

### Loading Structure

> In case of the same name, the directory preference is preferred over the single graph

```
├── default.tga - Support single graph loading graph mode
└── default - It also supports directory set loading diagram mode
    ├── bc.tga - Progress bar color
    ├── bg.tga - Progress bar background color
    └── pic.tga - Main background with hollow out drawing
```
