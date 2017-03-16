const Set = require('./Set')

test('Set', () => {
  const set = new Set()

  expect(set.add(1)).toBeTruthy()
  expect(set.add(1)).toBeFalsy()
  expect(set.add(2)).toBeTruthy()

  expect(set.has(1)).toBeTruthy()
  expect(set.has(3)).toBeFalsy()

  expect(set.remove(1)).toBeTruthy()
  expect(set.remove(1)).toBeFalsy()

  expect(set.size()).toBe(1)
  expect(set.values()).toEqual(['2'])

  //并集
  var otherSet = new Set()
  otherSet.add(1)
  otherSet.add(3)
  var unionSet = set.union(otherSet)
  expect(unionSet.values()).toEqual(['1','2','3'])

  //交集
  var otherSet = new Set()
  set.add(1)
  otherSet.add(2)
  otherSet.add(3)
  var intersectionSet = set.intersection(otherSet)
  expect(intersectionSet.values()).toEqual(['2'])

  //差集
  var differenceSet = set.difference(otherSet)
  expect(differenceSet.values()).toEqual(['1'])

  //子集
  set.add(3)
  expect(set.subset(otherSet)).toBeFalsy()
  set.remove(3)
  expect(set.subset(otherSet)).toBeFalsy()
  set.remove(1)
  expect(set.subset(otherSet)).toBeTruthy()

})
