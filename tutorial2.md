# ProjectSMART Pedometer Tutorial -- Level 2
# Learning about sensors


## Step 1

In this tutorial, we will learn how to make use of the sensors on the @boardname@ to make a *pedometer*.

## Step 2

First, we need to start counting steps. We will do this the same way we did in the last tutorial. The @boardname@ has two buttons: A and B. When you press A, we'll start counting steps. When you press B, we'll stop counting steps.

## Step 3

Do you remember what to do with the ``||input:on button A pressed||`` block from the **Input** menu and the ``||moveSMART:start counting||`` block from the **moveSMART** menu?

```blocks
input.onButtonPressed(Button.A, function () {
    moveSMART.startCounting()
})
```

## Step 4

Tell the @boardname@ to stop counting steps when you press the B button. Hint: Create a ``||input:on button B pressed||`` block. Use that and the ``||moveSMART:stop counting||`` block.

```blocks
input.onButtonPressed(Button.B, function () {
    moveSMART.stopCounting()
})
```

## Step 5

Now, we want to tell the @boardname@ that when a shake is detected, the step count must increase by one.

## Step 6

To do this, we have ``||input:on shake||`` and ``||moveSMART:count steps||``. Can you figure out what to do with these two blocks?

```blocks
input.onGesture(Gesture.Shake, function () {
    moveSMART.countSteps()
})
```

## Step 7

Now that we have assembled all the pieces together, try it out on the @boardname@!
