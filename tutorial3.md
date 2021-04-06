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

In this tutorial, we will learn what **variables** are.

## Step 2

TODO: Brief explanation of variables, ...

## Step 3

On your screen, you see the pedometer from the previous tutorial.
In this tutorial, we will be making the same pedometer, but from scratch.

## Step 4

In the menu, you will see an icon with four red stripes. Click on it, and make a variable called **step** by clicking on *Make a Variable*.
In the pop up window that says *New variable name:* type in **step**.
Now 3 additional blocks will appear in the **Variables** drawer: ``||variables: step||``, ``||variables:set step to 0||``, and ``||variables:change step by 1||``.

## Step 5

Click on the blue icon, and find the ``||basic:on start||`` block. This block provides the program with a list of things to do when the program starts running.
In this case, we want **step** to be 0 when the program starts running.

```blocks
```

## Step 6

In the red icon, find the ``||variables: set step to 0||`` block. This is what we want to tell the program to do when the program starts running.
Can you figure out where ``||variables: set step to 0||`` should go?

```blocks
let step = 0
```

## Step 7

Now we want to show **step** on the @boardname@. Find the ``||basic:show number 0||`` block in the blue icon, and drag it onto the screen.
Next, drag ``||variable: step||`` into the bubble that shows **0** in the ``||basic:show number 0||`` block.

## Step 8

In the previous tutorial, we used ``||moveSMART:show number of steps||``.
Now, delete ``||moveSMART:show number of steps||`` from the ``||basic:forever||`` block, and replace it with what you created in the previous step.

```blocks
basic.forever(function () {
    basic.showNumber(step)
})
```

## Step 9

You can try changing the number in the ``||variables: set step to 0||`` block.
Does the number shown on the @boardname@ change? Why, or why not?

## Step 10

Try shaking the @boardname@ now. Why doesn't the number increase?
That is because the program is showing the **step** that you created, but we haven't told the program to increase **step** when you shake the @boardname@.
To do this, we have to replace the ``||moveSMART:increase step count||`` block in the ``||input: on shake||`` block with something else.

## Step 11

Did you figure out what to put into the mouth of the ``||input: on shake||`` block?
Hint: look into the red *Variables* drawer. What should the program do when the @boardname@ is shaken?

```blocks
input.onGesture(Gesture.Shake, function () {
    step += 1
})
```

## Step 12

Look at the @boardname@ on the left again.
When the @boardname@ detects a shake, and the number will increase by 1.
You can try changing the number in the bubble in ``||variable: change step by 1||`` into 2.
Now, when you shake the @boardname@, the number will increase by 2.
Remember to change the number back to 1, though, so that it will only count once for every step you take!

## Step 13

The @boardname@ is now a pedometer-- a device that counts how many steps you take.
