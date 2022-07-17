var message = "Hello World";
console.log(message);
var Message1 = /** @class */ (function () {
    function Message1() {
    }
    Message1.prototype.show = function () {
        console.log("Hello World");
    };
    return Message1;
}());
var obj = new Message1();
obj.show();
