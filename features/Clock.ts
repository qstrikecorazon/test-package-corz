class Clock {
    private clock: number;
    constructor() {
        this.clock = this.start();
    }

    start(): number {
        return setInterval(() => {
            console.clear();
            console.log(new Date());
        }, 1000);
    }

    stop() {
        return clearInterval(this.clock);
    }
}

export default Clock;
