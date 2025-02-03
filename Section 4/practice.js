function revString(str) {
    let reversed = ""
    // console.log(str.split("").reverse().join("")) this is one method using split and reverse method
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i]
    }
    return reversed
}

console.log(revString("hello"))

//palindrome function

function palindrome(str) {
    let palindromeStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        palindromeStr += str[i]
    }
    return str === palindromeStr
}
console.log(palindrome("madam"))

//Factorial - Factorial of n (denoted as n!) is the product of all numbers from 1 to n.

function factorialNum(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result = result * i
    }
    return result
}
console.log(factorialNum(4))

// Find the Largest Number in an Array

function largestNumber(arr){
    let num=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
            num=arr[i]
        }
    }
    return num
}

console.log(largestNumber([1,4,2,3,6,2]))