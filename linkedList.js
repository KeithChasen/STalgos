class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {

    }

    unshift(value) {

    }

    insert(value) {

    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const myLinkedList = new LinkedList(4);

console.log(myLinkedList)