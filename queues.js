// class Queue {
//   constructor() {
//     this.list = []
//   }

//   size() {
//     return this.list.length
//   }

//   enqueue(item) {
//     this.list.push(item)
//   }

//   dequeue() {
//     return this.list.shift()
//   }
// }
class Queue {
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(element) {
    this.storage[this.tail] = element;
    this.tail++;
  }
  dequeue() {
    let removed = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return removed;
  }
}

const queue = new Queue();

queue.enqueue("apple");
queue.enqueue("banana");
queue.enqueue("blueberry");

queue.dequeue("apple");

queue.enqueue("strawberry");
