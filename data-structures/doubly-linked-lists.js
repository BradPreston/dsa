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
	unshift(val) {
		const newNode = new Node(val);
		if (this.head === null) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.head.prev = newNode;
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}
	get(index) {
		if (index < 0 || index >= this.length) return null;
		const middle = this.length / 2;
		let counter, current;
		if (index <= middle) {
			counter = 0;
			current = this.head;
			while (counter < index) {
				current = current.next;
				counter++;
			}
		} else {
			counter = this.length - 1;
			current = this.tail;
			while (counter > index) {
				current = current.prev;
				counter--;
			}
		}
		return current;
	}
	set(index, value) {
		const node = this.get(index);
		if (node === null) return false;
		node.val = value;
		return true;
	}
	insert(index, value) {
		if (index < 0 || index >= this.length) return false;
		if (index === 0) {
			this.unshift(value);
			return true;
		}
		if (index === this.length) {
			this.push(value);
			return true;
		}
		const newNode = new Node(value);
		const nodeBeforeInsert = this.get(index - 1);
		const nodeAfterInsert = nodeBeforeInsert.next;
		nodeAfterInsert.prev = newNode;
		newNode.next = nodeAfterInsert;
		nodeBeforeInsert.next = newNode;
		newNode.prev = nodeBeforeInsert;
		this.length++;
		return true;
	}
}
