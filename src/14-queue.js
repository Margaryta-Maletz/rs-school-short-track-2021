const ListNode = require('../extensions/list-node');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  get size() {
    return this.count;
  }

  enqueue(element) {
    if (this.count === 0) {
      this.head = new ListNode(element);
      this.tail = this.head;
    } else {
      this.tail.next = new ListNode(element);
      this.tail = this.tail.next;
    }
    this.count++;
    return this.tail;
  }

  dequeue() {
    const delElem = this.head.value;
    this.count--;
    this.head = this.head.next;
    return delElem;
  }
}

module.exports = Queue;
