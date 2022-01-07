// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.size = 0;
//   }

//   push(data) {
//     let node = new Node(data);
//     if (!this.first) {
//       this.first = node;
//       this.last = node;
//     } else {
//       node.next = this.first;
//       this.first = node;
//     }

//     this.size++;
//   }
//   pop() {
//     if (!this.first) return null;

//     let node = this.first;

//     if (node.next) {
//       node = node.next;
//       this.first = node;
//     } else {
//       this.first = null;
//       this.last = null;
//     }

//     this.size--;
//   }
//   transverse() {
//     let node = this.first;
//     let data = [];
//     while (node) {
//       data.push(node.data);
//       node = node.next;
//     }
//     return data;
//   }
// }

// const stack1 = new Stack();

// stack1.push("");
// stack1.push("Day1");
// stack1.push("");

// const path = stack1.transverse();
// const reversedPath = path.reverse();
// const actual_path = reversedPath.join("/");

// console.log(actual_path);
import React from "react";
/**
 * Selected model id
 * @type {React.Context<[number,React.Dispatch<number>]>}
 */
export const StackContext = React.createContext(new Array());
