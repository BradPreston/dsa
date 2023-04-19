class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

export class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}
	print() {
		let current = this.first;
		while (current) {
			console.log(current);
			current = current.next;
		}
	}
	push(val) {
		const newNode = new Node(val);
		if (this.size === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			let currentFirst = this.first;
			this.first = newNode;
			newNode.next = currentFirst;
		}
		this.size++;
		return this;
	}
	pop() {
		if (this.size === 0) return null;
		const oldFirst = this.first;
		if (this.size === 1) {
			this.last = null;
		}
		this.first = oldFirst.next;
		oldFirst.next = null;
		this.size--;
		return oldFirst;
	}
}
