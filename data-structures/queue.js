class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

export class Queue {
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
	enqueue(val) {
		const newNode = new Node(val);
		if (this.size === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		this.size++;
		return this;
	}
}
