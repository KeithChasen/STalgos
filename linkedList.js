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

    pop() {
        if (!this.head) return undefined;

        // creating temp and next 
        // to fetch last item to be (previous before temp)
        // 
        let temp = this.head;
        let pre = this.head;

        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }

        this.tail = pre;
        this.tail.next = null;
        this.length--;

        if (!this.length) {
            this.head = null;
            this.tail = null;
        }

        return temp;
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

myLinkedList.pop();

console.log(myLinkedList)