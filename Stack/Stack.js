function Stack() {
  var items = []

  this.isEmpty = () => items.length == 0
  this.push = (v) => items.push(v)
  this.pop = (v) => items.pop()
  this.toString = () => items.toString()
  this.peek = () => items[items.length - 1]
  this.size = () => items.length
  this.clear = () => items.length = 0
}

module.exports = Stack;
