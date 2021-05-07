# ProjectSMART Pedometer Tutorial -- Level 1

## Step 1

Today, we're going to make a *pedometer* -- a device that counts how many steps you take.

A pedometer can be split into two parts:
1. A timer
2. Something that counts your steps

In this tutorial, we will learn how to use MakeCode and the @boardname@ to make a timer.

## Step 2

On your screen, you see two blue *blocks*. They say ``||Basic:on start||`` and ``||Basic:forever||``. 

## Step 3

The ``||Basic:on start||`` block tells the @boardname@ what to do when it first starts. We don't need it for this project. Click the ``||Basic:on start||`` block then press the delete key on your keyboard.

## Step 4

The ``||Basic:forever||`` block tells the @boardname@ a list of things to do *forever*. The program will go through the list, and when it is done, it will repeat the list, over and over again.

## Step 5

The way our timer will work is to start counting when you press a button, and to stop counting when we press another button. We'll go over the details in later steps.

## Step 6

On the left below, you can see the set of things that you can make your @boardname@ do. The @boardname@ can do a lot, but we're hiding some for you for now. 

## Step 7

The first thing we want our @boardname@ to do is to show the number of steps counted. Click on the stick figure and look at the choices. Drag the  ``||moveSMART:show timer||`` block onto the screen and place it inside the mouth of the ``||Basic:forever||`` block.

```blocks
basic.forever(function () {
    moveSMART.showTimer()
})
```

## Step 8

Look at the picture of the @boardname@ on the left. You should see it now show "0" on the display. This is because we haven't started the timer yet. (You can delete the ``||moveSMART:show timer||`` block and the 0 will disappear. But be sure to put it back!)

## Step 9

Next, we need to figure out how to start the timer. Look at the picture on the left. The @boardname@ has two buttons: A and B (the black circles next to the A and the B in the triangle). When you press A, we'll start the timer. When you press B, we'll stop the timer.

## Step 10

Click on the pink target (it says `Input` on the right). Look for the ``||input:on button A pressed||`` block. Drag it to your workspace. Now look inside the moveSMART menu for the ``||moveSMART:start timer||`` block. Drag it inside the mouth of the ``||input:on button A pressed||`` block.


```blocks
input.onButtonPressed(Button.A, function () {
    moveSMART.startTimer()
})
```

## Step 11

Try this one on your own first. Tell the @boardname@ to stop counting steps when you press the B button. Hint: create another ``||input:on button A pressed||`` block. Then look for where it says "A" and change it to "B".

```blocks
input.onButtonPressed(Button.B, function () {
    moveSMART.stopTimer()
})
```

## Step 12

Did you get it? You should have dragged the ``||input:on button A pressed||`` block to your workspace and clicked the triangle next to A. Then choose B. Then drag the ``||moveSMART:stop timer||`` block inside the mouth of the ``||input:on button A pressed||`` block.

## Step 13

Look at the picture of the @boardname@ on your screen again. To see how the timer works, we can press the pretend buttons on the picture of the @boardname@.
To start counting, press the A button (the black circle next to the A in the traingle). The @boardname@ will assume that you have started walking, so you will see the number on the @boardname@ increase. When you stop walking, press the B button, and the number will stay there. 