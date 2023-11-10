```template
basic.forever(function () {
	
})
```
# ProjectSMART Pedometer Tutorial -- Level 2
# Learning about sensors


## Step 1

In this tutorial, we will make a physical activity sensor. The @boardname@'s accelerometer senses when the @boardname@ moves. When the @boardname@ is attached to you (in your hand, in your pocket, or in your sock), the accelerometer is also sensing when **you** move! When the @boardname@ is near your ankle or foot, the accelerometer is basically counting how many steps you take.

So in this tutorial, we're going to make a pedometer -- that's a fancy word for a device that counts how many steps you take.

Click **Next** to to go to the next step.

## Step 2

First, let's show the number of steps on the @boardname@.

From the ``||moveSMART:moveSMART||`` menu, you will find the ``||moveSMART:show number of steps||`` block. Can you figure out where to put ``||moveSMART:show number of steps||`` so that your @boardname@ always shows your step count?

```block
basic.forever(function () {
    moveSMART.showNumberOfSteps()
})
```

## Step 3

Next, we need something to detect the number of steps you have walked.

For this, we can use the @boardname@'s accelerometer.

Click **Next** to to go to the next step.

## Step 4

The @boardname@ has a piece of code that can detect when the device is shaken (that is, when its acceleration changes on any of the three axes). Find the ``||input:on shake||`` block in the ``||input:Input||`` menu and drag it to your workspace.

## Step 5

The ``||input:on shake||`` block provides the program with a list of things to do when the accelerometer detects motion on the @boardname@.
When the @boardname@ is shaken, we want to increase the step count.

Can you figure out how to do that with the ``||input:on shake||`` block?
Hint: There's a block in the ``||MoveSMART||`` menu called ``||moveSMART:increase step count||``. This 
block increases the number shown on the @boardname@ by one.

```block
input.onGesture(Gesture.Shake, function () {
    moveSMART.increaseStepCount()
})
```

## Step 6

Look at the picture of the @boardname@ on the left.
You can pretend to shake it by clicking the white dot next to the word "SHAKE".

Try it. The step count increases by one.

Click **Next** to to go to the next step.

## Step 7

You just made a step counter! When the @boardname@ is close to your foot or ankle it will count the number of steps you take.

But you can also use it to measure your physical activity in general, just by having it in your hand or pocket.

Click **Next** to to go to the next step.

## Step 8

Flash your code to your @boardname@ and see how it works!
Press the ``|Download|`` on the bottom left of your screen.
You should see the lights on your real @boardname@ flashing.

Unplug the USB cable and make sure the batteries are plugged in. Then test it out!

Remember to head back to the tutorial webpage, and complete the rest of the activity.
