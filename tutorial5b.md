```template
let counting = false

basic.forever(function() {
    moveSMART.showNumberOfSteps()
})
input.onButtonPressed(Button.A, function () {
    moveSMART.startCounting()
    moveSMART.startTimer()
})
input.onButtonPressed(Button.B, function () {
    moveSMART.stopCounting()
    moveSMART.stopTimer()
})
input.onGesture(Gesture.Shake, function () {
    if (counting) {
        moveSMART.increaseStepCount()
    }
})
```

# ProjectSMART Pedometer Tutorial -- Counting and Timing
# Learning about Rate

## Step 1

On your screen you see a simple physical activity sensor that can be controlled with a button. This 
combines what we learned with our timer and what we learned with our step count. Let's take a quick look 
at what this program does.


## Step 2

In the ``||Basic:forever||`` block, we make sure to show our step count all of the time. In the 
``||Input:on Button A pressed||`` block, we tell our step counter to start counting steps and counting 
time. In the ``||Input:on Button B pressed||`` block, we tell our step counter to stop counting steps 
and stop counting time. And in the ``||Input:on shake||`` block, we add a step to our step count.

In this tutorial, we will add a new feature that calculates and displays your step rate.

## Step 3

In this tutorial, we rely on four ``||Variables||``. The ``||Variables:counting||`` and 
``||Variables:timing||`` variables are always either true or false -- they are true when our pedometer 
is active (after we press button A) and false when our pedometer is off (after we press button B).

The ``||Variables:steps||`` variable keeps track of the number of steps we walk between button presses 
and the ``||Variables:timer||`` variable keeps track of the number of seconds that pass between button 
presses.

## Step 4


The ``||moveSMART:runningTimeSec||`` block in the ``||moveSMART||`` tray lets us keep track of the 
number of seconds since the @boardname@ was turned on.

We can use the ``||moveSMART:runningTimeSec||`` to figure out how much time passes between when we start 
counting steps and when we stop counting steps. If we *subtract* the ``||moveSMART:runningTimeSec||`` 
when we push button A (the start time) from ``||moveSMART:runningTimeSec||`` when we push button B (the 
end time), the result will be the number of seconds that we were counting steps.

## Step 4

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

## Step 5

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

## Step 6

Next, let's get the number of seconds between pressing button A and button B.
How do we get the number of seconds elapsed with your ``||variables: startTime||`` and ``||variables: endTime||`` variables?

We can get it by subtracting ``||variables: endTime||`` with ``||variables: startTime||``, 
and store it in a new variable called ``||variables: totalTime||``.

```blocks
totalTime = endTime - startTime
```
Ignore the ``||basic:on start||`` block.

## Step 7

Can you figure out where to put the ``||variables:set totalTime to endTime - startTime||`` block?

```blocks
input.onButtonPressed(Button.B, function () {
    counting = false
    endTime = moveSMART.runningTimeSec()
    totalTime = endTime - startTime
})
```

## Step 8

Now we have the number of seconds stored in ``||variables: totalTime||``.
We can divide the number of steps by ``||variables: totalTime||``, and we'll get the number of steps per second.
Then we can just multiply it by 60 to get the number of steps per minute, which is your step rate.

## Step 9

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

## Step 10

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

## Step 11

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

## Step 12

Now we have a physical activity sensor that also shows your step rate!
You can now flash your code into your real @boardname@.

Press the ``|Download|`` on the bottom left of your screen.
You should see the lights on your real @boardname@ flashing.
