/**
 * Custom blocks
 */
//% weight=100 color=#08415d icon="\uf1ae"
//% groups="['Simple Pedometer', 'Sensor Pedometer', 'Radio']"
namespace moveSMART {
    //variables
    let timer = 0;
    let steps = 0;
    let counting: Boolean = false;
    let timing: Boolean = false;

    /**
     * TODO: seturn counting
     */
    //%block weight=3000
    export function counting(): Boolean {
        return counting
    }

    /**
     * TODO: start counting steps (on shake)
     */
    //%block weight=3000
    export function startCounting(): void {
        counting = true
        steps = 0;
    }
    /**
     * TODO: stop counting steps (on shake)
     */
    //%block weight=2000
    export function stopCounting(): void {
        counting = false
    }

    /**
     * TODO: start counting steps (using timer)
     */
    //%block weight = 500
    //%group="Simple Pedometer"
    export function startTiming(): void {
        timing = true
        timer = 0
    }

    /**
     * TODO: stop counting steps (using timer)
     */
    //%block weight = 550
    //%group="Simple Pedometer"
    export function stopTimer(): void {
        timing = false
    }

    /**
     * TODO: show number of steps
     */
    //%block weight=1000
    export function showStepCount(): void {
        basic.showNumber(steps)
        basic.pause(100)
    }

    /**
     * TODO: show timer
     */
    //%block weight=1000
    export function showTimer(): void {
        basic.showNumber(timer)
        basic.pause(100)
    }

    /**
     * TODO: show the number of steps for the step counter (using sensors) without buttons
     */
    //%block weight=1050
    //%group="Sensor Pedometer"
    export function showNumberOfSteps(): void {
        basic.showNumber(steps)
        basic.pause(100)
    }

    /**
     * TODO: add this block to on shake for the step counter (using sensors) without buttons
     */
    //%block weight=1100
    //%group="Sensor Pedometer"
    export function increaseStepCount(): void {
        steps += 1
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
    export function newStep(steps: number): number {
        return (steps+1)
    }


    /**
     * TODO: continue increasing steps if user has pressed "Start Counting"
     */
    //% block
    export function countSteps(): void {
        if (counting) {
                steps += 1
            }
    }

    /**
     * TODO: send activeness
     */
    //% block
    //% group="Radio"
    export function sendActiveness(activeness: number, name: string = "", address: number = 1): void {
        radio.setGroup(1)
        radio.sendValue(name, activeness)
    }

    /**
     * TODO: gets the number of seconds elapsed since power on
     */
    //% block
    export function runningTimeSec(): number {
        return Math.floor(input.runningTime()/1000)
    }

    //helper functions
    input.onGesture(Gesture.Shake, function () {
        if (counting) {
            steps += 1
        }
    })

    basic.forever(function () { //step counter using only timer
        if (timing) {
            basic.pause(1000) //1 per second
            timer += 1
        }
    })

}
