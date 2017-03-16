const Chain = require('./Chain')

test('Chain', () => {
  const chain = new Chain()

  chain.append(15)
  chain.append(10)
  expect(chain.toString()).toBe('15,10')

  expect(chain.removeAt(-1)).toBe(null)
  expect(chain.removeAt(3)).toBe(null)
  expect(chain.length).toBe(2)
  expect(chain.removeAt(1)).toBe(10)
  expect(chain.removeAt(0)).toBe(15)
  expect(chain.length).toBe(0)
  expect(chain.toString()).toBe('')

  expect(chain.insert(0, 15))
  expect(chain.insert(1, 12))
  expect(chain.insert(0, 10))
  expect(chain.insert(-1, 8))
  expect(chain.insert(4, 8))
  expect(chain.toString()).toBe('10,15,12')

  chain.append(15)
  chain.append(10)
  expect(chain.indexOf(12)).toBe(2)
  expect(chain.indexOf(8)).toBe(-1)
})
