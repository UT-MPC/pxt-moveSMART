```template
let counting = false
let step = 0
input.onButtonPressed(Button.A, function () {
    counting = true
})
input.onButtonPressed(Button.B, function () {
    counting = false
})
input.onGesture(Gesture.Shake, function () {
    if (counting) {
        step += 1
    }
})
basic.forever(function () {
    basic.showNumber(step)
})
```

# ProjectSMART Pedometer Tutorial -- Level 6
# Learning about Serial

## Step 1

In this tutorial, we will learn how to send your level of activeness from the @boardname@ to another computer via **serial communication**.

## Step 2

Serial communication is a way of sending data.
You don't need to know about the specifics of serial communication for now.

## Step 3

On your screen you see the pedometer we built in the last tutorial.
In this tutorial, we want to add another functionality:
when buttons A and B are pressed at the same time, we want the @boardname@ to send the level of your activeness through serial.
First, let's create the ``||input: on button A+B pressed||`` by dragging the ``||input:on button A pressed||`` block to your workspace, and change A to A+B.

## Step 4

Next, we want to transform the number of steps to the level of activeness.
We learned about ``||logic:if...then||`` last time. This time, we're going to learn about ``||logic: if...then...else if... else||``.
Let's break down ``||logic: if...then...else if... else||`` into three components: ``||logic: if||``, ``||logic: else if||``, and ``||logic: else||``.

## Step 5

``||logic: if||`` means that if something is true (let's call it *condition 1*), then the program will execute whatever code that follows,
and will ignore ``||logic: else if||`` and ``||logic: else||``.

However, if *condition 1* is false, then ``||logic: else if||`` tells the program to check if something else is true (let's call it *condition 2*).
If *condition 2* is true, then the program will execute the code that follows.

We can have as many ``||logic: else if||``s as we like.
In this case, if *condition 2* is false, then the program will look for the next ``||logic: else if||``.
If there are no more ``||logic: else if||``s, then the program will look for ``||logic: else||``.

``||logic: else||`` is executed if none of the conditions in the ``||logic: if||`` and ``||logic: else if||`` are met.

## Step 6

How do we use ``||logic: if...then...else if... else||`` to transform the number of steps to the level of activeness?
First, let's say we have 3 levels of activeness:

**1** is less active, **2** is active, and **3** is very active.

Make a variable called ``||variables: activeness||`` to store the level of activeness.

Let's say if you got less than 10 steps, you're less active.
If you're between 11 to 100, then you're active,
and if you got 100 steps or more, you're very active.

So,
``||logic: if||`` you achieved less than 10 steps, then you are less active.


## Step 7

Otherwise, if you achieved less than 100 steps, meaning you got more than 10 steps but did not go over 100 steps, you are active.

In block language, you can say ``||logic: else if||`` ``||variables: step||`` is greater than 100, then you're active.

``||logic: else||``, you're very active, because you achieved 100 steps or more.

```blocks
input.onButtonPressed(Button.AB, function () {
    if (step < 10) {
        activeness = 1
    } else if (step < 100) {
        activeness = 2
    } else {
        activeness = 3
    }
})
```
You can adjust the numbers yourself! It doesn't have to be 10 and 100; you can use any numbers you like.

## Step 8

Now that we have calculated the level of activeness, we will send ``||variables: activeness||`` via ``||serial:serial||``.
Click on **Advanced** and find the ``||serial:serial||`` tray.

Since ``||variables: activeness||`` is a number, we'll use ``||serial: serial writeNumber||``.

```blocks
serial.writeNumber(activeness)
```
Put this into the ``||Input: on button A+B pressed||`` block.

## Step 9

After sending the level of activeness, remember to reset ``||variables: step||``.

```blocks
input.onButtonPressed(Button.AB, function () {
    if (step < 10) {
        activeness = 1
    } else if (step < 100) {
        activeness = 2
    } else {
        activeness = 3
    }
    serial.writeNumber(activeness)
    step = 0
})
```
