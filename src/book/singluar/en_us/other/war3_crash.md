## Crash Causes of Warcraft

* Infinite loop logic 1: any unit enters area 1, immediately moves the trigger unit to area 2 -> any unit enters area 2, and immediately moves the trigger unit to area 1 
* infinite loop logic 2: any unit deals damage -> commands it to receive Injurer deals damage
* Infinite loop logic 3: any unit issues no target command -> command triggers unit no target - stop
* negative water element
* dead unit sets aura level
* range 9999999 hellfire
* too much elseif
* connection string Too many times at a speed of more than 3 characters at a time 
* Use null for the parameters of Filter and Condition instead of directly using null instead of boolexpr 
* LightningEx's z is too high or moves null 
* Add multiple skills with a high level cap to the unit
* Add engineering upgrades for common units
* Locust swarms move at a speed of 0 
* Create or move unit coordinates out of the complete map area
* Set the equivalent cycle
* Common unit hero inventory eats books
* The coordinates of the icon are out of bounds such as (-1,-1) Or (5,4) 
    > Note that 0,-11 is allowed and can be used to hide the icon
* More than one unit put a normal unit-hero or hero-normal unit hero-hero's transformation
* use the optimizer slk error optimization
* "<" appears in the description of the item 
* When the map is initialized, a unit is created for the player at the player's starting point according to the race, and it needs to be created after a delay. 
* No attacking unit is released to attack the ground
* In multiplayer games, it has been executed on the player in the previous game. "Victory" or "Failure" action, in the next round, after the player creates a unit, use the SelectUnitForPlayerSingle function on the player (the player selects a unit action). For example, the stones and trees in the scene) delete the destructible objects in an instant, and it will crash immediately
* lua2jass: function leak
* dynamic registration trigger critical mass crash
* The introduction of the model itself has quality problems, and the memory will crash when the model is called
* used Low-quality model, but the Warcraft model details, animation quality, texture quality, and particle effects are not all configured to "high", and memory crashes when calling the model
