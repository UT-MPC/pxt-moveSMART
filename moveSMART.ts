
/**
 * Custom blocks
 */
//% weight=100 color=#CC5500 icon="\uf1ae"
namespace moveSMART {
    //variables
    let step = 0;
    let counting: Boolean = false;

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

    //helper functions
    input.onGesture(Gesture.Shake, function () {
        if (counting) {
            step += 1
        }
    })

    function step_count(): number {
        return step
    }

}
