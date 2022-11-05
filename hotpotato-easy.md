## Step 1

On your screen, you see two blue *blocks*. They say ``||Basic:on start||`` and ``||Basic:forever||``.

The ``||Basic:forever||`` block tells the @boardname@ a list of things to do *forever*. The program will go through the 
list, and when it is done, it will repeat the list, over and over again. The ``||Basic:on start||`` tells the @boardname@ 
some things to do at the very beginning. We actually don't need either of these blocks, so you can delete them.

Click **Next** to go to the next step

## Step 2

In our game, you and a partner will take turns passing your @boardname@ back and forth until a countdown timer expires. 
Whoever is holding the @boardname@ (the potato) when the timer expires is the loser of the game. We'll start the game when 
someone presses the A button. 

Click on ``||Input:Input||`` the left, then drag the ``||Input:onButtonPressed||`` block into the workspace.

Click **Next** to go to the next step

```blocks
input.onButtonPressed(Button.A, function() {})
```

## Step 3

In a program, a **variable** is a container to hold a value. When you want a program to store some information, you use a 
variable. 

We need to create a ``||Variables:timer||`` variable to store our countdown timer. Click on  ``||Variables:Variables||`` to 
the left, then click on "Make a variable". Type ``||Variables:timer||`` for the variable's name.


Click **Next** to go to the next step

## Step 4

Once you create the variable, you'll see it in the ``||Variables:Variables||`` tray on the left. Now drag a 
``||Variables:Set||`` block inside the mouth of the ``||Input:onButtonPressed||`` block.

We want to set the value to a random number between 2 and 20. To do this, you need to put a ``||Math:pick random||`` block 
in the ``||Variables:set||`` block and set the two values to 2 and 20.

Click **Next** to go to the next step


```blocks
input.onButtonPressed(Button.A, function() {
   timer = randint(2, 20)
})
```


## Step 5

Each time you start a new game, we'd like the LEDs on the @boardname@ to show the players that the timer is active. Use the 
``||Basic:showIcon||`` block to do this after you press the button and start the timer. You can change the icon that 
displays that your game is active, if you want.

Click **Next** to go to the next step

```blocks
input.onButtonPressed(Button.A, function () {
    timer = randint(2,20)
    basic.showIcon(IconNames.Chessboard)
})
```

## Step 6

While the timer is positive, the game is still going. When the timer is 0 or less, the game is over. To check this 
condition, we need a ``||Loops:while||`` loop. Drag this block below the ``||Basic:showIcon||`` block.

We want to continue looping as long as the ``||Variables:timer||`` variable is positive. Click on ``||Logic:Logic||`` to 
the left, then grab a ``||Logic:<||`` condition. Put this in place of ``||Logic:false||`` in your while loop condition. 
Then change the ``||Logic:<||`` to a ``||Logic:>||`` and use that condition to compare the value of the 
``||Variables:timer||`` variable to 0.

Click **Next** to go to the next step

```blocks
input.onButtonPressed(Button.A, function () {
    timer = randint(2, 20)
    basic.showIcon(IconNames.Chessboard)
    while (timer > 0) {
    	
    }
})
```

## Step 7

Inside the ``||Loops:while||`` loop, we want the ``||Variables:timer||`` variable to **decrease** by one every second.

First, use a ``||Variables:change||`` block to change the ``||Variables:timer||`` by -1.

Second, use a ``||Basic:pause||`` block to wait for 1 second before repeating the loop.

Click **Next** to go to the next step.

```blocks
input.onButtonPressed(Button.A, function () {
    timer = randint(2, 20)
    basic.showIcon(IconNames.Chessboard)
    while (timer > 0) {
        timer += -1
        basic.pause(1000)
    }
})
```

## Step 8

When the ``||Loops:while||`` loop is done, use a ``||Basic:showIcon||`` block to show that the game is done. Remember to 
use a different icon to show that the game is done.

Click **Next** to go to the next step.

```blocks
input.onButtonPressed(Button.A, function () {
    timer = randint(2, 20)
    basic.showIcon(IconNames.Chessboard)
    while (timer > 0) {
        timer += -1
        basic.pause(1000)
    }
    basic.showIcon(IconNames.Sad)
})
```


## Step 9

That's it! Download your code to the @boardname@ and play a game with a partner!

