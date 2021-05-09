//goal of this exercise is to create an algo that takes in a string input, and returns a list of all the word occurances by individual word.

let string = "All the animals marched two by two to the ark, on a sunny day!"

function countWords(){
    //steps
        let stringLower = string.toLowerCase();
        let stringArr = stringLower.replace('!', '').replace(',', '').split(' ')
        console.log(stringArr)

    //placeholder object that holds key/values
    let objResult = {};
    //for loop through array
    for(let i = 0; i < stringArr.length; i++){
        let item = stringArr[i]
        objResult[item] = objResult[item] + 1 || 1
    }
    console.log(objResult)
}

countWords(string)
