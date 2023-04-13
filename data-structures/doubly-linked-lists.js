class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

export class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	print() {
		let current = this.head;
		while (current) {
			console.log(current.val);
			current = current.next;
		}
	}
	push(val) {
		const newNode = new Node(val);
		if (this.head === null) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}
	pop() {
		if (this.length === 0) return null;
		let currentTail = this.tail;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = currentTail.prev;
			this.tail.next = null;
			this.tail.prev = null;
			currentTail.prev = null;
		}
		this.length--;
		return currentTail;
	}
	shift() {
		if (this.length === 0) return null;
		let currentHead = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = currentHead.next;
			this.head.prev = null;
			currentHead.next = null;
		}
		this.length--;
		return currentHead;
	}
}
