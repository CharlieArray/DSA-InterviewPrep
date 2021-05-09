let linkedList = {
    head: {
        value: 4, 
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


class _Node{
    constructor(value, next){
      this.value = value;
      this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }

//insert at begining of linked list
 insertBeginning(value){
    //points head to new node
    this.head = new _Node(value, this.head)
       
 }

//insert at end of linked list
insertAtEnd(value){
    let current = this.head

    //if current list is null, use beginning function

    //else while current.next !== null
        //current = current.next

    //current.next = new Node(value, null);
   
}

//find value



//delete value


}

let newLinkedList = new LinkedList()
newLinkedList.insertBeginning(4)
newLinkedList.insertBeginning(6)
console.log(newLinkedList)