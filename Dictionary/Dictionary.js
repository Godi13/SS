function Dictionary() {
  var items = {}

  // this.has = key => items.hasOwnProperty(key)
  this.has = key => key in items
  this.set = (key, value) => items[key] = value
  this.get = (key) => items[key]
  this.remove = (key) => {
    if (items[key]) {
      delete items[key]
      return true
    }
    return false
  }
  this.values = () => Object.values(items)
  this.getItems = () => items
}

module.exports = Dictionary
