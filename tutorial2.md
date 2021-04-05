```template
basic.forever(function () {
	
})
```
# ProjectSMART Pedometer Tutorial -- Level 2
# Learning about sensors


## Step 1

In this tutorial, we will learn how to make use of the sensors on the @boardname@ to make a *pedometer*.

## Step 2

TODO: In the previous tutorial, ...

## Step 3

From the **moveSMART** menu, you will find the ``||moveSMART:show number of steps||`` block. Can you figure out where to put ``||moveSMART:show number of steps||`` so that your step count shows up on the @boardname@?

```block
basic.forever(function () {
    moveSMART.showNumberOfSteps()
})
```

## Step 4

TODO: something about sensors, accelerometers, ...

## Step 5

There's a block called ``||input:on shake||`` in the **input** menu. The @boardname@ has an inbuilt tool called an **accelerometer**. Accelerometers are sensors that can detect change in _velocity_ (you can think of it as _speed_ for now) in all three axes.
TODO: write about screen monitor rotation detection

## Step 6

Since the @boardname@ can detect motion with an accelerometer, we can use this to create our pedometer. Specifically, the ``||input:on shake||`` block provides the program with a list of things to do when the accelerometer detected some motion on the @boardname@, and that the program should do. What we want to do now is to provide the list. Can you guess what should be on the list now?
Hint: There's a block in the **moveSMART** menu called ``||moveSMART:increase step count||``. What it does is it increases the number shown on the @boardname@ by one.

```block
input.onGesture(Gesture.Shake, function () {
    moveSMART.increaseStepCount()
})
```

## Step 7

Look at the picture of the @boardname@ on the left. When you click on **shake**, the number on the @boardname@ should increase by one.
You can try deleting the ``||input:on shake||`` block. Why doesn't anything happen now when you click **shake**? What happens if you put the ``||input:on shake||`` block and the ``||moveSMART:increase step count||`` block back?

## Step 8

Look at the @boardname@ on the left again. When you take a step, the @boardname@ detects a shake, and the number will increase. It is now a pedometer-- a device that counts how many steps you take.
