const LinkedList = require('./LinkedList')

describe('Helper methods', () => {
    test('#getHead', () => {
      let list
      list = new LinkedList()
      expect(list.getHead()).toBeNull()
      list = LinkedList.fromValues(10, 20)
      expect(list.getHead().value).toBe(10)
    })

    test('#isEmpty', () => {
      const list = new LinkedList()
      expect(list.isEmpty()).toBe(true)
    })

    test('#getTail', () => {
        let list
        list = new LinkedList()
        expect(list.getTail()).toBeNull()
        list = LinkedList.fromValues(10, 20)
        expect(list.getTail().value).toBe(20);
    })

    test('#getSize', () => {
        const list = LinkedList.fromValues(10, 20)
        expect(list.getSize()).toBe(2)
    })

    // actually found an error with this test
    test('#pop', () => {
        let list
        list = new LinkedList()
        expect(list.pop()).toBeNull()
        list = LinkedList.fromValues(10, 20, 30)
        expect(list.pop().value).toBe(20)
        expect(list.getSize()).toBe(2)
    })

    test('#toString', ()=> {
      let list
      list = new LinkedList()
      expect(list.toString()).toBeNull()
      list = LinkedList.fromValues(10, 20, 30)
      expect(list.toString()).toBe('10 -> 20 -> 30 -> null')
    })

    test('#reverse', ()=> {
      const list = LinkedList.fromValues(50,40,30)
      list.reverse()
      expect(list.getHead().value).toBe(30)
      expect(list.getTail().value).toBe(50)
    })
})

describe('Adding & Subtracting nodes', () => {
    test('append to empty list', () => {
      const list = new LinkedList()
      list.append(10)
      expect(list.getHead().value).toBe(10)
      expect(list.getSize()).toBe(1)
    })

    test('prepend to empty list', () => {
        const list = new LinkedList()
        list.prepend(10)
        expect(list.getHead().value).toBe(10)
        expect(list.getSize()).toBe(1)
    })

    test('append to existing list', () => {
        const list = LinkedList.fromValues(1, 2)
        list.append(3)
        expect(list.getSize()).toBe(3)
        expect(list.getTail().value).toBe(3)
    })

    test('prepend to existing list', () => {
        const list = LinkedList.fromValues(1, 2)
        list.prepend(3)
        expect(list.getSize()).toBe(3)
        expect(list.getHead().value).toBe(3)
    })

    // line 73 ?
    test('#insertAt', ()=> {
      let list
      list = new LinkedList()
      expect(list.insertAt(10, 2)).toBe(undefined) // function returns with no changes
      list = LinkedList.fromValues(10,20,30)
      list.insertAt(40,0)
      expect(list.getHead().value).toBe(40)
      list.insertAt(44, 1)
      expect(list.getHead().next).toEqual({value: 44, next: {value:10, next: {value: 20, next: {value: 30, next: null}}}})
      expect(list.getSize()).toBe(5)
    })

    test('#removeValue', ()=> {
      let list
      list = new LinkedList()
      expect(list.removeValue(10)).toBeNull()
      list = LinkedList.fromValues(10,20,30)
      list.removeValue(10)
      expect(list.getHead().value).toBe(20)
      expect(list.getSize()).toBe(2)
      expect(list.removeValue(40)).toBeNull()
      list.removeValue(30)
      expect(list.getTail().value).toBe(20)
      expect(list.getSize()).toBe(1)
    })

})

describe('Search and Index Methods', ()=> {
  test('#find', ()=> {
    let list
    list = new LinkedList()
    expect(list.find(23)).toBeNull()
    list = LinkedList.fromValues(10, 20, 30)
    expect(list.find(20)).toBe(1)
    expect(list.find(40)).toBeNull()
  })

  test('#contains', () => {
    let list
    list= new LinkedList()
    expect(list.contains(2)).toBe(false)
    list = LinkedList.fromValues(10, 20)
    expect(list.contains(20)).toBe(true)
    expect(list.contains(55)).toBe(false)
  })

  test('#at', ()=> {
    let list
    list = new LinkedList()
    expect(list.at(1)).toBeNull()
    list = LinkedList.fromValues(10,20,30)
    expect(list.at(0).value).toBe(10)
    expect(list.at(2).value).toBe(30)
  })

  test('#removeAt', ()=> {
    let list
    list = new LinkedList()
    expect(list.removeAt(1)).toBeNull()
    list = LinkedList.fromValues(10,20,30,40)
    list.removeAt(0)
    expect(list.getHead().value).toBe(20)
    expect(list.getSize()).toBe(3)
    list.removeAt(2)
    expect(list.getSize()).toBe(2)
  })

})