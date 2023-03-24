## Directory Structure

> (*) Required, missing will cause a crash
>
> (~) Automatic, missing automatic build
>
> (·) Customize, build as needed

```text
├── assets - (*|·) resource library
│   ├── war3mapFont - put fonts, only support ttf
│   ├── war3mapIcon - put icons, only support tga
│   ├── war3MapLoading - loading map, only support single tga or rule combination tga
│   ├── war3mapModel - put models, only support mdx, don't throw textures in
│   ├── war3mapPlugins - put plugins, reference existing formats
│   ├── war3mapPreview - preview map, only support tga
│   ├── war3mapSelection - put selection circles, reference provided formats
│   ├── war3mapSound - put sound effects and music, only support mp3
│   ├── war3mapTextures - put model textures, only support blp
│   └── war3mapUI - put UI suites, reference existing formats
├── assetsNew - (*|·) consistent with assets structure, used for processing new resources
├── projects - (~|·) used to place your map project directory, such as project_demo
│   └── project_demo - (·)
├── encrypt - (·) define the rules of obfuscation
│   ├── force.json - (·) forced obfuscation root words, low performance
│   └── rule.json - (·) obfuscation library file rules
├── library - (*) core
├── vendor - (*) 
│   ├── lni - important map data
│   ├── models - model command map template
│   ├── w3x2lni - w3x2lni tool(v:2.7.2)
│   └── WE - new horse
├── temp - (~) cache
├── conf - (~|·) configuration
└── lik.exe - (*) command tool
```

### Project Structure

> Most of the functions of lik are **configuration declarative**, with low requirements for order
>
> **Do not** and **should not** use require to load files in the project
>
> Files will be automatically loaded from top to bottom according to the file name. If you write a self-running script, please pay attention to the loading order yourself (for example, add an underscore in front of the name)

```
└── project_demo - project directory
    ├── assets - project resource reference, must be written under this name directory, do not write process code inside
    ├── scripts - project script code, must be written under this name directory
    │   ├── globals - global definition (for reference only)
    │   │    ├── setup - used to define game settings (for reference only)
    │   │    ├── tpl - used to establish object templates (for reference only)
    │   └── process - project process code, process starts with start
    ├── sublibrary - (·) local sub-core library (only write custom extensions to the core library, the file structure corresponding to the global library must be consistent)
    └── w3x - map file (don't mess with it, use the we command to modify parameters, and save to automatically generate backups)
        ├── map - map lni (don't change it easily, unless you understand it)
        ├── table - ini-style object editor (don't change it, don't care about object editor)
        └── war3mapMap.blp - thumbnail (don't change it)
```

### Plugin(Plugins) Structure

```
└── Printer - plugin directory name
    ├── encrypt - (·) obfuscation rules
    └── plulibrary - (*|·) plugin library script code
```

### UI Suite(Kit) Structure

```
└── my_kit - suite name
    ├── assets - (*|·) put resources
    │   ├── my.tga - one of my pictures
    │   ├── btn - supports multi-level directories
    │   │   └── bag.tga - a backpack icon
    │   └── brun.mdx - supports models, etc.
    ├── main.fdf - (·) supports additional fdf, but not recommended (must be named main)
    └── main.lua - (*) suite script code (must be named main)
```

### Loading Map Structure

> When the names are the same, the directory is preferred rather than the single image

```
├── default.tga - supports single image loading mode
└── default - also supports directory loading mode
    ├── bc.tga - progress bar color
    ├── bg.tga - progress bar background color
    └── pic.tga - background hollowed out picture
