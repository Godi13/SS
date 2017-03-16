const ArrayList = require('./Bubble')

test('Bubble', () => {
  function createNonSortedArray() {
    var array = new ArrayList()
    array.insert(1)
    array.insert(3)
    array.insert(5)
    array.insert(4)
    array.insert(2)
    return array
  }

  var arr = createNonSortedArray()
  expect(arr.toString()).toBe('1,3,5,4,2')
  arr.bubbleSort()
  expect(arr.toString()).toBe('1,2,3,4,5')
})
