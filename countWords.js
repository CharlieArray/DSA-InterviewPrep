let string = "Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"

let newString = string.toLowerCase()
console.log(newString)

let stringArray = newString.replace(',','').replace('?','').split(' ')
console.log(stringArray)

function countWords(stringArray){

//use object to store key:value pairs for word:count
 let result = {};

    for(let i = 0; i < stringArray.length; i++ ){

        let item = stringArray[i] 

        //result[item] is value of that item +1 OR 1 (if no value yet aka first iteration of that item)
        result[item] = (result[item]+1) || 1;

    }
 console.log(result)
}

countWords(stringArray)