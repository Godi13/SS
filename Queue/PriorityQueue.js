function PriorityQueue() {
  var items = []
  function QueueElement(element, priority) {
    this.element = element
    this.priority = priority
  }

  this.isEmpty = () => items.length == 0
  this.enqueue = (element, priority) => {
    var queueElement = new QueueElement(element, priority)

    if (this.isEmpty()) {
      items.push(queueElement)
    } else {
      var added = false
      for (var i = 0; i < items.length; i++) {
        if (queueElement.priority < items[i].priority) {
          items.splice(i, 0, queueElement)
          added = true
          break
        }
      }

      if (!added) {
        items.push(queueElement)
      }
    }
  }

  this.toString = () => {
    var str = ''
    for (var i = 0; i < items.length; i++) {
      str += items[i].element + '-' + items[i].priority + (items.length - i > 1 ? ',' : '')
    }
    return str
  }

  this.front = () => items[0]
  this.size = () => items.length
  this.dequeue = () => items.shift()
}

module.exports = PriorityQueue
