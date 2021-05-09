//make node and linkedList classes, create a method that deletes duplicate values

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtBeginning(value) {
    this.head = new _Node(value, this.head);
  }

  insertAtEnd(value) {
    let current = this.head;
    if (current == null) {
      this.insertAtBeginning();
    } else {
      while (current.next !== null) {
        current = current.next;
      }
      current.next = new _Node(value, null);
    }
  }

  //deleteDuplicate
  deleteDuplicates(){
    //goal is to go through entire list and compare current == current.next 
        //if true, set current.next = current.next.next
  }

  //find

  //delete


  //display
  display() {
    let current = this.head
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
    return;
  }
}

let linkedList = new LinkedList();
linkedList.insertAtBeginning(4);
console.log(linkedList);
linkedList.insertAtBeginning(6);
console.log(linkedList);
linkedList.insertAtEnd(8);
linkedList.display()


//create an algorithm that has a string input, and outputs each word of the string with number of occurances
let string = "The sea shells by the sea shore, are always getting seaweed on them!"

function stringCount(){
  
}