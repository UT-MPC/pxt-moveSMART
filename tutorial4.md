```template
let step = 0
input.onGesture(Gesture.Shake, function () {
    step += 1
})
basic.forever(function () {
    basic.showNumber(step)
})
```
# ProjectSMART Pedometer Tutorial -- Level 4
# Learning about Control Flow


## Step 1

What you created is shown on the screen. In this tutorial, we will give it on/off buttons.

First, create another variable (you can name it **on**) that tells the program if the pedometer should be counting steps.
To create a variable, click on the icon with 4 red stripes, then press **Make a Variable**.

## Step 2

We want button A to be the *on* button, and button B to be the *off* button.
This way, we can turn on the pedometer by pressing button A. Then we can press button B to turn it off.

Drag the ``||input:on button A pressed||`` block and the ``||input:on button B pressed||`` block to your workspace.
```blocks
input.onButtonPressed(Button.A, function () {
})
input.onButtonPressed(Button.B, function () {
})
```

## Step 3

To make button A the *on* button and button B the *off* button, we need to do the following:
1. When button A is pressed, set the ``||variables:on||`` variable to ``||logic:true||``. 
2. When button B is pressed, set the ``||variables:on||`` variable to ``||logic:false||``.

Can you figure out how to do that?

Hint: ``||logic:true||`` and ``||logic:false||`` are both values. You can set the value of ``||variables:on||`` by using ``||variables:set count to||``.

```blocks
input.onButtonPressed(Button.A, function () {
    on = true
})
input.onButtonPressed(Button.B, function () {
    on = false
})
```

## Step 4

Now, we can change the ``||variables:on||`` variable by pressing buttons A and B.

But they still aren't working as on/off buttons yet!
You can test it by pressing button B and then pressing the white dot next to `SHAKE`. The number still increases!

Don't worry. Go to the next step.

## Step 5

Look in the logic drawer, and drag the ``||logic:if true then||`` block onto the screen and into the ``||input:on shake||`` block.

```blocks
input.onGesture(Gesture.Shake, function () {
    if (true) {
        step += 1
    }
})
```

## Step 6

Recall that the pointy thing between **if** and **then** is called a *condition*.
The ``||logic:if true then||`` block executes the instructions in the mouth if the *condition* is true.
Right now, because the *condition* is true, ``||variables:change step by 1||`` will always execute no matter what.


## Step 7

You can replace the ``||logic:true||`` in the ``||logic:if true then||`` block with any variable that has value ``||logic:true||`` or ``||logic:false||``.
This way, ``||variables:step||`` will increase only when the variable is true,
and ``||variables:step||`` will stay the same when the variable is false.

Can you figure out what to do with your ``||variables:on||`` variable?

```blocks
input.onGesture(Gesture.Shake, function () {
    if (on) {
        step += 1
    }
})
```

## Step 8

Look at the @boardname@ and try "shaking" it. Does the number increase?
Press button A, and shake it again.
Press button B, and shake it. Do you know what the program is doing?

## Step 9

The @boardname@ is now a pedometer that you can turn on and off!
You can now flash your code into your real @boardname@.

Press the ``|Download|`` on the bottom left of your screen.
You should see the lights on your real @boardname@ flashing.

Remember to head back to the tutorial webpage, and complete the rest of the activity.