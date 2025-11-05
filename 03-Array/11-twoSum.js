const twoSum = (num, target) => {
    for (let i = 0; i < num.length; i++) {
        for (let j = i + 1; j < num.length; j++) {
            if (num[i] + num[j] === target) {
                return [i,j];
            }
        }
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [2,7]