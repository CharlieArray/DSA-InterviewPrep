//practice deleting a node and getting a specific node

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


    //insert at beginning
    insertBeginning(value){

        this.head = new _Node(value, this.head)
    
    // Inserting at the beginning of the list can be achieved by the following steps:

    // Create a new node item
    // Point the head to that new node
    
    }

    //insert at end
    insertAtEnd(value){
        //check to see if list is empty
        let current = this.head

        if (current == null){
            this.insertBeginning(value)
        }

        else{ 
            while (current.next !== null){
                current= current.next
            }
            current.next = new _Node(value, null)
        }
    }


    //get(find)
    find(){

    }


    //remove
    remove(){

    }
}

let list = new LinkedList()
list.insertAtEnd(6)
list.insertAtEnd(8)
console.log(list)

//list.insertBeginning(4)
