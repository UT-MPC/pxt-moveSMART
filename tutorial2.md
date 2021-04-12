```template
basic.forever(function () {
	
})
```
# ProjectSMART Pedometer Tutorial -- Level 2
# Learning about sensors


## Step 1

In this tutorial, we will learn how to make use of the sensors on the @boardname@ to make a *pedometer*.

## Step 2

In the previous tutorial, we made a pedometer that doesn't actually know how many steps you have walked. In this tutorial, we will learn how to let the @boardname@ detect how many steps you have walked and keep count. 

## Step 3

First, let's show the number of steps on the @boardname@.

From the **moveSMART** menu, you will find the ``||moveSMART:show number of steps||`` block. Can you figure out where to put ``||moveSMART:show number of steps||`` so that your step count shows up on the @boardname@?

```block
basic.forever(function () {
    moveSMART.showNumberOfSteps()
})
```

## Step 4

Next, we need something to detect the number of steps you have walked.

For this, we need a sensor called an accelerometer. Accelerometers are sensors that can detect movement and change in _velocity_ (you can think of it as _speed_ plus _direction_ for now) in all three axes.

Accelerometers are everywhere in our lives. When you tilt a smart phone, the screen rotates. That's because smart phones have accelerometers inside, which detects change in _speed_ or _direction_, or both.

## Step 5

The @boardname@ also has an **accelerometer**. It senses when the @boardname@ is shaken.
We can make use of the **accelerometer** with a block called ``||input:on shake||``, which is in the **input** menu. 

## Step 6

The ``||input:on shake||`` block provides the program with a list of things to do when the accelerometer detected some motion on the @boardname@.
What we want to do now is to provide the list of things to do, such that when the @boardname@ is moving, the step count can increase. Can you figure out how to do that with the ``||input:on shake||`` block?
Hint: There's a block in the **moveSMART** menu called ``||moveSMART:increase step count||``. What it does is it increases the number shown on the @boardname@ by one.

```block
input.onGesture(Gesture.Shake, function () {
    moveSMART.increaseStepCount()
})
```

## Step 7

Look at the picture of the @boardname@ on the left. When you click on **shake**, the number on the @boardname@ should increase by one.
You can try deleting the ``||input:on shake||`` block. Why does the number stay at 0 now even when you "shake" the @boardname@? 
Put the ``||input:on shake||`` block and the ``||moveSMART:increase step count||`` block back. Does the @boardname@ respond to your shakes now?

## Step 8

Look at the @boardname@ on the left again. When you take a step, the @boardname@ detects a shake, and the number will increase. It is now a pedometer-- a device that counts how many steps you take.
