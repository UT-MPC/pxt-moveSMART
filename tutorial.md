
# My Tutorial

## Step 1

In this tutorial, we will learn how to use MakeCode and the microbit to make a pedometer -- a device that counts how many steps you take.

## Step 2

On your screen, you see two blue *blocks*. They say `on start` and `forever`.

## Step 3
Display current step count.
Place the ``||moveSMART:show step count||`` block in the ``||basic:forever||`` block.

Any command in the ``||basic:forever||`` block will keep on executing.

```blocks
basic.forever(function () {
    moveSMART.showStepCount()
})
```

## Step 4

We need to tell the microbit to start the step counter.
Place the ``||moveSMART:start counting||`` block in the ``||input:on button A pressed||`` block.

```blocks
input.onButtonPressed(Button.A, function () {
    moveSMART.startCounting()
})
```

## Step 5

Create a way to stop the step counter
Place the ``||moveSMART:stop counting||`` block in the ``||input:on button B pressed||`` block.

```blocks
input.onButtonPressed(Button.B, function () {
    moveSMART.stopCounting()
})
```

## Step 6
Look at the virtual @boardname@ and try pushing the buttons
