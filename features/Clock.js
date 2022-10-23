var default_1 = /** @class */ (function () {
    function default_1() {
        this.clock = this.start();
    }
    default_1.prototype.start = function () {
        return setInterval(function () {
            console.clear();
            console.log(new Date());
        }, 1000);
    };
    default_1.prototype.stop = function () {
        return clearInterval(this.clock);
    };
    return default_1;
}());
export default default_1;
