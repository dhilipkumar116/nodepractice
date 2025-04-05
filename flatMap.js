const arr = [1, 2, [3, 4], [5, [6, 7]]];

console.log(arr.flat());
// Output: [1, 2, 3, 4, 5, [6, 7]] (Flattens only one level by default)

console.log(arr.flat(2));
// Output: [1, 2, 3, 4, 5, 6, 7] (Flattens two levels deep)

console.log(arr.flat(Infinity));
// Output: [1, 2, 3, 4, 5, 6, 7] (Flattens completely)

// -------------------------------------


const users = [
    { name: "Alice", hobbies: ["Reading", "Swimming"] },
    { name: "Bob", hobbies: ["Cycling", "Running"] },
];

const allHobbies = users.flatMap(user => user.hobbies);
console.log(allHobbies);
// Output: ['Reading', 'Swimming', 'Cycling', 'Running']
