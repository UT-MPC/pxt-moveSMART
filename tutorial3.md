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

In this tutorial, we will learn what **variables** are, and learn how to use them in a program.
On your screen, you see the pedometer from the previous tutorial.
We will be making the same pedometer with **variables** instead of with the help of the moveSMART blocks.
You can delete the ``||moveSMART:moveSMART||`` blocks (just the dark blue moveSMART blocks!) right now.

```blocks
input.onGesture(Gesture.Shake, function () {
})
basic.forever(function () {
})
```

## Step 2

Variables are objects that have a name and a value.
When something is variable, it means that it can change.

For example, let's say you are 9 years old right now. So we can create a variable called _age_, and set its value to 9. Then next year, we can change the value of variable _age_ to 10.

## Step 3

The value of a variable doesn't have to be a number. It could be practically any type, such as a string (word), or a Boolean (a fancy word for True/False). For example, a variable called _President_ could have value _"Biden"_, and a variable called _skyIsGreen_ could have value _False_.

## Step 4

In the menu, you will see an icon with four red stripes. This is where you can create variables.
Click on the icon, then click on `Make a Variable`, and create a variable called **step**.

Several new blocks should appear.

## Step 5

Recall that when something is variable, that means it can change.
That's why ``||variables:step||`` is called a variable, because it can change to store different values.

## Step 6

Now that we have our variable ``||variables:step||``, we want to give it a value.

Find the ``||basic:on start||`` block inside the ``||basic:Basic||`` drawer.
The ``||basic:on start||`` block provides the program with a list of things to do when the program starts running.
To create a pedometer, we want ``||variables: step||`` to be 0 when the program starts running because it should start counting at 0. Can you figure out what to put into the mouth of ``||basic:on start||``?

Hint: Find a block in the ``||variables:Variables||`` drawer.
```blocks
let step=0
```

## Step 7

Now we want to show **step** on the @boardname@.
In the previous tutorial, we used ``||moveSMART:show number of steps||``.

In this tutorial, we will do this without the help of ``||moveSMART:moveSMART||`` blocks.
Delete ``||moveSMART:show number of steps||`` from the ``||basic:forever||`` block.
But make sure to not delete the ``||basic:forever||`` block! If you accidentally delete the ``||basic:forever||`` block, you can find it in the blue ``||basic:Basic||`` drawer.

## Step 8

Find the ``||basic:show number 0||`` block in the blue icon, and drag it into the mouth of the ``||basic:forever||`` block.
Next, drag ``||variables: step||`` into the bubble that shows **0** in the ``||basic:show number 0||`` block.

```blocks
basic.forever(function () {
    basic.showNumber(step)
})
```

## Step 9

You can try changing the number in the ``||variables: set step to 0||`` block.
Does the number shown on the @boardname@ change? Why, or why not?

Make sure to change the number back to 0!

## Step 10

Next, we want the number on the @boardname@ to increase when we shake the @boardname@. We did this in the previous tutorial with the ``||moveSMART:increase step count||`` and the ``||input: on shake||`` block.
In this tutorial, we want to achieve this without the ``||moveSMART:moveSMART||`` blocks. 

## Step 11

We have to tell the program to increase **step** when you shake the @boardname@.

Hint: replace the ``||moveSMART:increase step count||`` block in the ``||input: on shake||`` block with something else.

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
You can try changing the number in the bubble in ``||variables: change step by 1||`` into 2.
Now, when you shake the @boardname@, the number will increase by 2.
Remember to change the number back to 1, though, so that it will only count once for every step you take!

## Step 14

The @boardname@ is now a pedometer-- a device that counts how many steps you take.
