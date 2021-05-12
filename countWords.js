//objective: count reoccuring words and return a list of words and count for each.

let string = "Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"

let newString = string.toLowerCase()
console.log(newString)

let stringArray = newString.replace(',','').replace('?','').split(' ')
console.log(stringArray)

function countWords(stringArray){

 let result = {};  //store key:value pairs for word:count

    for(let i = 0; i < stringArray.length; i++ ){

        let item = stringArray[i] 

        //result[item] is value of that item +1 OR 1 (if no value yet aka first iteration of that item)
        result[item] = (result[item]+1) || 1;

    }
 console.log(result)
}

countWords(stringArray)


// given a string phrase, count the number of palindromes in the string
let palinString = "Dad gave mom a Tesla as a racecar"

function countPalindromes(){
    //lowercase all words
    let lowerCaseString = palinString.toLowerCase()
    //split(" ") by each space to create array
    let origArr = lowerCaseString.split(" ")
    let reverseArr = lowerCaseString.split('').reverse().join("").split(" ")

    console.log(origArr)
    console.log(reverseArr)

    let result = [];

    for(let i = 0; i < origArr.length; i++){
        for(let j = 0; j < reverseArr.length; j++){
                if(origArr[i] == reverseArr[j]){
                    if(origArr[i].length > 2){
                        result.push(origArr[i])
                    }
                }
            }
    }
    console.log("These are palindromes:", result)
    console.log("Total that are palindromes:", result.length)
 }


countPalindromes(palinString)