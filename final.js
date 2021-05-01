//given a string prhase, count identical words in a string and return results

let phrase = "Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"


function countWords(){

 let result = {};  //store key:value pairs for word:count

 let newString = phrase.toLowerCase()

 let stringArray = newString.replace(',','').replace('?','').split(' ')
 console.log(stringArray)

    for(let i = 0; i < stringArray.length; i++ ){

        let item = stringArray[i] 

        //result[item] is value of that item +1 OR 1 (if no value yet aka first iteration of that item)
        result[item] = (result[item]+1) || 1;
    }
 console.log(result)
}

countWords(phrase)

//----------------------------------------------------------------------

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


//Given an input string, return a list of all words that are Palindromes   
let stringAlt =  "Dad gave mom a Tesla as a racecar"

function returnPaindromesAlternate(){
    let resultsMatch = [];

    //benefit: is there's no joining/reversing
    const words = stringAlt.split(" ")

    for(let i = 0; i < words.length; i++){
        const word = words[i]
        let error = false
        for(let j = 0; j < word.length/2; i++){
            if(word[j] !== word[word.length - j - 1]){
                error = true;
            }
        }
        if (!error){
            resultsMatch.push(word)
        }
    }
    return resultsMatch
}

returnPaindromes(stringAlt)

//Given a sorted linked list, write an algorithm to delete all duplicate numbers from the sorted linked list.

const linkedList= {
    head:{
        value:2, 
        next: {
            value: 4,
            next: {
                value: 6,
                next: {
                    value: 6, 
                    next: {
                        value: 8,
                        next: {
                            value: 10,
                            next: null
                        }
                    }
                }
            }
        }
    }
}

function deleteDuplicate(){
    //define current
    let current = linkedList.head
    //while current !== null && current.next !== null
    while(current !== null && current.next !== null){
         //if current.value == current.next.value
         if(current.value == current.next.value){
            current.next = current.next.next
         }
        current = current.next
    }
}

function display(linkedList){
    let node = linkedList.head
    while(node){
        console.log(node.value)
        node = node.next
    }
}

display(linkedList)
deleteDuplicate(linkedList)
display(linkedList)

/* Primary Linked List operations are 

insert: 
//insert beginning
    -
    -
    -
    -
//insert middle

//insert end


delete:



and get(find)


*/


// function findItem(item){
    //set currentNode = this.head

    //check to see if list is empty
    /*if (!this.head){
      return null  
    }
    */

    /*while(currentNode !== item){
        
        if(currentNode.next == null){
            return null
        }

        else currentNode = currentNode.next
    }

    return currentNode
    */


//}