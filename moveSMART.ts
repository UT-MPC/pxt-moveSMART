/**
 * Custom blocks
 */
//% weight=100 color=#08415d icon="\uf1ae"
namespace moveSMART {
    //variables
    let step = 0;
    let counting: Boolean = false;
    let count_timer: Boolean = false;

    /**
     * TODO: start counting steps
     */
    //%block weight=3000
    export function startCounting(): void {
        counting = true
    }
    /**
     * TODO: stop counting steps
     */
    //%block weight=2000
    export function stopCounting(): void {
        counting = false
    }

    /**
     * TODO: start counting steps (using timer)
     */
    //%block weight = 500
    export function startCounter(): void {
        count_timer = true
    }

    /**
     * TODO: stop counting steps (using timer)
     */
    //%block weight = 550
    export function stopCounter(): void {
        count_timer = false
    }

    /**
     * TODO: show number of steps
     */
    //%block weight=1000
    export function showStepCount(): void {
        basic.showNumber(step_count())
        basic.pause(100)
    }

    /**
     * TODO: show whether the step counter is counting
     */
    //%block
    export function isCounting(): Boolean {
        return counting
    }

    /**
     * TODO: return new step count
     */
    //% block
    export function newStep(step: number): number {
        return (step+1)
    }


    /**
     * TODO: continue increasing steps if user has pressed "Start Counting"
     */
    //% block
    export function countSteps(): void {
        if (counting) {
                step += 1
            }
    }

    //helper functions
    input.onGesture(Gesture.Shake, function () {
        if (counting) {
            step += 1
        }
    })

    basic.forever(function () { //step counter using only timer
        if (count_timer) {
            basic.pause(1500)
            step += 1
        }
    })

    function step_count(): number {
        return step
    }

}

