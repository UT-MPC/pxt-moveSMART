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

On your screen, you see the physical activity monitor from the previous tutorial.

## Step 2

In the menu, you will see an icon with four red stripes. This is where you can create variables.
1. Click on the icon
2. Click on `Make a Variable`
3. In the box below `New variable name`, type **step**, and press Ok.

Several new blocks should appear.
You just created a variable called **step**!

## Step 3

Recall that when something is variable, that means it can change. The value stored in ``||variables:step||`` can change. That's why ``||variables:step||`` is called a variable.

## Step 4

We want the @boardname@ to show the value of ``||variables:step||``.
In the previous tutorial, we used ``||moveSMART:show number of steps||``.

Go to the next step to see how to do this with your ``||variables:step||`` variable instead.

## Step 5

1. Delete ``||moveSMART:show number of steps||`` from the ``||basic:forever||`` block.
(But make sure to not delete the ``||basic:forever||`` block! If you accidentally delete the ``||basic:forever||`` block, you can find it in the blue ``||basic:Basic||`` drawer.)
2. Find the ``||basic:show number 0||`` block in the blue ``||basic:Basic||`` drawer
3.  Drag the ``||basic:show number 0||`` block into the mouth of the ``||basic:forever||`` block.
4. Drag ``||variables: step||`` into the bubble that shows **0** in the ``||basic:show number 0||`` block.

Look at the @boardname@ on the left. Does a red 0 appear?

```blocks
basic.forever(function () {
    basic.showNumber(step)
})
```

## Step 6

Oh no, if you click on the white dot next to `SHAKE` on the @boardname@, the number doesn't change anymore.

Don't worry, we'll fix this in the next 2 steps.

## Step 7

First, delete the ``||moveSMART:increase step count||`` block from the ``||input: on shake||`` block. We will replace it with your ``||variables:step||`` variable in the next step.

If you accidentally delete the ``||input: on shake||`` block, you can find it in the pink ``||input:Input||`` drawer.

## Step 8

Next, let's tell the program to increase (change) the ``||variables:step||`` variable by 1 when you "shake" the @boardname@.

Look into the red ``||variables:Variables||`` drawer. Can you figure out what to put into the mouth of the ``||input: on shake||`` block?

```blocks
input.onGesture(Gesture.Shake, function () {
    step += 1
})
```

## Step 9

Look at the @boardname@ on the left again.
When you "shake" the @boardname@ (click on the white dot next to `SHAKE`), the number will change by 1.
Try changing the number in the bubble in ``||variables: change step by 1||`` into 2, or some other number.
Now, when you "shake" the @boardname@, the number will increase by another number.

Remember to change the number back to 1, though, so that it will only count once for every step you take!

## Step 10

The @boardname@ is now a pedometer-- a device that counts how many steps you take.
You can now flash your code into your real @boardname@!

Press the **Download** on the bottom left of your screen.
You should see the lights on your real @boardname@ flashing.