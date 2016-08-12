"use strict";
var dog_1 = require('./animals/dog');
exports.Dog = dog_1.Dog;
var mydog = new dog_1.Dog();
mydog.name = 'firulay';
mydog.move(5);
