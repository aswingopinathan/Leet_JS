class Node{
    constructor(data,next){
        this.data=data;
        this.next=next;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }

    insertFirst(data){
        this.head=new Node(data,this.head)
    }
}

const ll=new LinkedList()

ll.insertFirst(100)

console.log(ll);