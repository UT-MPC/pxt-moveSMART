```template
basic.forever(function () {
	
})
```
# ProjectSMART Pedometer Tutorial -- Level 2
# Learning about sensors


## Step 1

In the previous tutorial, we made a timer. In this tutorial, we will learn how to let the @boardname@ detect how many steps you have walked and keep count. 

## Step 2

First, let's show the number of steps on the @boardname@.

From the **moveSMART** menu, you will find the ``||moveSMART:show number of steps||`` block. Can you figure out where to put ``||moveSMART:show number of steps||`` so that your @boardname@ always shows your step count?

```block
basic.forever(function () {
    moveSMART.showNumberOfSteps()
})
```

## Step 3

Next, we need something to detect the number of steps you have walked.

For this, we can use the @boardname@'s accelerometer.

## Step 4

The @boardname@ has a piece of code that can detect when the device is shaken (that is, when its acceleration changes on any of the three axes). Find the ``||input:on shake||`` block in the ``||input:Input||`` menu and drag it to your workspace.

## Step 5

The ``||input:on shake||`` block provides the program with a list of things to do when the accelerometer detects motion on the @boardname@.
When the @boardname@ is shaken, we want to increase the step count. Can you figure out how to do that with the ``||input:on shake||`` block?
Hint: There's a block in the **moveSMART** menu called ``||moveSMART:increase step count||``. This block increases the number shown on the @boardname@ by one.

```block
input.onGesture(Gesture.Shake, function () {
    moveSMART.increaseStepCount()
})
```

## Step 6

Look at the picture of the @boardname@ on the left.
You can pretend to shake it by clicking the white dot next to the word "SHAKE".

Try it. The step count increases by one.

You can try deleting the ``||input:on shake||`` block. Why does the number stay at 0 now even when you "shake" the @boardname@? 
Put the ``||input:on shake||`` block and the ``||moveSMART:increase step count||`` block back. Does the @boardname@ respond to your shakes now?

## Step 7

Flash your code to your @boardname@ and see how it works!
Press the **Download** on the bottom left of your screen.
You should see the lights on your real @boardname@ flashing.

Remember to head back to the tutorial webpage, and complete the rest of the activity.