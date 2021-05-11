# ProjectSMART Pedometer Tutorial -- Level 1

## Step 1

On your screen, you see two blue *blocks*. They say ``||Basic:on start||`` and ``||Basic:forever||``. 

## Step 2

The ``||Basic:on start||`` block tells the @boardname@ what to do when it first starts. We don't need it for this project. Click the ``||Basic:on start||`` block then press the delete key on your keyboard.

## Step 3

The ``||Basic:forever||`` block tells the @boardname@ a list of things to do *forever*. The program will go through the list, and when it is done, it will repeat the list, over and over again.

## Step 4

The way our timer will work is to start counting when you press a button, and to stop counting when we press another button. We'll go over the details in later steps.

## Step 5

On the left below, you can see the set of things that you can make your @boardname@ do. The @boardname@ can do a lot, but we're hiding some for you for now. 

## Step 6

The first thing we want our @boardname@ to do is to show the number of steps counted. Click on the stick figure and look at the choices. Drag the  ``||moveSMART:show timer||`` block onto the screen and place it inside the mouth of the ``||Basic:forever||`` block.

```blocks
basic.forever(function () {
    moveSMART.showTimer()
})
```

## Step 7

Look at the picture of the @boardname@ on the left. You should see it now show "0" on the display. This is because we haven't started the timer yet. (You can delete the ``||moveSMART:show timer||`` block and the 0 will disappear. But be sure to put it back!)

## Step 8

Next, we need to figure out how to start the timer. Look at the picture on the left. The @boardname@ has two buttons: A and B (the black circles next to the A and the B in the triangle). When you press A, we'll start the timer. When you press B, we'll stop the timer.

## Step 9

Click on the pink target (it says `Input` on the right). Look for the ``||input:on button A pressed||`` block. Drag it to your workspace. Now look inside the moveSMART menu for the ``||moveSMART:start timer||`` block. Drag it inside the mouth of the ``||input:on button A pressed||`` block.


```blocks
input.onButtonPressed(Button.A, function () {
    moveSMART.startTimer()
})
```

## Step 10

Try this one on your own first. Tell the @boardname@ to stop counting steps when you press the B button. Hint: create another ``||input:on button A pressed||`` block. Then look for where it says "A" and change it to "B".

## Step 11

Did you get it? You should have dragged the ``||input:on button A pressed||`` block to your workspace and clicked the triangle next to A. Then choose B. Then drag the ``||moveSMART:stop timer||`` block inside the mouth of the ``||input:on button B pressed||`` block.

```blocks
input.onButtonPressed(Button.B, function () {
    moveSMART.stopTimer()
})
```

## Step 12

Look at the picture of the @boardname@ on your screen again. To see how the timer works, we can press the pretend buttons on the picture of the @boardname@.
To start counting, press the A button (the black circle next to the A in the traingle). The @boardname@ will start the timer, so you will see the number on the @boardname@ increase. To stop the timer, press the B button, and the number will stay there.

## Step 13

Now, we want to transfer the code onto the real @boardname@.
Watch the video [Transferring your program to the BBC micro:bit](https://www.youtube.com/watch?v=-FZ8yTnoozY).

Press the **Download** on the bottom left. You should see the lights on your @boardname@ flashing.

## Step 14

Press the buttons on your real @boardname@. Does it work?
