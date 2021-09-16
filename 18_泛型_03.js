// 泛型在类和接口中的使用
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.push = function (item) {
        this.data.push(item);
    };
    Queue.prototype.pop = function () {
        return this.data.shift();
    };
    return Queue;
}());
var q = new Queue();
q.push(1);
q.push(2);
console.log(q.pop().toFixed());
