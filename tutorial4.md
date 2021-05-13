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

First, create another variable (you can name it **count**) that tells the program if the pedometer should be counting steps.
If the ``||variables:count||`` variable is **True**, then the pedometer will count your steps.
If the ``||variables:count||`` variable is **False**, the pedometer will not count.

You can think of it as on/off, where on is called **True**, and off is called **False**.

## Step 2

Set ``||variables:count||`` to ``||logic:false||`` when the program starts running.
That's because the pedometer should be off when the program starts.
You can find the ``||logic:false||`` block at the bottom of the ``||logic:Logic||`` drawer.

```blocks
let count = false
```

## Step 3

We want button A to be the *on* button, and button B to be the *off* button.
This way, we can turn on the pedometer by pressing button A. Then we can press button B to turn it off.

In other words, when button A is pressed, set the ``||variables:count||`` variable to ``||logic:true||``. 
When button B is pressed, set ``||variables:count||`` to ``||logic:false||``.

Hint: ``||logic:true||`` and ``||logic:false||`` are both values. You can set the value of ``||variables:count||`` by using ``||variables:set count to||``.

```blocks
input.onButtonPressed(Button.A, function () {
    count = true
})
input.onButtonPressed(Button.B, function () {
    count = false
})
```

## Step 4

Now, we can change the ``||variables:count||`` variable by pressing buttons A and B.

But we're not quite there yet! Press button B, and then press the white dot next to `SHAKE`. The number still increases!

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

You can replace the ``||logic:true||`` in the ``||logic:if true then||`` block with any variable that has value ``||logic:true||`` or ``||logic:false||``. 
Can you figure out what to do with your ``||variables:count||`` variable?

```blocks
input.onGesture(Gesture.Shake, function () {
    if (count) {
        step += 1
    }
})
```

## Step 7

Look at the @boardname@ and try "shaking" it. Does the number increase?
Press button A, and shake again.
Press button B, and shake. Do you know what the program is doing?

## Step 8

The @boardname@ is now a pedometer that you can turn on and off!
You can now flash your code into your real @boardname@.

Press the **Download** on the bottom left of your screen.
You should see the lights on your real @boardname@ flashing.