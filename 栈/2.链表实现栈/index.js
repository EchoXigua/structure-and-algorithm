class Node {
  no
  next
  constructor(no) {
    this.no = no
    this.next = null
  }
}

class LinkedStack {
  head

  constructor() {
    this.head = new Node(0)
  }
  //这个地方就不存在顺序插入了
  push(num) {
    let head = this.head
    while (true) {
      if (head.next == null) {
        break
      }
      head = head.next
    }
    const node = new Node(num)
    head.next = node
  }

  pop() {
    if (this.empty()) {
      console.log('栈为空');
      return
    }
    /**
     * 方法1.
        head 就为倒是第二个节点
        head.next 为最后一个节点
     */
    let head = this.head.next
    while (true) {
      if (head.next.next == null) {
        break
      }
      head = head.next
    }

    const value = head.next.next
    head.next = null
    return value

    /**
     * 方法2.另外一种思路是根据链表的长度，删除倒数第一个节点
     * 类似删除倒数第k个节点
     */


  }
  //链表就不判断存满了

  //判空
  empty() {
    return this.head.next == null
  }
  //查看栈 稍微麻烦点
  //类似逆序打印 用的是栈来做。。套娃。
  view() {
    let head = this.head
    let arr = []
    while (true) {
      if (head.next == null) {
        //空
        break
      }
      arr.push(head.next)
      head = head.next
    }
    let len = arr.length
    for (let i = 0; i < len; i++) {
      console.log(arr.pop());
    }
  }
}