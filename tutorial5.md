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

# ProjectSMART Pedometer Tutorial -- Level 5
# Learning about Rate

## Step 1

On your screen you see the physical activity sensor we built in the last tutorial.
In this tutorial, we will add a new feature that calculates your step rate.

## Step 2

The ``||moveSMART:runningTimeSec||`` block shows the number of seconds elapsed since the @boardname@ was turned on.
So if we compare the ``||moveSMART:runningTimeSec||`` when button A is pressed and the ``||moveSMART:runningTimeSec||`` when button B is pressed,
we can know how much time passed between these two buttons are pushed.

## Step 3

We want to know what time button A is pushed, and what time button B is pushed.
So let's create two variables: ``||variables: startTime||`` and ``||variables: endTime||``.
When button A is pushed, we want to store the value of ``||moveSMART:runningTimeSec||`` in the variable
``||variables: startTime||``.

For example, if you press button A five seconds after turning on the @boardname@,
then ``||moveSMART:runningTimeSec||`` will be 5.

```blocks
input.onButtonPressed(Button.A, function () {
    counting = true
    startTime = moveSMART.runningTimeSec()
})
```

## Step 4

Next, when button B is pushed, we want to store the value of ``||input:runningTime (ms)||`` in the variable
``||variables: endTime||``.

For example, if you press button B nine seconds after turning on the @boardname@,
then ``||moveSMART:runningTimeSec||`` will be 9.

```blocks
input.onButtonPressed(Button.B, function () {
    counting = false
    endTime = input.runningTime()
})
```

## Step 5

Next, let's get the number of seconds between pressing button A and button B.
How do we get the number of seconds elapsed with your ``||variables: startTime||`` and ``||variables: endTime||`` variables?

We can get it by subtracting ``||variables: endTime||`` with ``||variables: startTime||``, 
and store it in a new variable called ``||variables: totalTime||``.

```blocks
totalTime = endTime - startTime
```
Ignore the ``||basic:on start||`` block.

## Step 6

Can you figure out where to put the ``||variables:set totalTime to endTime - startTime||`` block?

```blocks
input.onButtonPressed(Button.B, function () {
    counting = false
    endTime = moveSMART.runningTimeSec()
    totalTime = endTime - startTime
})
```

## Step 7

Now we have the number of seconds stored in ``||variables: totalTime||``.
We can divide the number of steps by ``||variables: totalTime||``, and we'll get the number of steps per second.
Then we can just multiply it by 60 to get the number of steps per minute, which is your step rate.

## Step 8

Let's do this math when you press button B.
First, create another variable, and call it ``||variables: rate||``.

In the ``||math: math||`` tray you will find blocks for subtraction and division.
You can use them to set ``||variables: rate||``'s value.

```blocks
input.onButtonPressed(Button.B, function () {
    counting = false
    endTime = moveSMART.runningTimeSec()
    totalTime = endTime - startTime
    rate = step / totalTime * 60
})
```

## Step 9

Let's also restart your step count when you press button B,
so that when you press on button A the next time, you can get a new step count and a new rate.

```blocks
input.onButtonPressed(Button.B, function () {
    counting = false
    endTime = moveSMART.runningTimeSec()
    totalTime = endTime - startTime
    rate = step / totalTime * 60
    step = 0
})
```

## Step 10

Finally, let's show the rate on the @boardname@.
So instead of showing the number of steps at all time, let's show ``||variables: rate||`` when we're not counting.

Do you remember what the ``||logic: if...then...else||`` block does?
Can you figure out what to do?

Hint: look in the ``||logic: logic||`` tray.

```block
basic.forever(function () {
    if (counting) {
        basic.showNumber(step)
    } else {
        basic.showNumber(rate)
    }
})
```

## Step 11

Now we have a physical activity sensor that also shows your step rate!
You can now flash your code into your real @boardname@.

Press the ``|Download|`` on the bottom left of your screen.
You should see the lights on your real @boardname@ flashing.