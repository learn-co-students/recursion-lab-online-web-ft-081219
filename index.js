// Code your solution here!

function printString(string){
    console.log(string[0])
    if (string.length > 1) {
        printString(string.substring(1, string.length))
    }
}

function reverseString(string){
    if (string.length > 1) {
        return string.slice(-1) + reverseString(string.substring(0, string.length - 1))
    } else {
        return string
    }
}

function isPalindrome(string){
    if (string.length > 1) {
        return string[0] === string.slice(-1) && isPalindrome(string.substring(1, string.length - 1))
    } else {
        return true
    }
}

function addUpTo(nums, index) {
    if (index > 0) {
        return nums[0] + addUpTo(nums.slice(1), index - 1)
    } else {
        return nums[0]
    }
}

function maxOf(array) {
    if (array.length > 1) {
        return Math.max(array[0], maxOf(array.slice(1)))
    } else {
        return array[0]
    }
}

function includesNumber(array, n) {
    if (array.length > 1) {
        return array[0] === n || includesNumber(array.slice(1), n)
    } else {
        return array[0] === n
    }
}