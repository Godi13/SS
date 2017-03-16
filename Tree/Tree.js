function Tree() {
  var root = null

  function Node(key) {
    this.key = key
    this.left = null
    this.right = null
  }

  function insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode
      } else {
        insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        insertNode(node.right, newNode)
      }
    }
  }

  this.insert = key => {
    var newNode = new Node(key)

    if (root === null) {
      root = newNode
    } else {
      insertNode(root, newNode)
    }
  }

  //中序
  function inOrderTraverseNode(node, callback) {
    if (node !== null) {
      inOrderTraverseNode(node.left, callback)
      callback(node.key)
      inOrderTraverseNode(node.right, callback)
    }
  }

  this.inOrderTraverse = callback => inOrderTraverseNode(root, callback)

  //前序
  function preOrderTraverseNode(node, callback) {
    if (node !== null) {
      callback(node.key)
      preOrderTraverseNode(node.left, callback)
      preOrderTraverseNode(node.right, callback)
    }
  }

  this.preOrderTraverse = callback => preOrderTraverseNode(root, callback)

  //后序
  function postOrderTraverseNode(node, callback) {
    if (node !== null) {
      postOrderTraverseNode(node.left, callback)
      postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }

  this.postOrderTraverse = callback => postOrderTraverseNode(root, callback)

  this.values = (traverseFuc) => {
    var keyList = []
    this[traverseFuc](key => keyList.push(key))
    return keyList
  }
}

module.exports = Tree
