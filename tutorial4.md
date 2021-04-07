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

In this tutorial, we will learn about control flows

## Step 2

TODO: Brief explanation of control flows, ...

## Step 3

On your screen, you see the pedometer from the previous tutorial.
In this tutorial, we will be making some changes so that you can decide when the pedometer starts counting steps, and when to stop counting.

## Step 4

First, create another variable (you can name it **count**) that tells the program if the pedometer should be counting.
If the pedometer should be counting, then ``||variables:count||`` should have a value **True**.
Otherwise, **count** will have value **False**.
You can think of it as on/off, where on is called **True**, and off is called **False**.
Look in the **Logic** drawer, and find ``||logic:false||``.
Let ``||variables:count||`` be ``||logic:false||`` when the program starts running. That's because the pedometer should be off when the program starts.

```blocks
let step = 0
let count = false
```

## Step 5

Next, we want to be able to control the value of ``||variables:count||``.
We can use buttons A and B for this.
Do you remember that in tutorial 1, we turned on and off the pedometer by pressing button A and button B?
Now we're trying to build the same thing.

## Step 6

We want button A to be the *on* button, and button B to be the *off* button.
In other words, we want ``||variables:count||`` to turn into ``||logic:true||`` when button A is pressed,
and to turn into ``||logic:false||`` when button B is pressed.
Hint: ``||logic:true||`` and ``||logic:false||`` are both values. You can set the value of ``||variables:count||`` by using ``||variables:set count to||``.

```blocks
input.onButtonPressed(Button.A, function () {
    count = true
})
input.onButtonPressed(Button.B, function () {
    count = false
})
```

## Step 7

Now that we can control the value of ``||variables:count||``,
we can control the behavior of the program such that when ``||variables:count||`` is ``||logic:true||`` it executes a set of instructions, 
and when ``||variables:count||`` is ``||logic:false||`` it executes another set of instructions.

## Step 8

Right now, there is only one block in the mouth of the ``||input:on shake||`` block.
We want to change this so that ``||variables:change step by 1||`` is executed if and only if ``||variables:count||`` is ``||logic:true||``.
Look in the logic drawer, and drag the ``||logic:if true then||`` block onto the screen.
The ``||logic:if true then||`` block tells the program what to do when the value is true.

```blocks
if (true) {
}
```
Ignore the ``||basic:on start||`` block in the hint

## Step 9

You can replace the ``||logic:true||`` in the ``||logic:if true then||`` block with any variable that has value ``||logic:true||`` or ``||logic:false||``.

```blocks
if (count) {
}
```
Ignore the ``||basic:on start||`` block in the hint

## Step 10

Remember, what we're trying to achieve here is that when the @boardname@ is shaken, step increases if and only if ``||variables:count||`` is ``||logic:true||``.
How can we do this?

```blocks
input.onGesture(Gesture.Shake, function () {
    if (count) {
        step += 1
    }
})
```

## Step 11

Look at the @boardname@ and try "shaking" it. Does the number increase?
Press button A, and shake again. What happens now?
Press button B, and shake. Do you know what is happening?
