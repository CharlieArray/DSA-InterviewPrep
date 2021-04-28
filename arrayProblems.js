// Filtering an array

// Imagine you have an array of numbers. Write an algorithm to remove all numbers less than 5 from the array. DO NOT use Array's built-in .filter() method here; write the algorithm from scratch.

let array = [2,4,5,7,9,12,14]

function removeUnder5(){
    let arrOver5 = [];

    for(let i=0; i < array.length; i++){
        if(array[i] > 5) {arrOver5.push(array[i])}
    }
    array = arrOver5;
    console.log(array, "<- nums that are less than 5")
}

removeUnder5(array)


//Given an input string, return a list of all words that are Palindromes   
let string =  "Dad gave mom a Tesla as a racecar"


function returnPaindromes(){
    //have a placeholder var for list; result = []
        let resultsThatMatch = []

    //break up entire string into array 
        let arrayString = string.toLowerCase().split("")
        let origStringArr = arrayString.join("").split(" ")

    //iterate through each array index and reverse word -> ["dad, evag, mom, a, alset, sa, a , racecar"]
    let reverStringArr = arrayString.reverse().join("").split(" ")

    //if reversed word index matches original index item, push word to resultsMatch
    for(let i = 0; i < origStringArr.length; i++){

        for(let j = 0; j < reverStringArr.length; j++)
            if(origStringArr[i] === reverStringArr[j]){
                resultsThatMatch.push(origStringArr[i])
            }
    }

    //return resultsMatch, and let qty = resultsMatch.length
    console.log(resultsThatMatch, "these matched")
    console.log(`Number of Palidromes is ${resultsThatMatch.length}`)
}

returnPaindromes(string)












// 7. Max sum in the array
// You are given an array containing positive and negative integers. Write an algorithm which will find the largest sum in a continuous sequence.
    
//     Input: [4, 6, -3, 5, -2, 1]
//     Output: 12


// 8. Merge arrays
// Imagine you have 2 arrays which have already been sorted. Write an algorithm to merge the 2 arrays into a single array, which should also be sorted.

//     Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
//     Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]

// 9. Remove characters
// Write an algorithm that deletes given characters from a string. For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" and the characters to be removed are "aeiou", the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny". Do not use Javascript's filter, split, or join methods.

// charRemoval = 'Battle of the Vowels: Hawaii vs. Grozny'
//     Output: 'Bttl f th Vwls: Hw vs. Grzny'

// 10. Products

// Given an array of numbers, write an algorithm that outputs an array where each index is the product of all the numbers in the input array except for the number at each current index. See the following example input and output.

//     Input:[1, 3, 9, 4]
//     Output:[108, 36, 12, 27]


// 12. String rotation

// Given 2 strings, str1 and str2, write a program that checks if str2 is a rotation of str1.

//     Input: amazon, azonma
//     Output: False

//     Input: amazon, azonam
//     Output: true


// Find Maximum in Array

function maxNumber(array) {
        if (array.length === 0) {
            return null;
        }
    
        let currentMax = array[0];
        for (let i = 1; i < array.length; i++) {
            const item = array[i];
            if (item > currentMax) {
                currentMax = item;
            }
        }
        return currentMax;
    }