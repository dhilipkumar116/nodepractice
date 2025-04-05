/*

Since arrow functions don’t have their own this, you cannot use .bind(), .call(), or .apply() to change this. Instead, you should:

Use a regular function instead of an arrow function.

If you want to use an arrow function, store this in a variable (self or that trick).

Use Function.prototype.bind() before assigning the function.

*/


// sol 1
var obj2 = {
    valueOfThis: function () {
        let self = this; // Store the reference
        let arrowFunc = () => self; // Arrow function now refers to the stored value
        return arrowFunc();
    }
}

console.log(obj2.valueOfThis()); // obj2


// sol 2
var obj2 = {
    valueOfThis: (() => {
        return this;
    }).bind(obj2) // Binding obj2
};

console.log(obj2.valueOfThis()); // obj2


// sol 3
var obj2 = {
    valueOfThis: (() => this).bind(obj2)
};

console.log(obj2.valueOfThis()); // obj2


