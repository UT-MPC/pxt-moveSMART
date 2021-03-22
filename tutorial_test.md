# TEST


## Step 1

In this tutorial, we will learn how to use MakeCode and the @boardname@ to make a *pedometer* -- a device that counts how many steps you take.

## Step 2

On your screen, you see two blue *blocks*. They say ``||Basic:on start||`` and ``||Basic:forever||``. 

```blocks
basic.forever(function () {
    moveSMART.showStepCount()
})
```

## Step 3

please show up....
```blocks
input.onGesture(Gesture.Shake, function () {
    if (moveSMART.isCounting()) {
        step += 1
    }
})
```
