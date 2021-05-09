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


    insertAtBeginning(value){
        this.head = new _Node(value, this.head)
    }


    insertAtEnd(value){
        let current = this.head;
  
        if(current == null){
            this.insertAtBeginning(value)
        }

        else {
            while(current.next !== null){
                current = current.next
            }
            current.next = new _Node(value, null)
        }
    }

//find
    find(item){
        let indexPosition = 0;

        let current = this.head
        //check to see if linked list is empty
        if(current == null){
            return 
        }
        else{
            while(current.value !== item){
                current = current.next
                indexPosition += 1    
            }

        }
        //item == value
        console.log(`found value ${item} at index:`, indexPosition)
    }

    //delete
    
    //

}

let newLinkList = new LinkedList();

newLinkList.insertAtEnd(2)
newLinkList.insertAtEnd(4)
newLinkList.insertAtEnd(6)
newLinkList.find(2)

console.log(newLinkList)




