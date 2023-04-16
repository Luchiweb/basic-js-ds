const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
	constructor() {
		this._queue = new ListNode(null);
	}

	getUnderlyingList() {
		const elem = this._queue;
		if (!elem.value) return null;

		return elem;
	}

	enqueue(value) {
		let elem = this._queue;
		if (!elem.value) this._queue.value = value;
		else {
			while (elem.next !== null) elem = elem.next;
			elem.next = new ListNode(value);
		}
	}

	dequeue() {
		let q = this.getUnderlyingList();
		if (!q.value) return null;

		const deletedValue = q.value;
		this._queue = q.next;

		return deletedValue;
	}
}

module.exports = {
	Queue,
};
