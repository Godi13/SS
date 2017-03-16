const Tree = require('./Tree')

test('Tree', () => {
  const binarySearchTree = new Tree()

  binarySearchTree.insert(11)
  binarySearchTree.insert(7)
  binarySearchTree.insert(13)
  binarySearchTree.insert(5)
  binarySearchTree.insert(3)
  binarySearchTree.insert(9)

  expect(binarySearchTree.values('inOrderTraverse')).toEqual([3,5,7,9,11,13])
  expect(binarySearchTree.values('preOrderTraverse')).toEqual([11,7,5,3,9,13])
  expect(binarySearchTree.values('postOrderTraverse')).toEqual([3,5,9,7,13,11])
})
