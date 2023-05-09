```template
let counting = false
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
    basic.showNumber(moveSMART.steps() + moveSMART.timer())
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

In this program, we already have four ``||Variables||``. The ``||moveSMART:counting||`` and
``||moveSMART:timing||`` variables are always either true or false -- they are true when our pedometer
is active (after we press button A) and false when our pedometer is off (after we press button B).

The ``||moveSMART:steps||`` variable keeps track of the number of steps we walk between button presses
and the ``||moveSMART:timer||`` variable keeps track of the number of seconds that pass between button
presses.

You can see one of the variables in our program -- look at the ``||Input:on shake||`` block. The 
purple oval says ``||moveSMART:counting||``. This is because, when the microbit is shaken, we first 
check to see if our pedometer is active. Only if it is active, we increase the step count.


## Step 5

Our next step is to compute our step rate. We will need to store the rate that we compute in another 
variable, which we'll have to make ourselves. Select the ``||Variables||`` tray and click "Make a 
variable". For the variable's name, type "rate" in the box that appears. Press OK. Now you'll see new 
red blocks have been created that allow you to do things with your new ``||Variables:rate||`` variable.

## Step 6

Now to figure out the rate, we need to divide the number of steps by the number of seconds. Then we need 
to multiply by 60 to get the number of steps per minute.

Let's do this math when you press button B.

In the ``||math: math||`` tray you will find blocks for subtraction and division.
You can use them to set ``||variables: rate||``'s value.

```blocks
input.onButtonPressed(Button.B, function () {
    moveSMART.stopCounting()
    moveSMART.stopTiming()
    rate = moveSMART.steps() / moveSMART.timer() * 60
})
```

## Step 7

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
