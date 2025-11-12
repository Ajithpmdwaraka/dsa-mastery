const arr = [1, 2, 3, 4];

console.log(arr);
console.log(arr[0]);
console.log(arr.length);

//Iterating through array
for (i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

for (items of arr) {
    console.log(items);
}

arr.forEach(items => {
    console.log(items);
});

//Add Items
arr.push(5);
arr.unshift(0);
arr.splice(2, 0, 2.3);
console.log(arr);

//Remove items
arr.pop();
arr.shift();
arr.splice(2, 1);
console.log(arr);

//Array Transformation
const newArr = arr.map(item => item * 2);
console.log(newArr);
const filteredArr = arr.filter(item => item % 2 === 0);
console.log(filteredArr);
const sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
console.log(arr.concat([6, 7, 8]));

//Searching
console.log(arr.indexOf(3));
console.log(arr.includes(3));

//Sort, Slice, Reverse
arr.sort((a, b) => b - a);
console.log(arr);
const slicedArr = arr.slice(1, 4);
console.log(slicedArr);
const reversedArr = arr.reverse();
console.log(reversedArr);

// Array to string conversion
const joinedStr = arr.join('-');
console.log(joinedStr);
console.log(arr.toString());

//Math Operation on Array
Math.max(...arr);    // 4
Math.min(...arr);    // 1

//Array destructuring
const [first, second, ...rest] = arr;
console.log(first);   // 4
console.log(second);  // 3
console.log(rest);    // [2, 1]