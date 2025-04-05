var person = {
    name: "dhilip",
    age: 12,
    getAge: function(status) {
        return this.age + " "+ status;
    }
}

var person2 = {name: "kumar",age: 29}
console.log(person.getAge.call(person2, "bad"));
console.log(person.getAge.apply(person2,["good"]))
