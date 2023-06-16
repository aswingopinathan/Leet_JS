var reverseList = function(head) {
    let prev=null;
    let current=head;
    let next=null;
    while(current){
        next=current.next;
        current.next=prev;
        prev=current;
        current=next;
    }
    return prev;
    // if(head === null) return head;
    // let arr = [];
    // while (head) {
    //     arr.push(head)
    //     head = head.next;
    // }    
    // arr[0].next = null;
    // for (let i = 1; i < arr.length; i++) {
    //     arr[i].next = arr[i-1]
    // }
    // return arr[arr.length-1];
};

console.log(reverseList([1,2,3,4,5]));