const map = new Map();
map.set(1, "dhilip");
map.set(2, "kumar");
map.set("3", "ramesh");
map.set(true, "prakash");
map.set(null, "prakash null");
map.set({ id: 1 }, "prakash null");
map.set({}, "prakash null111");
map.set([], "prakash null");

console.log(map.get("3"));
console.log(map.has("3"));
console.log(map.has(null));
console.log(map.has({ id: 1 }));
console.log(map.has([]));

map.forEach((value, key) => {
    console.log(`${key} - ${value}`)
})

for (let [key, value] of map) {
    console.log(`${key} - ${value}`)
}