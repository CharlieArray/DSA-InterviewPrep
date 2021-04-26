//Given a sorted linked list, write an algorithm to delete all duplicate numbers from the sorted linked list.

const list = {
    head: {
        value: 2 ,
        next:{
            value: 4,
            next:{
                value:6,
                next:{
                    value: 6,
                    next: {
                        value: 8,
                        next: null
                    }
                }
            }
        }
    }
};

function deleteDuplicate(list){
    if(list == null){
        return null
    }

    let current = list.head;

    while(current && current.next){
        if(current.value == current.next.value){
             current.next = current.next.next
        }
        current = current.next
        console.log(list)
    }
    // console.log(list)
    return list
}

function display(list){
    let node = list.head
    while(node){
        console.log(node.value)
        node = node.next
    }
}
display(list)
deleteDuplicate(list)
display(list)

// 2 -> 4 -> 6a -> 6b -> 8
//if current == current.next , set current.next = previous.next, then change the pointer
// 4 is previous, 6a is current, 6b is current.next


/*
const list = {
    head: {
        value: 10 ,
        next:{
            value: 5,
            next:{
                value:6,
                next:{
                    value: 12,
                    next: null
                }
            }
        }
    }
};
*/



// Reverse a list
// Write an algorithm to reverse a linked list. The time complexity of your algorithm should be linear (O(n)). For this exercise, notice we are not asking you just to print the linked list in reverse or use another linked list to store the value in reverse order. Your program should reverse the direction of a given singly linked list. In other words, all pointers should point backward. BONUS: Solve this problem using both recursive and iterative algorithms.


// 3rd from the end
// Write an algorithm to find the 3rd element from the end of a linked list. Note You may be tempted to add a length property to your linked list class. The length property is not a typical property of linked list, therefore don't make any modification to the linked list class that is provided to you.


// Middle of a list
// Write an algorithm to find the middle element of a linked list. Note You may be tempted to add a length property to your linked list class. The length property is not a typical property of linked list, therefore don't make any modification to the linked list class that is provided to you. Also, finding the size of the linked list using the size() function and dividing it in half will not find the correct middle of the linked list. So, don't use either of these approaches.


// Cycle in a list
// Write an algorithm to find whether a linked list has a cycle (i.e., whether a node in the list has its next value pointing to an earlier node in the list). For this exercise, create a linked list with the name CycleList. Be sure to insert nodes in the list so that it has a cycle. Then test your program with a cycleList function.


// Sorting a list
// Write an algorithm that will sort a given linked list. For example given a list such as 3->2->5->7->1, your program will output the sorted version of this list which will be 1->2->3->5->7. You may not use another list or any other data structure such as an array to store the data.
