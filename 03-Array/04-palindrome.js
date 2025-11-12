const palindrome = (str) => {
    if (str.split("").reverse().join("") === str) {
        console.log(`${str} is a palindrome`)
    } else {
        console.log(`${str} is not a palindrome`)
    }
}

palindrome("madam"); // Output: "madam is a palindrome"
palindrome("hello");