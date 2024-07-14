class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
// class BST is used to create a binary search tree
class BST {
  //constructor is used to initialize the root of the tree
  constructor() {
    this.root = null;
  }
//insert method is used to insert a node in the tree
  insert(data) {
    const newNode = new TreeNode(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  //differnece between insert and insertNode is that insertNode is a recursive function that is used to insert a node in the tree
  //it takes two parameters the node and the new node to be inserted
  //if the new node is less than the node then it is inserted in the left subtree

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
  //search method is used to search for a node in the tree
//searchNode is a recursive function that is used to search for a node in the tree
  search(id) {
    return this.searchNode(this.root, id);
  }
// searchNode is a recursive function that is used to search for a node in the tree
  searchNode(node, id) {
    if (node === null) {
      return null;
    }
    //if the id is less than the node id then we search in the left subtree
    if (id < node.data.id) {
      return this.searchNode(node.left, id);
    } else if (id > node.data.id) {
      return this.searchNode(node.right, id);
    } else {
      return node.data;
    }
  }
//searchRange is used to search for a range of nodes in the tree by providing the minimum and maximum id
//results is an array that is used to store the results of the search
  searchRange(minId, maxId, results = []) {
    this.searchRangeNode(this.root, minId, maxId, results);
    return results;
  }
//
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
    //if the maxId is greater than the node id then we search in the right subtree
    if (maxId > node.data.id) {
      this.searchRangeNode(node.right, minId, maxId, results);
    }
  }
}

export default BST;
