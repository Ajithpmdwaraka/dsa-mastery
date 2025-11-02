const data = [1, 2, 3, 4];

function findPairs(arr) {
    for (let i = 0; i < arr.length; i++){
        for (let j = i+1; j < arr.length; j++) { 
            console.log(`(${arr[i]}, ${arr[j]})`);
        }
    }
}

findPairs(data);