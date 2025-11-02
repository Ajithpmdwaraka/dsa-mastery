// As the size of the input data increases the time to run wull also increase, it grows linearly

const groceries = ['milk', 'bread', 'eggs', 'cheese'];

const findItem = (item) => {
    for (let i = 0; i < groceries.length; i++){
        if (groceries[i] === item) {
            console.log(`${item} is in the database and found at inde number ${i}`);
        }
    }
}

findItem('eggs');