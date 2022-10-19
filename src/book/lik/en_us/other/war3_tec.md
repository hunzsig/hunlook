## Warcraft WE tips

### How to make music play when map is loaded

Create an F4 trigger

Convert to custom code and delete all code inside

Just paste the following code:
> * This method may not work in Reforged Warcraft

```jass
function myBgm takes string s returns nothing
    local string uri = "main.mp3" //In this path, you can play the default music (in F5) or the music imported from F12
    call SetMapDescription(s)
    call PlayMusic(uri)
    set uri = null
endfunction
#define SetMapDescription(s) myBgm(s)
```

### Why doesn't my mp3 background music play in a loop?

When the background music cannot be played in a loop, you can try the format factory to convert to wav and then back to mp3

General issue resolved~

### How to make a skill hidden but still effective

Set its icon coordinates to（0,-11）

### How to enter negative values in the item editor

Hold down shift and double-click to enter negative values.
Negative values for certain skills will cause crashes, such as "Water Element"

### How to modify a unit's max health/magic

It can be achieved by using the bug of life cards, such as X life value.

There is an item called Amulet of Life, set its skill to level 2, the data of level 1 is 0, the data of level 2 is -X, after adding the skill to the target unit, set it to level 2, and then delete it

The target unit will permanently gain X health

> * Same as max mana
