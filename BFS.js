class BSTNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BST {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new BSTNode(value);
      if (!this.root) {
        this.root = newNode;
        return;
      } else {
        let vertex = this.root;
        while (true) {
          if (value > vertex.value) {
            // Go right
            if (!vertex.right) {
              // Right is empty - this is the place to insert the value
              vertex.right = newNode;
              return;
            } else vertex = vertex.right;
          } else if (value < vertex.value) {
            // Go Left
            if (!vertex.left) {
              vertex.left = newNode;
              return;
            } else {
              vertex = vertex.left;
            }
          }
        }
      }
    }
  
    // find(value) {}
  
    BFS() {
      const data = [];
      const queue = [];
      if (!this.root) return undefined;
      queue.push(this.root);
      let currentNode = null;
      while (queue.length) {
        currentNode = queue.shift();
        data.push(currentNode.value);
        if (currentNode.right) queue.push(currentNode.right);
        if (currentNode.left) queue.push(currentNode.left);
      }
      return data;
    }
  }
  
  const myBST = new BST();
  myBST.insert(41);
  myBST.insert(20);
  myBST.insert(11);
  myBST.insert(29);
  myBST.insert(32);
  myBST.insert(65);
  myBST.insert(50);
  myBST.insert(91);
  myBST.insert(72);
  myBST.insert(99);
  console.log(myBST.BFS());