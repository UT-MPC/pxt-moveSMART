input.onButtonPressed(Button.A, function () {
    moveSMART.startCounting()
})
input.onButtonPressed(Button.B, function () {
    moveSMART.stopCounting()
})
basic.forever(function () {
    moveSMART.showStepCount()
})
