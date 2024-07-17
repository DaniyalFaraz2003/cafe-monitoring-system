const filterDate = (dateString, filterType) => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const currentDate = today.getDate();
  const currentDay = today.getDay();

  const startOfWeek = new Date(today);
  startOfWeek.setDate(currentDate - currentDay);

  const endOfWeek = new Date(today);
  endOfWeek.setDate(currentDate + (6 - currentDay));

  const date = new Date(dateString);
  const dateYear = date.getFullYear();
  const dateMonth = date.getMonth();
  const dateDate = date.getDate();

  switch (filterType) {
    case 'daily':
      return (
        dateYear === currentYear &&
        dateMonth === currentMonth &&
        dateDate === currentDate
      );

    case 'weekly':
      return date >= startOfWeek && date <= endOfWeek;

    case 'monthly':
      return (
        dateYear === currentYear &&
        dateMonth === currentMonth
      );

    default:
      return false;
  }
};




class AVLTreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}


class AVLTree {
  constructor() {
    this.root = null;
  }

  // Helper function to get the height of a node
  getHeight(node) {
    if (node === null) return 0;
    return node.height;
  }

  // Helper function to get the balance factor of a node
  getBalanceFactor(node) {
    if (node === null) return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  // Right rotate
  rightRotate(y) {
    const x = y.left;
    const T2 = x.right;

    x.right = y;
    y.left = T2;

    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
    x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;

    return x;
  }

  // Left rotate
  leftRotate(x) {
    const y = x.right;
    const T2 = y.left;

    y.left = x;
    x.right = T2;

    x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

    return y;
  }

  timeTraversal(time) {
    const result = [];
    this.timeTraversalHelper(time, this.root, result);
    return result;
  }

  timeTraversalHelper(time, node, result) {
    if (node !== null) {
      if (filterDate(node.data.mealdate, time)) {
        result.push(node.data);
      }
      this.timeTraversalHelper(time, node.left, result);
      this.timeTraversalHelper(time, node.right, result);
    }
  }



  prefixTraversal(prefix) {
    const result = [];
    this.prefixTraversalHelper(prefix, this.root, result);
    return result;
  }

  prefixTraversalHelper(prefix, node, result) {
    if (node !== null) {
      if (String(node.data.id).startsWith(prefix)) {
        result.push(node.data);
      }
      this.prefixTraversalHelper(prefix, node.left, result);
      this.prefixTraversalHelper(prefix, node.right, result);
    }
  }

  preorderTraversal() {
    const result = [];
    this.preorderHelper(this.root, result);
    return result;
  }
  // the preorder function is used to traverse the tree in the following order: root, left, right
  //its purpose is to return the data of the nodes in the tree in the order of root, left, right
  preorderHelper(node, result) {
    // if the node is not null, push the data of the node to the result array
    if (node !== null) {
      result.push(node.data);
      this.preorderHelper(node.left, result);
      this.preorderHelper(node.right, result);
    }
  }

  // Insert a node
  insert(data) {
    this.root = this.insertNode(this.root, data);
  }


  insertNode(node, data) {
    if (node === null) return new AVLTreeNode(data);

    if (data.id <= node.data.id) {
      node.left = this.insertNode(node.left, data);
    } else if (data.id > node.data.id) {
      node.right = this.insertNode(node.right, data);
    }

    node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

    const balance = this.getBalanceFactor(node);

    // Left Left Case
    if (balance > 1 && data.id < node.left.data.id) return this.rightRotate(node);

    // Right Right Case
    if (balance < -1 && data.id > node.right.data.id) return this.leftRotate(node);

    // Left Right Case
    if (balance > 1 && data.id > node.left.data.id) {
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }

    // Right Left Case
    if (balance < -1 && data.id <= node.right.data.id) {
      node.right = this.rightRotate(node.right);
      return this.leftRotate(node);
    }
    //
    return node;
  }

  // Search for a node
  search(id) {
    return this.searchNode(this.root, id);
  }

  searchNode(node, id) {
    if (node === null) return null;

    if (id < node.data.id) return this.searchNode(node.left, id);
    else if (id > node.data.id) return this.searchNode(node.right, id);
    else return node.data;
  }

  // Search for a range of nodes
  searchRange(minId, maxId) {
    const results = [];
    this.searchRangeNode(this.root, minId, maxId, results);
    return results;
  }

  searchRangeNode(node, minId, maxId, results) {
    if (node === null) return;

    if (minId < node.data.id) this.searchRangeNode(node.left, minId, maxId, results);

    if (minId <= node.data.id && maxId >= node.data.id) results.push(node.data);

    if (maxId > node.data.id) this.searchRangeNode(node.right, minId, maxId, results);
  }
}

export default AVLTree;
