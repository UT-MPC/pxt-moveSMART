# Hot Potato Tutorial -- Advanced

## Step 1

On your screen, you see two blue *blocks*. They say ``||Basic:on start||`` and ``||Basic:forever||``.

The ``||Basic:forever||`` block tells the @boardname@ a list of things to do *forever*. The program will go through the 
list, and when it is done, it will repeat the list, over and over again. We don't need this block, so you can delete it.

Click **Next** to go to the next step

## Step 2

Our game will use the @boardname@ radio to pass a virtual potato back and forth. We will take turns. Before the game 
starts, it's no one's turn. The first thing we need to do is create a myturn variable, which will be either true or false. 
When the program starts, we want it to be false.

```blocks
basic.onstart(function(){
    myturn = false
})
```

Click **Next** to go to the next step

## Step 3

On the left below, you can see the set of things that you can make your @boardname@ do. The @boardname@ can do a lot, but we're hiding some from you for now. 

Click **Next** to go to the next step

## Step 4

The first thing we want our @boardname@ to do is to show the number of steps counted. Click on the stick figure and look at the choices. Drag the  ``||moveSMART:show timer||`` block onto the screen and place it inside the mouth of the ``||Basic:forever||`` block.

After you try, you can click on the blue lightbulb in the circle (over on the right) to check to see if you did it correctly.

```blocks
basic.forever(function () {
    moveSMART.showTimer()
})
```

## Step 5

Look at the picture of the @boardname@ on the left. You should see it now show "0" on the display. This is because we haven't started the timer yet. (You can delete the ``||moveSMART:show timer||`` block and the 0 will disappear. But be sure to put it back!)

## Step 6

Next, we need to figure out how to start the timer. Look at the picture on the left. The @boardname@ has two buttons: A and B (the black circles next to the A and the B in the triangle). When you press A, we'll start the timer. When you press B, we'll stop the timer.

## Step 7

Click on the pink target (it says `Input` on the right). Look for the ``||input:on button A pressed||`` block. Drag it to your workspace.

```blocks
input.onButtonPressed(Button.A, function () {
	
})
```

## Step 8


Now look inside the moveSMART menu for the ``||moveSMART:start timer||`` block. Drag it inside the mouth of the ``||input:on button A pressed||`` block.

```blocks
input.onButtonPressed(Button.A, function () {
    moveSMART.startTimer()
})
```

## Step 9

Try this one on your own first. Tell the @boardname@ to stop counting steps when you press the B button.

Hint: create **another** ``||input:on button A pressed||`` block. Then look for where it says "A" and change it to "B".

## Step 10

Did you get it? You should have dragged the ``||input:on button A pressed||`` block to your workspace and clicked the triangle next to A. Then choose B. Then drag the ``||moveSMART:stop timer||`` block inside the mouth of the ``||input:on button B pressed||`` block.

```blocks
input.onButtonPressed(Button.B, function () {
    moveSMART.stopTimer()
})
```

## Step 11

Look at the picture of the @boardname@ on your screen again. To see how the timer works, we can press the pretend buttons on the picture of the @boardname@.

Click **Next** to go to the next step

## Step 12

To start counting, press the A button (the black circle next to the A in the triangle). The @boardname@ will start the timer, so you will see the number on the @boardname@ increase. To stop the timer, press the B button, and the number will stay there.

When the number is bigger than 9, it doesn't fit on the small set of LEDs, so the @boardname@ will make the number scroll.

Click **Next** to go to the next step

## Step 13

Now, we want to transfer the code onto the real @boardname@.
Watch the video [Transferring your program to the BBC micro:bit](https://www.youtube.com/watch?v=-FZ8yTnoozY).

1. Make sure your @boardname@ is connected to your computer using the USB cable.
2. Press the ``|Download|`` on the bottom left.
3. Click **Pair Device** (it's in a gray button).
4. Click the purple **Pair Device** button. In the window that appears, select the @boardname@ device (It should start with "BBC micro:bit...") Click the Connect button.
5. Now click the purple ``|Download|`` button again.

You should see the lights on your @boardname@ flashing.

## Step 14

Press the buttons on your real @boardname@. Does it work? If you want to reset your timer to 0, press the reset button on the back of the @boardname@.

Now head back into the tutorial webpage. You should still have it open in a tab in your browser.
