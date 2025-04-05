function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    return `Hello, my name is ${this.name}`;
};

const john = new Person("John");

console.log(john.sayHello()); // "Hello, my name is John"
console.log(john.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null (end of chain)
