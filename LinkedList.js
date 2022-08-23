class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}
  
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // naming methods the same as properties in the constructor causes lookup problems
    getHead(){
        return this.head;
    }

    getTail(){
        if(this.size === 0){
            return null;
        }
        let curr = this.head;
        while (curr.next) {
          curr = curr.next;
        }
        return curr;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }
  
    prepend(value) {
      const node = new Node(value);
      if (this.isEmpty()) {
        this.head = node;
      } else {
        node.next = this.head;
        this.head = node;
      }
      this.size++;
    }
  
    append(value) {
      const node = new Node(value);
      if (this.isEmpty()) {
        this.head = node;
      } else {
        let curr = this.head;
        while (curr.next) {
          curr = curr.next;
        }
        curr.next = node;
      }
      this.size++;
    }
  
    insertAt(value, index) {
      if (index < 0 || index > this.size) {
        return;
      }
      if (index === 0) {
        this.prepend(value);
      } else {
        const node = new Node(value);
        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
          prev = prev.next;
        }
        node.next = prev.next;
        prev.next = node;
        this.size++;
      }
    }

    at(index) {
      if (index < 0 || index >= this.size) {
        return null;
      }
      let foundNode;
      if (index === 0) {
        foundNode = this.head;
      } else {
        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
          prev = prev.next;
        }
        foundNode = prev.next;
      }
      return foundNode;
    }
  
    removeAt(index) {
      if (index < 0 || index >= this.size) {
        return null;
      }
      let removedNode;
      if (index === 0) {
        removedNode = this.head;
        this.head = this.head.next;
      } else {
        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
          prev = prev.next;
        }
        removedNode = prev.next;
        prev.next = removedNode.next;
      }
      this.size--;
      return removedNode.value;
    }
  
    removeValue(value) {
      if (this.isEmpty()) {
        return null;
      }
      if (this.head.value === value) {
        this.head = this.head.next;
        this.size--;
        return value;
      } else {
        let prev = this.head;
        while (prev.next && prev.next.value !== value) {
          prev = prev.next;
        }
        if (prev.next) {
          const removedNode = prev.next;
          prev.next = removedNode.next;
          this.size--;
          return value;
        }
        return null;
      }
    }

    pop() {
      if (this.isEmpty()) {
        return null;
      }
    
      let prev = this.head;
      while(prev.next.next !== null){
        prev = prev.next
      }
      prev.next = null;
      this.size--;
      return prev
    }
    
    contains(value) {
        if (this.isEmpty()) {
          return false;
        }
        let i = 0;
        let curr = this.head;
        while (curr) {
          if (curr.value === value) {
            return true;
          }
          curr = curr.next;
          i++;
        }
        return false;
      }
  
    find(value) {
      if (this.isEmpty()) {
        return null;
      }
      let i = 0;
      let curr = this.head;
      while (curr) {
        if (curr.value === value) {
          return i;
        }
        curr = curr.next;
        i++;
      }
      return null;
    }
  
    reverse() {
      let prev = null;
      let curr = this.head;
      while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
      }
      this.head = prev;
    }
  
    toString() {
      if (this.isEmpty()) {
        return null;
      } else {
        let curr = this.head;
        let list = "";
        while (curr) {
          list += `${curr.value} -> `;
          curr = curr.next;
        }
        list += 'null'
        return list;
      }
    }


}

LinkedList.fromValues = function(...values) {
  const ll = new LinkedList()
  for (let i = values.length - 1; i >= 0; i--) {
    ll.prepend(values[i])
  }
  return ll
}
  
module.exports = LinkedList