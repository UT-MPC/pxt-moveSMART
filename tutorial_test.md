# TEST


## Step 1

In this tutorial, we will learn how to use MakeCode and the @boardname@ to make a *pedometer* -- a device that counts how many steps you take.

## Step 2

On your screen, you see two blue *blocks*. They say ``||Basic:on start||`` and ``||Basic:forever||``. 


## Step 3

please show up....

```blocks
input.onButtonPressed(Button.AB, function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(0)
    }
})
```

## Step 4

step+=1

```blocks
input.onButtonPressed(Button.A, function () {
    step = moveSMART.newStep(step)
})
```
