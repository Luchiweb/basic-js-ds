const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
	constructor() {
		this._root = null;
		this._min = null;
		this._max = null;
	}

	root() {
		return this._root;
	}

	add(data) {
		if (!this._min) {
			this._min = data;
			this._max = data;
		} else {
			if (this._min > data) this._min = data;
			else if (this._max < data) this._max = data;
		}

		const root = this.root();
		if (!root) this._root = new Node(data);
		else this._insertNode(root, data);
	}

	has(data) {
		return this.find(data) !== null;
	}

	find(data) {
		return this._find(this.root(), data);
	}

	remove(data) {
		this._remove(this.root(), data);
	}

	min() {
		return this._min;
	}

	max() {
		return this._max;
	}

	_find(root, findVal) {
		if (!root) return null;
		else if (root.data === findVal) return root;

		if (root.data < findVal) return this._find(root.right, findVal);
		else return this._find(root.left, findVal);
	}

	_insertNode(root, val) {
		if (root.data > val) {
			if (!root.left) root.left = new Node(val);
			else this._insertNode(root.left, val);
		} else {
			if (!root.right) {
				root.right = new Node(val);
			} else this._insertNode(root.right, val);
		}
	}

	_remove(root, val) {
		if (root === null) return root;

		if (root.data > val) {
			root.left = this._remove(root.left, val);
			return root;
		} else if (root.data < val) {
			root.right = this._remove(root.right, val);
			return root;
		}

		if (!root.left) {
			const temp = root.right;
			return temp;
		} else if (!root.right) {
			const temp = root.left;
			return temp;
		} else {
			let parent = root;
			let successor = root.right;

			while (successor.left) {
				parent = successor;
				successor = successor.left;
			}

			if (parent != root) parent.left = successor.right;
			else parent.right = successor.right;

			root.data = successor.data;

			return root;
		}
	}
}

module.exports = {
	BinarySearchTree,
};
