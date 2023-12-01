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

dOn your screen you see a simple physical activity sensor that can be 
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

If we are walking, we usually take more than 60 steps per minute. If we're running, we usually take more than 100 steps per minute.

To **compute** step rate, we need to change our timer's seconds into minutes. 

There are 60 seconds in a minute. If our timer has counted 120 seconds, that is the same as 120/60 = 2 minutes.

If our timer has counted 6 seconds, that is the same as 6/60 = 1/10 = 0.1 minutes.


## Step 7

Let's get programming! Create a new ``||variables:variable||``.

Select the ``||variables:Variables||`` tray and click "Make a variable". For the variable's name, type "minutes" in the box that appears. Press OK. 

Now you'll see new red blocks have been created that allow you to do things with your new ``||variables:minutes||`` variable.

## Step 8

When we stop the timer (by pushing button B), we need to turn the timer's seconds into minutes.


## Step 9

When we push button B in our program, the timer and step counter stop. Since our timer counted seconds, we want to calculate how many minutes the microbit was running.


Let's say we walked 10 steps in 5 seconds. Then we walked 10/5 = 2 steps per second. Since 
there are 60 seconds in a minute, we could walk 2 x 60 = 120 steps per minute.

So we take the number of steps our pedometer counts, divide it by the number of seconds our timer 
counts. This gives us how many steps we walk per second. To get how many steps we walk per *minute*, we just 
multiply by 60.

```blocks
input.onButtonPressed(Button.B, function () {
    moveSMART.stopCounting()
    moveSMART.stopTiming()
    minutes = timer / 60
}) 
```




## Step 10

Our next step is to compute our step rate. We will need to store the rate that we compute in another 
variable, which we'll have to make ourselves. 

Select the ``||variables:Variables||`` tray and click "Make a variable". For the variable's name, type 
"rate" in the box that appears. Press OK. 

Now you'll see new red blocks have been created that allow you to do things with your new 
``||variables:rate||`` variable.

## Step 11

To figure out the rate, we need to divide the number of steps by the number of seconds. Then we need 
to multiply by 60 to get the number of steps per minute.

Let's do this math when you press button B.

First, choose the ``||variables:set rate||`` block from the ``||variables:Variables||`` tray and place 
it in the ``||input:on button B pressed||`` block after ``||moveSMART:stop timing||``.

```blocks
input.onButtonPressed(Button.B, function () {
    moveSMART.stopCounting()
    moveSMART.stopTiming()
    rate = 0
}) 
```

## Step 12

In the ``||math: math||`` tray you will find blocks for subtraction and division.
You can use them to set ``||variables: rate||``'s value. 

First put a ``||math:*||`` block where the 0 is in ``||variables:set rate||``. 

Then put a ``||math:/||`` block where the first 0 is in the multiply block.

```blocks
input.onButtonPressed(Button.B, function () {
    moveSMART.stopCounting()
    moveSMART.stopTiming()
    rate = 0 / 0 * 0
})
```

## Step 13
Now we just need to fill in the variables for our calclation.

In the ``||moveSMART:moveSMART||`` tray, select ``||moveSMART:steps||`` and place it in the first 0 for 
the divide (the dividend).

Select ``||moveSMART:seconds||`` and place it in the second 0 (the divisor).

Finally, type 60 in place of the final 0 (as the multiplier).

```blocks   
input.onButtonPressed(Button.B, function () {
    moveSMART.stopCounting()
    moveSMART.stopTiming()  
    rate = moveSMART.steps() / moveSMART.seconds() * 60 
})
```

## Step 14

While we are exercising, we want our pedometer to show our step count. It already does this. When we are 
done exercising, we want our pedometer to show what our step rate was for our previous exercise. 

We need to update our ``||basic:forever||`` block to do this. First, we need a ``||Logic:if||`` block 
from the ``||Logic||`` tray. We want to put it inside the ``||basic:forever||`` block so that the 
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
