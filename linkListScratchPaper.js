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
