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

    insertFirst(value) {
        this.head = new _Node(value, this.head);
    }   

    insertLast(value){

        let current = this.head;

        //check to see if List is empty or not
        if(current == null){
            this.insertFirst(value)
        }

        else{
            //if not empty, while loop through link list
            while(current.next !== null){
                current = current.next
            }
            current.next = new _Node(value, null)
        }
    }

    
    find(item) { 
        // Start at the head
        let current = this.head;
        
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // Check for the item 
        while (current.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (current.next === null) {
                return null;
            }
            else {
                // Otherwise, keep looking 
                current = current.next;
            }
        }
        // Found it
        console.log("found item:", current)
        return current;
    }


    remove(item){ 
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
    }

}


let List = new LinkedList()

List.insertFirst(4)
List.insertLast(8)
List.find(8, "found item")

console.log(List)

