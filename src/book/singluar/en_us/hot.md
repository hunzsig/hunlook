## Hot update

#### When the run command is preset or enabled for testing in - h mode

#### Will automatically enable hot update, which means that the corresponding code segment is automatically reset

#### You can add, delete, rename and modify contents of directory files within the scope

> The operation of modifying content will have initial fluctuation filtering at the beginning of the test, so it may not be captured immediately, and the capture will officially start after several modifications

#### The coverage of hot update includes:

```text
/vendor/kernel/library/
/assets/war3mapUI/
/projects/*/
```

#### It needs to be clear that the coverage does not necessarily mean effective hot update

#### The operation may not work completely, depending on your understanding of code execution

* It is necessary to distinguish between hot update and hot execution.
* Some things are even more hot and ineffective: such as various assets, nested UIKit, etc; Try more and you will know later.
* Don't be afraid of mistakes caused by heat. Only when you make more mistakes will you be more skilled. Try more and understand more.

### For example, here is a hot print

> After you modify the content, you will see that the command console prompt has been updated, and 456 has also been printed.

```lua
--- old
print(123)

--- new
print(456)
```

### And here is a hotter function

> After you modify the content, you will see a prompt on the command console that it has been updated, but the function will not be executed because you just redefine it.

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

##### Hoter operation allows you to handle more details while executing

##### The convenience of hot change depends on your proficiency in it. You can use it better if you use it more. Practice makes perfect.
