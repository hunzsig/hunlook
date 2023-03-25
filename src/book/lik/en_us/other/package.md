## Packaging correction

#### Although automatic obfuscation has undergone considerable fine-tuning and processing

#### However, there are still a few cases where errors are reported after -b and subsequent packaging

#### For example, annotation information, string calling object methods, etc., the following is an example that can be easily solved in case of encountering

```lua
local process = Process("test")
process:onStart(function(this)
    print("--This is a devastating print")
end)
```

#### Here, the -h test result can be run

![PackageH](/assets/packageH.png)

#### But an error was reported when using -b

![PackageB](/assets/packageB.png)

#### Many people are already at a loss at this time, and we should not panic. We know that the packaged temporary files are actually in the temp directory
#### According to the prompt, it is script\process\test.lua. Enter the map directory to find the problem

> This _build is the temporary directory corresponding to the -b command

![PackageBuild](/assets/packageBuild.png)

#### Open the code file and you can see that an error has been reported

![PackageError](/assets/packageError.png)

#### This is of course difficult to view, so we format the resulting code

![PackageFormat](/assets/packageFormat.png)

#### We can see that 'This is a devastating print' behind print("--This is a devastating print") is missing

#### The description was deleted while removing the comment

#### Let's not write like this because it will be optimized and replaced with >>

```lua
local process = Process("test")
process:onStart(function(this)
    print(">>This is a devastating print")
end)
```

#### -b The test found that no errors were reported and the problem was resolved

#### In addition to the final passive correction, we can usually pay attention to the terminal prompts when testing

#### For example, a warning that the resource does not exist, or a warning that the resource is not being used

![PackageAssetsError](/assets/packageAssetsError.png)

![PackageAssetsWarn](/assets/packageAssetsWarn.png)
