# ProjectSMART Pedometer Tutorial -- Level 1

## Step 1

In this tutorial, we will learn how to use MakeCode and the @boardname@ to make a *pedometer* -- a device that counts how many steps you take.

## Step 2

On your screen, you see two blue *blocks*. They say ``||Basic:on start||`` and ``||Basic:forever||``. 

## Step 3

The ``||Basic:on start||`` block tells the @boardname@ what to do when it first starts. We don't need it for this project. Click the ``||Basic:on start||`` block then press the delete key on your keyboard.

## Step 4

The ``||Basic:forever||`` block tells the @boardname@ a list of things to do *forever*. The program will go through the list, and when it is done, it will repeat the list, over and over again.

## Step 5

The way our step counter will work is to detect anytime the @boardname@ *shakes*. When the program detects the @boardname@ is shaken, it will count one step.

## Step 6

On the left below, you can see the set of things that you can make your @boardname@ do. The @boardname@ can do a lot, but we're hiding some for you for now. 

## Step 7

The first thing we want our @boardname@ to do is to show the number of steps counted. Click on the stick figure and look at the choices. Drag the  ``||moveSMART:show step count||`` block onto the screen and place it inside the mouth of the ``||Basic:forever||`` block.

```blocks
basic.forever(function () {
    moveSMART.showStepCount()
})
```

## Step 8

Look at the picture of the @boardname@ on the left. You should see it now show "0" on the display. This is because we haven't counted any steps yet. (You can delete the ``||moveSMART:show step count||`` block and the 0 will disappear. But be sure to put it back!)

## Step 9

Next, we need to figure out how to start counting steps. Look at the picture on the left. The @boardname@ has two buttons: A and B. When you press A, we'll start counting steps. When you press B, we'll stop counting steps.

## Step 10

Click on the pink target. Look for the ``||input:on button A pressed||`` block. Drag it to your workspace. Now look inside the moveSMART menu for the ``||moveSMART:start counting||`` block. Drag it inside the mouth of the `on button A pressed` block.


```blocks
input.onButtonPressed(Button.A, function () {
    moveSMART.startCounting()
})
```

## Step 11

Try this one on your own first. Tell the @boardname@ to stop counting steps when you press the B button. Hint: create another ``||input:on button A pressed||`` block. Then look for where it says "A" and change it to "B".

```blocks
input.onButtonPressed(Button.B, function () {
    moveSMART.stopCounting()
})
```

## Step 12

Did you get it? You should have dragged the ``||input:on button A pressed||`` block to your workspace and clicked the triangle next to A. Then choose B. Then drag the ``||moveSMART:stop counting||`` block inside the mouth of the ``||input:on button A pressed||`` block.

## Step 13
Look at the virtual @boardname@ again. To start counting, press the A button (the black circle next to the A in the traingle). To make a step, you need to shake the @boardname@. Since our @boardname@ isn't real, we just push the little white circle where it says "shake" to pretend to shake it. To stop counting, press the B button. 
