function Node(element) {
  this.element = element
  this.next = null
}

function Chain() {
  this.head = null
  this.length = 0

  this.append = (element) => {
    var node = new Node(element), current
    if (this.head === null) {
      this.head = node
    } else {
      current = this.head
      while(current.next) {
        current = current.next
      }
      current.next = node
    }
    this.length++
  }

  this.toString = () => {
    var current = this.head, str = ''
    while (current) {
      str += current.element + (current.next ? ',' : '')
      current = current.next
    }
    return str
  }

  this.removeAt = position => {
    if (position > -1 && position < this.length) {
      var current = this.head, previous, index = 0

      if (position == 0) {
        this.head = current.next
      } else {
        while (index < position) {
          previous = current
          current = current.next
          index++
        }
        previous.next = current.next
      }
      this.length--
      return current.element
    }
    return null
  }

  this.insert = (position, element) => {
    if (position > -1 && position <= this.length) {
      var node = new Node(element),
          current = this.head,
          previous,
          index = 0

      if (position === 0) {
        node.next = current
        this.head = node
      } else {
        while (position > index) {
          previous = current
          current = current.next
          index++
        }
        node.next = current
        previous.next = node
      }
      this.length++
      return true
    }
    return null
  }

  this.indexOf = (element) => {
    var current = this.head, index = 0

    while (current) {
      if (element === current.element) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }
}

module.exports = Chain
