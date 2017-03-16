function ArrayList() {
  var items = []

  this.insert = n => items.push(n)
  this.toString = () => items.toString()

  function swap(index1, index2) {
    var temp = items[index1]
    items[index1] = items[index2]
    items[index2] = temp
  }

  this.bubbleSort = () => {
    for (var i = 0; i < items.length; i++) {
      for (var j = 0; j < items.length - 1 - i; j++) {
        if (items[j] > items[j + 1]) {
          swap(j, j+1)
        }
      }
    }
  }

}

module.exports = ArrayList
