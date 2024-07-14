class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new TreeNode(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data.id < node.data.id) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  search(id) {
    return this.searchNode(this.root, id);
  }

  searchNode(node, id) {
    if (node === null) {
      return null;
    }
    if (id < node.data.id) {
      return this.searchNode(node.left, id);
    } else if (id > node.data.id) {
      return this.searchNode(node.right, id);
    } else {
      return node.data;
    }
  }

  searchRange(minId, maxId, results = []) {
    this.searchRangeNode(this.root, minId, maxId, results);
    return results;
  }

  searchRangeNode(node, minId, maxId, results) {
    if (node === null) {
      return;
    }
    if (minId < node.data.id) {
      this.searchRangeNode(node.left, minId, maxId, results);
    }
    if (minId <= node.data.id && maxId >= node.data.id) {
      results.push(node.data);
    }
    if (maxId > node.data.id) {
      this.searchRangeNode(node.right, minId, maxId, results);
    }
  }
}

export default BST;
