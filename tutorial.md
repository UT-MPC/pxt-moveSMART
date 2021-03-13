
# My Tutorial

## Step 1

Learn how to make a step counter.

## Step 2
Display current step count.
Place the ``||moveSMART:show step count||`` block in the ``||basic:forever||`` block.

Any command in the ``||basic:forever||`` block will keep on executing.

```blocks
basic.forever(function () {
    moveSMART.showStepCount()
})
```

## Step 3

We need to tell the microbit to start the step counter.
Place the ``||moveSMART:start counting||`` block in the ``||input:on button A pressed||`` block.

```blocks
input.onButtonPressed(Button.A, function () {
    moveSMART.startCounting()
})
```

## Step 4

Create a way to stop the step counter
Place the ``||moveSMART:stop counting||`` block in the ``||input:on button B pressed||`` block.

```blocks
input.onButtonPressed(Button.B, function () {
    moveSMART.stopCounting()
})
```

## Step 5
Look at the virtual @boardname@ and try pushing the buttons
