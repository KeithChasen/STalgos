class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length ++;
        return this;
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

myLinkedList.push(7)

myLinkedList.push(10)

console.log(myLinkedList)