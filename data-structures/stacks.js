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
}