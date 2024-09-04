class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// Recursive solution
// function treeTraversalInorder(root) {
//   // type your code here
//   if (root === null)
//     return [];

//   console.log("curr: ", root.value, 
//     ", left: ", root.left === null ? null : root.left.value,
//     ", right: ", root.right === null ? null : root.right.value);
  
//   const res = treeTraversalInorder(root.left);
//   res.push(root.value);
//   res.push(...treeTraversalInorder(root.right));
//   return res;
// }

// Iterative solution
function treeTraversalInorder(root) {
  if (root === null)
    return [];

  class StackItem {
    constructor(node=null, visited=false) {
      this.node = node;
      this.visited = visited;
    }
  }

  const stack = [];
  const res = [];
  stack.push(new StackItem(root, false));
  while (stack.length > 0) {
    const sItem = stack.pop();
    const curNode = sItem.node;
    if (sItem.visited) {
      res.push(curNode.value);
    } else {
      if (curNode.right !== null) {
        const sItemRight = new StackItem(curNode.right, false);
        stack.push(sItemRight);
      }
      sItem.visited = true;
      stack.push(sItem);
      if (curNode.left !== null) {
        const sItemLeft = new StackItem(curNode.left, false);
        stack.push(sItemLeft);
      }
    }
  }

  return res;
}

if (require.main === module) {
  // add your own tests in here
  let root = new Node(2, new Node(-10), new Node(20));
  console.log("Expecting: [-10, 2, 20]");
  console.log(treeTraversalInorder(root));

  console.log("");

  root = new Node(10, new Node(0, null, new Node(5)), new Node(20, null, new Node(30)));
  console.log("Expecting: [0, 5, 10, 20, 30] ");
  console.log(treeTraversalInorder(root));

  root = new Node(1);
  console.log("");
  console.log("Expecting: [1]");
  console.log(treeTraversalInorder(root));

  root.left = new Node(2);
  console.log("");
  console.log("Expecting: [2, 1]");
  console.log(treeTraversalInorder(root));

  root.right = new Node(3);
  console.log("");
  console.log("Expecting: [2, 1. 3]");
  console.log(treeTraversalInorder(root));

  root = new Node(1);
  root.left = new Node(2);
  root.left.right = new Node(3);
  console.log("");
  console.log("Expecting: [2, 3, 1]");
  console.log(treeTraversalInorder(root));
}

module.exports = {
  Node,
  treeTraversalInorder
};

// Please add your pseudocode to this file
// And a written explanation of your solution
