function Queue() {
  var items = []

  this.enqueue = (e) => items.push(e)
  this.front = () => items[0]
  this.toString = () => items.toString()
  this.size = () => items.length
  this.isEmpty = () => items.length == 0
  this.dequeue = () => items.shift()

}

module.exports = Queue
