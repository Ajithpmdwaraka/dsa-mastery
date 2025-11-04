const capital = (str) => {
    return str.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

console.log(capital("dsa mastery")); // Output: "Hello World From Dsa Mastery"