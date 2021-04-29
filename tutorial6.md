```template
let counting = false
let startTime = 0
let endTime = 0
let rate = 0
let step = 0
input.onButtonPressed(Button.A, function () {
    counting = true
    startTime = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    counting = false
    endTime = input.runningTime()
    rate = (step / ((endTime - startTime) / 1000)) * 60
    step = 0
})
input.onGesture(Gesture.Shake, function () {
    if (counting) {
        step += 1
    }
})
basic.forever(function () {
    if (counting) {
        basic.showNumber(step)
    } else {
        basic.showNumber(rate)
    }
})

```

# ProjectSMART Pedometer Tutorial -- Level 6
# Learning about Control Flow -- If, Else If, Else

## Step 1

In this tutorial, we will learn how to map your step rate to level of activeness.

## Step 2

In the previous tutorial, we calculated step rate. Now, we're going to map it into 3 different levels of activeness -- very active, active, and less active.

## Step 3

We went over ``||logic: if||`` and ``||logic: else||`` briefly in the previous tutorial.
In this tutorial, we're going to learn about ``||logic: else if||``.

## Step 4

You can find the ``||logic: if...then...else if... else||`` block in the ``||logic: logic||`` tray.
Let's break down ``||logic: if...then...else if... else||`` into three components: ``||logic: if||``, ``||logic: else if||``, and ``||logic: else||``.

## Step 5

``||logic: if||`` means that if **something** is true (let's call this **something** *condition 1*), then the program will execute whatever code that follows,
and will ignore ``||logic: else if||`` and ``||logic: else||``.

However, if *condition 1* is false, then ``||logic: else if||`` tells the program to check if **something else** is true (let's call **something else** *condition 2*).
If *condition 2* is true, then the program will execute the code that follows.

In this case, if *condition 2* is false, then the program will look for the next ``||logic: else if||``.
(We can have as many ``||logic: else if||``s as we like!)
If there are no more ``||logic: else if||``s, then the program will look for ``||logic: else||``.

``||logic: else||`` is executed if none of the conditions in the ``||logic: if||`` and ``||logic: else if||`` are met.

## Step 6

How do we use ``||logic: if...then...else if... else||`` to transform the number of steps to the level of activeness?
First, we have 3 levels of activeness:

**1** is less active, **2** is active, and **3** is very active.

Make a variable called ``||variables: activeness||`` to store the level of activeness.

If the number of steps per minute is above 60 but less than 120, then you're active.

If it's over 120, then you're very active.

If the number of steps per minute less than 60, then you're less active.

## Step 7

Let's take a closer look.

If the number of steps per minute less than 60, then you're less active.
That is, ``||logic: if||`` ``||variables:rate||`` is less than 60, then ``||variables: activeness||`` should be 1.

Otherwise, if the number of steps per minute is less than 120, then you're active.
That is, ``||logic: else if||`` ``||variables:rate||`` is less than 120, then ``||variables: activeness||`` should be 2.

If the rate is 120 or more, then you're *very* active.
In other words, ``||logic: else||``, ``||variables: activeness||`` is 3.

Drag the ``||logic: if...then...else||`` block onto the work space.
Click on the plus sign on the bottom left of the block to get the ``||logic: else if||``.
You can click on the plus sign several times to get several ``||logic: else if||``s,
but in this tutorial we only need one, so click on the minus sign on the right to delete any extra ``||logic: else if||``s.

```blocks
input.onButtonPressed(Button.B, function () {
    counting = false
    endTime = input.runningTime()
    rate = (step / ((endTime - startTime) / 1000)) * 60
    basic.showNumber(rate)
    if (rate < 60) {
        activeness = 1
    } else if (rate < 120) {
        activeness = 2
    } else {
        activeness = 3
    }
    step = 0
})
```
You can adjust the numbers yourself! It doesn't have to be 60 and 120; you can use any *reasonable* numbers you like.

## Step 8

Now, instead of showing the ``||variables: rate||`` on the screen, we can show ``||variables: activeness||`` instead.
This makes the pedometer much cleaner.

```blocks
basic.forever(function () {
    if (counting) {
        basic.showNumber(step)
    } else {
        basic.showNumber(activeness)
    }
})
```

