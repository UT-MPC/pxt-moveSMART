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

On your screen you see a simple physical activity sensor that can be 
controlled with a button. This 
combines what we learned with our timer and what we learned with our step count. Let's take a quick look 
at what this program does.


## Step 2

In the ``||Basic:forever||`` block, we make sure to show our step count all of the time. 

In ``||Input:on Button A pressed||``, we tell our microbit to start counting steps and start counting time. 

In ``||Input:on Button B pressed||``, we tell our microbit to stop counting steps and stop counting time.

## Step 3

In ``||Input:on shake||``, we add a step to our step count, but only IF we are supposed to be counting steps.

Today, we will add a new feature that calculates and displays the step **rate**. The step rate is the number of steps per minute.

## Step 4
  
In programming, ``||variables:Variables||`` help us keep track of **data** our program needs.

In this program, we already have four ``||variables:Variables||``. They are ``||moveSMART:counting||``, 
``||moveSMART:timing||``, ``||moveSMART:steps||``, and ``||moveSMART:seconds||``.

In our program, the ``||moveSMART:counting||`` and ``||moveSMART:timing||`` variables are 
always either **true** or **false** -- they are true when our pedometer is active (after we press button A) and 
false when our pedometer is off (after we press button B).

## Step 5

The ``||moveSMART:steps||`` variable keeps track of the number of steps we walk between button presses
and the ``||moveSMART:seconds||`` variable keeps track of the number of seconds that pass between button
presses.

You can see one of the variables in our program -- look at the ``||input:on shake||`` block. The 
dark blue hexagon says ``||moveSMART:counting||``. This is because, when the microbit is shaken, we 
first check to see if our pedometer is active. If it is active, we increase the step count.


## Step 6

Today, we will add new variables to help **compute** our step rate.

Our step rate is different for different activities.

If we are walking, we usually take more than 60 steps per minute. If we're running, we usually take more than 100 steps per minute.

## Step 7

To **compute** step rate, we need to change our timer's seconds into minutes. 

There are 60 seconds in a minute. If our timer has counted 120 seconds, that is the same as 120/60 = 2 minutes.

If our timer has counted 6 seconds, that is the same as 6/60 = 1/10 = 0.1 minutes.


## Step 8

Let's get programming! Create a new ``||variables:variable||``.

Select the ``||variables:Variables||`` tray and click "Make a variable". For the variable's name, type "minutes" in the box that appears. Press OK. 

Now you'll see new red blocks have been created that allow you to do things with your new ``||variables:minutes||`` variable.

## Step 9

When we push button B in our program, the timer and step counter stop. We want to calculate how many minutes the microbit was active.

At the bottom of the ``||Input:on Button B pressed||`` (after ``||moveSMART:stop timing||``), add a ``||variables:set minutes||`` block.

## Step 10

Next, we need make the ``||variables:minutes||`` variable have the value ``||moveSMART:timer||`` divided by 60. You can do this using the blocks inside of ``||math:math||``.

First put a ``||math:/||`` block where the 0 is in ``||variables:set minutes||``. 

From ``||moveSMART:moveSMART||``, select ``||moveSMART:seconds||`` and place it in the first 0 for the divide (the dividend).

Type 60 in the second 0 for the divide (the divisor).

```blocks
input.onButtonPressed(Button.B, function () {
    moveSMART.stopCounting()
    moveSMART.stopTiming()
    minutes = moveSMART.seconds()/60
}) 
```

## Step 11

Next we need to compute the our step **rate**. That's the number of steps we walk per minute.

First, let's create a new ``||variables:Variable||`` called ``||variables:rate||``.

Select the ``||variables:Variables||`` tray and click "Make a variable". For the variable's name, type "rate" in the box that appears. Press OK. 

## Step 12

Next, at the bottom of the ``||Input:on Button B pressed||`` (after ``||variables:set minutes||``), add a ``||variables:set rate||`` block.

The ``||variables:rate||`` variable should be ``||moveSMART:steps||`` divided by ``||variables:minutes||``.

Put a ``||math:/||`` block where the 0 is in ``||variables:set rate||``. 

From ``||moveSMART:moveSMART||``, select ``||moveSMART:steps||`` and place it in the first 0 for the divide (the dividend).

From ``||variables:Variables||``, select ``||variables:minutes||`` and place it in the second 0 for the divide (the divisor).


```blocks
input.onButtonPressed(Button.B, function () {
    moveSMART.stopCounting()
    moveSMART.stopTiming()
    minutes = moveSMART.seconds()/60
    rate = moveSMART.steps()/minutes
}) 
```


## Step 13

While we are exercising, we want our pedometer to show our step count. It already does this. 

When we are done exercising, we want our pedometer to show what our step rate was for our previous exercise. 

We need to update our ``||basic:forever||`` block. 

## Step 14

First, we need a ``||Logic:if||`` block from the ``||Logic||`` tray. We want to put it inside the ``||basic:forever||`` block so that the 
``||moveSMART:show steps||`` is inside of the if.

```blocks
basic.forever(function (){
    if(true) {
        moveSMART.showSteps()
    }
})
```

## Step 15

Instead of the ``||logic:true||`` value, we want to ``||moveSMART:show steps||`` whenever our pedometer 
is ``||moveSMART:counting||``. 

Replace ``||logic:true||`` with ``||moveSMART:counting||`` from the ``||moveSMART||`` tray.

```blocks
basic.forever(function (){
    if(moveSMART.counting()) {
        moveSMART.showSteps()
    }
})
```

## Step 16

Now we need to display ``||variables:rate||`` whenever we are *not* ``||moveSMART:counting||``. 

Touch the + sign at the bottom of the ``||logic:if||`` block. The word ``||logic:else||`` appears.

Tell your microbit to ``||basic:show||`` the ``||variables:rate||`` whenever it is not 
``||moveSMART:counting||``.

```blocks
basic.forever(function (){
    if(moveSMART.counting()) {
        moveSMART.showSteps()
    }
    else {
        basic.showNumber(rate)
    }
})
```

## Step 17

That's it! We're done. You can download your program to your microbit now.
