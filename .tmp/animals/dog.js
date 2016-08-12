"use strict";
var Dog = (function () {
    function Dog() {
        this.name = 'Dog';
    }
    Dog.prototype.move = function (steps) {
        console.log('You move ' + this.name + ' ' + steps + ' steps...');
        return true;
    };
    return Dog;
}());
exports.Dog = Dog;
