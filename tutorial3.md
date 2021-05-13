```template
input.onGesture(Gesture.Shake, function () {
    moveSMART.increaseStepCount()
})
basic.forever(function () {
    moveSMART.showNumberOfSteps()
})
```
# ProjectSMART Pedometer Tutorial -- Level 3
# Learning about Variables


## Step 1

Here is the physical activity monitor you already wrote.

## Step 2

In the menu, find the icon with four red stripes. This is where you can create variables.
1. Click on the icon
2. Click on `Make a Variable`
3. In the box below `New variable name`, type **step**, and press Ok.

Several new blocks should appear.
You just created a variable with the **name** *step*!

## Step 3

The **value** stored in ``||variables:step||`` starts at 0, but it can change. That's why ``||variables:step||`` is called a variable.

## Step 4

In the previous tutorial, we used the ``||moveSMART:MoveSmart||`` blocks to measure our physical activity. Now we're going to use the ``||variables:step||`` variable.

Delete ``||moveSMART:show number of steps||`` from the ``||basic:forever||`` block. (But don't delete the ``||basic:forever||`` block! If you accidentally do, you can find it again in the blue ``||basic:Basic||`` drawer.)

Delete ``||moveSMART:increase step count||`` from the ``||input: on shake||`` block. (But don't delete ``||input: on shake||``! If you accidentally do, you can find it again in the blue ``||basic:Basic||`` drawer.)

## Step 5

Find the ``||basic:show number 0||`` block in the blue ``||basic:Basic||`` drawer. Drag the ``||basic:show number 0||`` into the mouth of ``||basic:forever||``. Drag ``||variables: step||`` from the ``||variables:Variables]]`` drawer into the bubble that shows **0** in the ``||basic:show number 0||`` block.

Look at the @boardname@ on the left. Does a red 0 appear?

```blocks
basic.forever(function () {
    basic.showNumber(step)
})
```

## Step 6

If you test your program now by clicking on the white dot next to `SHAKE` on the @boardname@, the number doesn't change. Why?

Because we don't ever change the **value** of the *step* variable.

We'll fix this next.


## Step 7

We need to tell the program to increase (change) the ``||variables:step||`` variable by 1 when you "shake" the @boardname@.

Look into the red ``||variables:Variables||`` drawer. Can you figure out what to put into the mouth of the ``||input: on shake||`` block?

```blocks
input.onGesture(Gesture.Shake, function () {
    step += 1
})
```

## Step 8

Now when you click on the white dot next to `SHAKE` on the pretend @boardname@, the number will change by 1.
Try changing the number in the bubble in ``||variables: change step by 1||`` into a different number.
Now, when you "shake" the @boardname@, the number will increase by that value.

Remember to change the number back to 1, though, so that it will only count once for every step you take!

## Step 9

The @boardname@ is now a pedometer-- a device that counts how many steps you take.
You can now flash your code into your real @boardname@!

Press the **Download** on the bottom left of your screen.
You should see the lights on your real @boardname@ flashing.
