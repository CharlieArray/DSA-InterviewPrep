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

//insertAtBeginning
    insertAtBeginning(value){
        this.head = new _Node(value, this.head)
    }

//insertAtEnd
    insertAtEnd(value){
        let current = this.head;

        //check to see if linkedList empty
            if (this.head == null){
                this.insertAtBeginning(value)
            }

            else{
                while (current.next){
                    current = current.next;
                }
                current.next = new _Node(value, null)
            }
    }

//display
    display(){
        let current = this.head
        while(current){
            console.log(current.value)
            current = current.next
        }
        return
    }

//func to print out 3rd value before last
    print3rd(){
        let current = this.head;
        let count = 0;
        while(current){
            count +=1;
            current = current.next;
        }
        current = this.head;
        for(let i = 0; i < count - 3; i++){
            current = current.next
        }
        console.log(current.value)
    }
}

let linkedList = new LinkedList();
linkedList.insertAtBeginning(4);
linkedList.insertAtEnd(6);
linkedList.insertAtEnd(8);
linkedList.insertAtEnd(12);
linkedList.insertAtEnd(16);

linkedList.display()
linkedList.print3rd()
console.log(linkedList)