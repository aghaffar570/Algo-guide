/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */


// Question #938
// O(n) time | O(d) space/ depth of tree
const rangeSumBST = (root, L, R) => {
  let sum = 0

  function BFS (node) {
    if(node) {
      if(node.val >= L && node.val <= R) sum += node.val;
      if(node.val >= L) BFS(node.left);
      if(node.val <= R) BFS(node.right);
    }
  }

  BFS(root)
  return sum
}
