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

In this tutorial, we will learn how to use **variables** in a program.
On your screen, you see the pedometer from the previous tutorial.

We will be making the same pedometer with **variables** instead of with the help of the moveSMART blocks.

## Step 2

In the menu, you will see an icon with four red stripes. This is where you can create variables.
Click on the icon, then click on `Make a Variable`, and create a variable called **step**.

Several new blocks should appear.

## Step 3

Recall that when something is variable, that means it can change.
That's why ``||variables:step||`` is called a variable, because it can change to store different values.

## Step 4

Now that we have our variable ``||variables:step||``, we want to show **step** on the @boardname@.
In the previous tutorial, we used ``||moveSMART:show number of steps||``.

In this tutorial, we will do this without the help of ``||moveSMART:moveSMART||`` blocks.
Delete ``||moveSMART:show number of steps||`` from the ``||basic:forever||`` block.
But make sure to not delete the ``||basic:forever||`` block! If you accidentally delete the ``||basic:forever||`` block, you can find it in the blue ``||basic:Basic||`` drawer.

## Step 5

Find the ``||basic:show number 0||`` block in the blue icon, and drag it into the mouth of the ``||basic:forever||`` block.
Next, drag ``||variables: step||`` into the bubble that shows **0** in the ``||basic:show number 0||`` block.

Look at the @boardname@ on the left. Does a red 0 appear?

```blocks
basic.forever(function () {
    basic.showNumber(step)
})
```

## Step 6

Next, we want the number on the @boardname@ to increase when we shake the @boardname@. We did this in the previous tutorial with the ``||moveSMART:increase step count||`` and the ``||input: on shake||`` block.
In this tutorial, we want to achieve this without the ``||moveSMART:moveSMART||`` blocks. 

## Step 7

We have to tell the program to increase **step** when you shake the @boardname@.

Hint: replace the ``||moveSMART:increase step count||`` block in the ``||input: on shake||`` block with something else.

## Step 8

Did you figure out what to put into the mouth of the ``||input: on shake||`` block?
Hint: look into the red *Variables* drawer. What should the program do when the @boardname@ is shaken?

```blocks
input.onGesture(Gesture.Shake, function () {
    step += 1
})
```

## Step 9

Look at the @boardname@ on the left again.
When the @boardname@ detects a shake, and the number will increase by 1.
You can try changing the number in the bubble in ``||variables: change step by 1||`` into 2.
Now, when you shake the @boardname@, the number will increase by 2.
Remember to change the number back to 1, though, so that it will only count once for every step you take!

## Step 10

The @boardname@ is now a pedometer-- a device that counts how many steps you take.
