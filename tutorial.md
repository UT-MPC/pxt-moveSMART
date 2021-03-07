
# My Tutorial

## Step 1

Learn how to make a step counter that can transmit your step count via bluetooth.

## Step 2

Display current step count.
Place the ``||moveSMART:show step count||`` block in the ``||basic:forever||`` block
Any command in the ``||basic:forever||`` block will keep on executing.


## Step 3

We need to tell the microbit to start the step counter.
Place the ``||moveSMART:start counting||`` block in the ``||input:on button A pressed||`` block


## Step 4

Create a way to stop the step counter
Place the ``||moveSMART:stop counting||`` block in the ``||input:on button B pressed||`` block


## Step 5

Finally, send the step count
Place the ``||moveSMART:send||`` block in the ``||input:on button A+B pressed||`` block


## Step 6
Look at the virtual @boardname@ and try pushing the buttons

