```template
input.onGesture(Gesture.Shake, function () {
    moveSMART.increaseStepCount()
})
basic.forever(function () {
    moveSMART.showNumberOfSteps()
})
let step = 0
```
# ProjectSMART Pedometer Tutorial -- Level 3
# Learning about Variables


## Step 1

In this tutorial, we will learn what **variables** are, and learn how to use them in a program.
On your screen, you see the pedometer from the previous tutorial.
We will be making the same pedometer with **variables** instead of with the help of the moveSMART blocks.

## Step 2

Variables are objects that have a name and a value. For example, let's say you are 9 years old right now. So we can create a variable called _age_, and set its value to 9. Then next year, we can change the value of variable _age_ to 10.

## Step 3

The value of a variable doesn't have to be a number. It could be practically any type, such as a string (word), or a Boolean (a fancy word for True/False). For example, a variable called _President_ could have value _"Biden"_, and a variable called _skyIsGreen_ could have value _False_.

## Step 4

In the menu, you will see an icon with four red stripes. This is where you can create variables.
For this tutorial, we have created a variable called **step** for you already, but feel free to create your own.

## Step 5

On the screen, you can see the ``||basic:on start||`` block with the ``||variables: set step to 0||`` block inside.
This ``||basic:on start||`` block provides the program with a list of things to do when the program starts running.
To create a pedometer, we want **step** to be 0 when the program starts running because it should start counting at 0.

## Step 6

You can delete the ``||variables: set step to 0||`` block from the ``||basic:on start||`` block for now (but be sure to add it back later!).
Try replacing it with something else for now. For example, if you place ``||basic:show number 10||`` in ``||basic:on start||``,
which number(s) show up on the screen? Why?
Make sure to add the ``||variables: set step to 0||`` block back to the ``||basic:on start||`` block before you proceed!

```blocks
let step=0
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

## Step 11

That is because the program is showing the **step** that you created, but we haven't told the program to increase **step** when you shake the @boardname@.
To do this, we have to replace the ``||moveSMART:increase step count||`` block in the ``||input: on shake||`` block with something else.

## Step 12

Did you figure out what to put into the mouth of the ``||input: on shake||`` block?
Hint: look into the red *Variables* drawer. What should the program do when the @boardname@ is shaken?

```blocks
input.onGesture(Gesture.Shake, function () {
    step += 1
})
```

## Step 13

Look at the @boardname@ on the left again.
When the @boardname@ detects a shake, and the number will increase by 1.
You can try changing the number in the bubble in ``||variable: change step by 1||`` into 2.
Now, when you shake the @boardname@, the number will increase by 2.
Remember to change the number back to 1, though, so that it will only count once for every step you take!

## Step 14

The @boardname@ is now a pedometer-- a device that counts how many steps you take.

