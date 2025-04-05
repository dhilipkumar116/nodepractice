function deepFlattenMap(map, prefix = "") {
    let result = new Map();

    map.forEach((value, key) => {
        const newKey = prefix ? `${prefix}.${key}` : key;

        if (value instanceof Map) {
            // Recursively flatten
            const innerFlattened = deepFlattenMap(value, newKey);
            innerFlattened.forEach((v, k) => result.set(k, v));
        } else {
            result.set(newKey, value);
        }
    });

    return result;
}

// Example with deeper nesting
const deepNestedMap = new Map([
    ["x", new Map([
        ["y", new Map([
            ["z", 10]
        ])]
    ])],
    ["p", 20]
]);

const flatDeepMap = deepFlattenMap(deepNestedMap);
console.log(flatDeepMap);
// Output: Map(2) { 'x.y.z' => 10, 'p' => 20 }

for (let [key, value] of flatDeepMap.entries()) {
    console.log(key, value)
}
