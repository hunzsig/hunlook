## Command Line

### New Project

```
> sl.exe new demo //Create a new map project named demo
```

### Edit terrain with WE

> After editing, the changes will be automatically recorded back to your project when using test

```
> sl.exe we demo //Open the project demo with WE, mainly for editing terrain
```

### Model batch view

### Model batch view

There are 2 parameters after the command

* 1 Category: Divided into -a (view assets) -n (view assetsNew) -p (view the model declaration unreal code of a project's assets)
* 2 Filter: Search

> The default scale of the model is 1.00, which is convenient for comparison
>
> Path with item_ The model of will scale 2.00 for easy viewing (because the item model is usually small)
>
> Path with eff_ The model of will scale 0.75 for easy viewing (because the special effects model is usually messy)

```
> sl.exe model -a //View models in root assets directory
> sl.exe model -a buff //View models in the root assets directory, and only view models with buffs in the path
> sl.exe model -a buff,eff //View models in the root assets directory, and only view models with buff or eff in the path
> sl.exe model -n //View models in root assets New directory
> sl.exe model -p:demo 1  //Check out the model declaration for the demo project Unreal Model
```

### Run the test

There are 2 parameters after the command

* 1 Project: specific project name, such as demo
* 2 mode: (default -h)
    * -t(test Temporary) Only create a temporary directory and package resources such as ini maps, without building test maps and opening tests
    * -h(hot HotUpdate) Open window debugging. You can restart F 10 to get script updates, and you can also modify files to update scripts in real time
    * -b(build BuildPackage) Open window debugging. No hot update, encryption, no slk optimization.
    * -d(distributable DistPackage) Open window debugging. No hot update, encrypted and shuffled, automatic slk optimization.
    * -r(release PublishPackage+slk) There is no debug window. No hot update, encrypted and shuffled, automatic slk optimization.

> Generally, the actual running test charts are placed in \Warcraft III Frozen Throne\Maps\Test\WorldEditTestMap.w3x
>
> For the specific location, please refer to the configuration in WE

```
> sl.exe run demo -t //Generate temporary files to view
> sl.exe run demo -h //In hot update mode and debug the demo
> sl.exe run demo -b //Build script to encrypt map and debug demo
> sl.exe run demo -d //Build script encrypted and slk optimized map and debug demo
> sl.exe run demo -r //Publish
```

> Add the ~ symbol after the pattern to skip resource changes, especially for testing when pure code changes
```
> sl.exe run demo -h~
> sl.exe run demo -b~
> sl.exe run demo -d~
> sl.exe run demo -r~
```

### Open N Warcraft clients at the same time (support JAPI)

> Open 2 by default, and open 9 at most at one time (not recommended, 4 for a single person is enough)

```
> sl.exe multi 4 //open 4
```

### Close all War 3 clients

> This command requires administrator privileges, please note

```
> sl.exe kill
```

### Clear Cache

```
> sl.exe clear demo //Clean build temporary files
```

### Clean local DZ server data

```
> sl.exe clean
```

### View current tool version

```
> sl.exe version
```
