var Clock = /** @class */ (function () {
    function Clock() {
        this.clock = this.start();
    }
    Clock.prototype.start = function () {
        return setInterval(function () {
            console.clear();
            console.log(new Date());
        }, 1000);
    };
    Clock.prototype.stop = function () {
        return clearInterval(this.clock);
    };
    return Clock;
}());
export default Clock;
