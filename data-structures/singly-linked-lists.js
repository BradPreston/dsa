// stores a piece of data
// reference to next node

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

export class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		let v = new Node(val);
		if (this.head === null) {
			this.head = v;
			this.tail = v;
		} else {
			this.tail.next = v;
			this.tail = v;
		}
		this.length++;
		return this;
	}
	traverse() {
		let current = this.head;
		while (current) {
			console.log(current.val);
			current = current.next;
		}
	}
	pop() {
		if (this.head === null) return undefined;
		let current = this.head;
		let newTail = current;
		while (current.next) {
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}
	shift() {
		if (this.head === null) return undefined;
		let current = this.head;
		this.head = current.next;
		current.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}
	unshift(val) {
		const newNode = new Node(val);
		if (this.head === null) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this.length++;
		return this;
	}
	get(index) {
		if (index < 0 || index >= this.length) return null;
		let counter = 0;
		let current = this.head;
		while (counter < index) {
			current = current.next;
			counter++;
		}
		return current;
	}
	set(index, value) {
		let node = this.get(index);
		if (node === null) return false;
		node.val = value;
		return true;
	}
	insert(index, value) {
		if (index < 0 || index >= this.length) return false;
		if (index === this.length) {
			this.push(val);
			return true;
		}
		if (index === 0) {
			this.unshift(val);
			return true;
		}
		const newNode = new Node(value);
		let nodeBeforeInsert = this.get(index - 1);
		newNode.next = nodeBeforeInsert.next;
		nodeBeforeInsert.next = newNode;
		this.length++;
		return true;
	}
}
