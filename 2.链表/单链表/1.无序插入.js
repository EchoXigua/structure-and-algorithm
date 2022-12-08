//节点类型
class Node {
  no
  name
  next
  constructor(json) {
    this.no = json?.no
    this.name = json?.name
    this.next = null
  }
}



class SingleLinked {
  head
  constructor() {
    this.head = new Node()
  }
  //单链表中插入
  add(node) {
    //需要遍历链表，找到最后一位，在尾部插入
        //头节点不能动，找一个临时变量来遍历链表
    let temp = this.head
    while (true) {
      if (temp.next==null) {
        //找到链表的尾部
        break
      }
      //不等于null  说明后面还有节点.temp 需要后移
      temp = temp.next
    }
    temp.next = node
  }
  //查看链表
  view() {
    let temp = this.head
    while (true) {
      if (temp.next) {
        //下个节点存在的话
        console.log('node:', temp.next)
        temp = temp.next
      } else {
        break
      }
    }
  }
}