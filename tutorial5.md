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

In this tutorial, we will learn how to calculate your step rate.

## Step 2

Step rate is the number of steps per minute. Mathematically speaking, this is step count divided by the time elapsed.

Why should we care about this?

Let's take a look at an example: suppose you achieved 100 steps in a minute.
Your friend also achieved 100 steps, but they did it over the course of an hour.
Is your friend as active as you are?

## Step 3

On your screen you see the pedometer we built in the last tutorial.
In this tutorial, we want to create a timer that can help us calculate your step rate.

How this works is that when button A is pressed, we will start counting steps, and also start the timer.
When button B is pressed, we will stop the timer and stop counting steps.
Then we take the number of steps, and divide it by the number of minutes elapsed.

## Step 4

The ``||input:runningTime (ms)||`` block shows the number of milliseconds elapsed since power on.
So if we compare the ``||input:runningTime (ms)||`` when button A is pressed and the ``||input:runningTime (ms)||`` when button B is pressed,
we can know how much time passed between these two buttons are pushed.

Note: 1 second is 1000 milliseconds.

## Step 5

We want to know when button A is pushed, and when button B is pushed.
So let's create two variables: ``||variables: startTime||`` and ``||variables: endTime||``.
When button A is pushed, we want to store the value of ``||input:runningTime (ms)||`` in the variable
``||variables: startTime||``.

For example, if you press button A five seconds (5000 milliseconds) after turning on the @boardname@,
then ``||input:runningTime (ms)||`` will be 5000.

```blocks
input.onButtonPressed(Button.A, function () {
    counting = true
    startTime = input.runningTime()
})
```

## Step 6

Next, when button B is pushed, we want to store the value of ``||input:runningTime (ms)||`` in the variable
``||variables: endTime||``.

For example, if you press button B nine seconds (9000 milliseconds) after turning on the @boardname@,
then ``||input:runningTime (ms)||`` will be 9000.

```blocks
input.onButtonPressed(Button.B, function () {
    counting = false
    endTime = input.runningTime()
})
```

## Step 7

Next, let's calculate your step rate.
Recall that it is the number of steps divided by the number of minutes elapsed.
How do we get the number of minutes elapsed with startTime and endTime?

First, let's subtract endTime by startTime. That's the number of milliseconds between when button A is pressed and button B is pressed.

For example, if you press button A **five seconds** (*5000 milliseconds*) after the @boardname@ is turned on,
and then press button B **four seconds** later, which is **nine seconds** (*9000 milliseconds*) after @boardname@ is turned on,
how do we get the **four seconds** from ``||variables:startTime||`` (which has value *5000*) and ``||variables: endTime||`` (which has value *9000*)?

## Step 8

Did you figure it out?
We get the number of seconds by dividing the number of milliseconds by 1000.

Recall the previous example.
First, you subtract ``||variables: endTime||`` (which has value *9000*) by ``||variables:startTime||`` (which has value *5000*), which is *4000*.
Then you divide *4000* by *1000*.

## Step 9

Now that we have the number of seconds elapsed, we can divide the number of steps by the number of seconds, and we'll get the number of steps per second.
How do we get the number of steps per *minute* from the number of steps per *second*?

Recall that a minute has 60 seconds. If you took 1 step per second, how many steps will you take in a minute?

## Step 10

Did you figure it out? If you took 1 step per second, how many steps will you take in a minute?
Answer: you will take 60 steps in a minute.
Likewise, if we know the number of steps per second, we can just multiply it by 60 to get the number of steps per minute.

Let's do this when you press button B.
First, create another variable, and call it ``||variables: rate||``
In the ``||math: math||`` tray you will find blocks for subtraction and division.

Note: the ``||math: math||`` blocks might be a little bit confusing. It could help to write down the mathematical forms! 

```blocks
input.onButtonPressed(Button.B, function () {
    counting = false
    endTime = input.runningTime()
    rate = (step / ((endTime - startTime) / 1000)) * 60
})
```
rate = (step / ((endTime - startTime) / 1000)) * 60

## Step 10

Let's also restart your step count when you press button B,
so that when you press on button A the next time, you can get a new step count and a new rate.

```blocks
input.onButtonPressed(Button.B, function () {
    counting = false
    endTime = input.runningTime()
    rate = step / ((endTime - startTime) / 1000)
    step = 0
})
```

## Step 11

Finally, let's show the rate on the @boardname@.
So instead of showing the number of steps at all time, let's show ``||variables: rate||`` when we're not counting.

We learned about ``||logic: if...then||`` in the previous tutorial.
Now, we're going to use ``||logic: if...then...else||``, which is similar. ``||logic: if||`` a condition is met, then the program will execute something.
Otherwise (represented by ``||logic: else||``), the program will execute something else.

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

Now we have a pedometer that also shows your step rate!
