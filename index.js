// import {
// 	bubbleSort,
// 	selectionSort,
// 	insertionSort,
// 	mergeSort,
// 	quickSort,
// 	radixSort,
// } from "./algorithms/sorting/index.js";
// const arr = Array.from({ length: 10000 }, () =>
// 	Math.floor(Math.random() * 10000)
// );
// console.time("Execution Time");
// await console.log(radixSort(arr));
// console.timeEnd("Execution Time");
import { SinglyLinkedList } from "./data-structures/singly-linked-lists.js";

const list = new SinglyLinkedList();
list.push("hello");
list.push("there");
list.push("my");
list.push("friend");
const val = list.shift();
console.log(val);
console.log("==============");
list.unshift("hello");
list.set(1, "again");
list.traverse();
