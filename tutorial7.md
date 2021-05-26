```template
let counting = false
let startTime = 0
let endTime = 0
let totalTime = 0
let rate = 0
let step = 0
let activeness = 0
input.onButtonPressed(Button.A, function () {
    counting = true
    startTime = moveSMART.runningTimeSec()
})
input.onButtonPressed(Button.B, function () {
    counting = false
    endTime = input.runningTime()
    rate = (step / ((endTime - startTime) / 1000)) * 60
    basic.showNumber(rate)
    if (rate < 60) {
        activeness = 1
    } else if (rate < 120) {
        activeness = 2
    } else {
        activeness = 3
    }
    step = 0
})
input.onGesture(Gesture.Shake, function () {
    if (counting) {
        step += 1
    }
})
basic.forever(function () {
    if (counting) {
        basic.showNumber(step)
    } else {
        basic.showNumber(activeness)
    }
})

```

# ProjectSMART Pedometer Tutorial -- Level 7
# How Computers Interact with Each Other

## Step 1

Create a ``||input:on button A+B pressed||`` block.

```blocks
input.onButtonPressed(Button.AB, function () {
})
```

## Step 2

The ``||input:on button A+B pressed||`` block tells the @boardname@ what to do when both buttons A and B are pressed at the same time.
What we want to do is for the @boardname@ to send your level of activeness to another @boardname@ via radio.

The ``||moveSMART:sendActiveness||`` block does this, but you have to provide input arguments:
1. The payload, which in this case is ``||variables:activeness||`` and your name (a string)
2. The address. In this case, any integer will do.

Drag the ``||moveSMART:sendActiveness||`` block into the ``||input:on button A+B pressed||`` block,
and drag your ``||variables:activeness||`` variable into the first bubble.
Then type your name into the second bubble.
Finally, type a number into the third bubble.

```blocks
input.onButtonPressed(Button.AB, function () {
    custom.sendActiveness(activeness, "your name", 5)
    basic.showIcon(IconNames.Happy)
})
```
