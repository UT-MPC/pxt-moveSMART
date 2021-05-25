```template
let counting = false
let startTime = 0
let endTime = 0
let totalTime = 0
let rate = 0
let step = 0
let activeness = 0
input.onButtonPressed(Button.A, function () {
    counting = true
    startTime = moveSMART.runningTimeSec()
})
input.onButtonPressed(Button.B, function () {
    counting = false
    endTime = moveSMART.runningTimeSec()
    totalTime = endTime - startTime
    rate = step / totalTime * 60
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

In order to map step rate into 3 different levels of activeness -- very active, active, and less active --
let's use numbers to represent the level of activeness:
**1** is less active, **2** is active, and **3** is very active.

First, make a variable called ``||variables: activeness||`` to store the level of activeness.

## Step 2

If the number of steps per minute is above 60 but less than 120, then you're active.
If it's over 120, then you're very active.
If the number of steps per minute less than 60, then you're less active.

Look in the ``||logic: Logic||`` drawer.
Drag the ``||logic: if...then...else||`` block onto the work space.

Can you figure out how to use your ``||variables: activeness||`` variable and the ``||logic: if...then...else||`` block to transform the number of steps to the level of activeness?

## Step 3

Did you get it?
If you didn't, click on the plus sign on the bottom left of the block to get the ``||logic: else if||``.

Next, drag the ``||variables: rate||`` variable into the bubbles where your *conditions* should be.

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

## Step 5

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
