```template
basic.forever(function() {
    moveSMART.showNumberOfSteps()
})
input.onButtonPressed(Button.A, function () {
    moveSMART.startCounting()
    moveSMART.startTiming()
})
input.onButtonPressed(Button.B, function () {
    moveSMART.stopCounting()
    moveSMART.stopTiming()
})
input.onGesture(Gesture.Shake, function () {
    if (moveSMART.counting()) {
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

Our step rate is the number of steps we take per minute. If we are walking, we usually take  more than 
60 steps per minute. If we're running, we usually take more than 100 steps per minute.

To *compute* our step rate, we need to convert our timer's seconds into minutes (or fractions of a 
minute). Let's say we walked 10 steps in 5 seconds. Then we walked 10/5 = 2 steps per second. Since 
there are 60 seconds in a minute, we could walk 2 x 60 = 120 steps per minute.

So we take the number of steps our pedometer counts, divide it by the number of second our timer counts. 
This gives us how many steps we walk per second. To get how many steps we walk per *minute*, we just 
multiply by 60.


## Step 4
  
In programming, ``||Variables||`` help us keep track of data our program needs to run.

In this tutorial, we use on four ``||Variables||``. The ``||moveSMART:counting||`` and
``||moveSMART:timing||`` variables are always either true or false -- they are true when our pedometer
is active (after we press button A) and false when our pedometer is off (after we press button B).

The ``||moveSMART:steps||`` variable keeps track of the number of steps we walk between button presses
and the ``||moveSMART:timer||`` variable keeps track of the number of seconds that pass between button
presses.

You can already see one of the variables in our program -- look at the ``||Input:on shake||`` block. The 
purple oval says ``||moveSMART:counting||``. This is because, when the microbit is shaken, we first 
check to see if our pedometer is active. Only if it is active, we increase the step count.


## Step 5

When we press button B to stop our pedometer, we want to compute our step rate and show it on the 
microbit. We'll need a ``||Basic:show number||`` block at the end of the ``||Input:on button B 
pressed||`` block (after the ``||moveSMART:stop timing||``). 

```blocks
input.onButtonPressed(Button.B, function () {
    moveSMART.stopCounting()
    moveSMART.stoptiming()
    Basic.showNumber(0)
})
```


## Step 6

Now we need to divide the number of steps by the number of seconds then multiply by 60 to get the number 
of steps per minute.

Let's do this math when you press button B.
First, we will create a new ``||Variable||`` and call it ``||Variables: rate||``. To do this, select the 
``||Variables||`` tray on the left and choose *Make a variable*. In the box that appears, for the new 
variable's name, type "rate". The select "OK".

## Step 7

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
