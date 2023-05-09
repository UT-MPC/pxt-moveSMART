namespace moveSMART {
    //variables
    let timer = 0;
    let steps = 0;
    let isCounting : Boolean = false;
    let timing: Boolean = false;

    /**
     * TODO: start counting steps (on shake)
     */
    //%block weight=3000
    export function startCounting(): void {
        isCounting = true
        steps = 0
    }
    /**
     * TODO: stop counting steps (on shake)
     */
    //%block weight=2000
    export function stopCounting(): void {
        isCounting = false
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
    export function stopTiming(): void {
        timing = false
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
    //%block weight=500
    export function counting(): Boolean {
        return isCounting
    }

    /**
     * TODO: show whether the step counter is counting
     */
    //%block weight=600 
    export function countsteps(): void {
        if(isCounting){
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
     

    basic.forever(function () { //step counter using only timer
        if (timing) {
            basic.pause(1000) //1 per second
            timer += 1   
        }
    })
     
}

