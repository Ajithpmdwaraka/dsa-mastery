const twoSum = (num, target) => {
    for (let i = 0; i < num.length; i++) {          // loop over each element
        for (let j = i + 1; j < num.length; j++) {  // check each pair (i, j)
            if (num[i] + num[j] === target) {       // if their sum equals target
                return [i, j];                      // return the indices
            }
        }
    }
    return []; // if no pair found
}

console.log(twoSum([2,7,11,15], 9)); // Output: [0,1]
