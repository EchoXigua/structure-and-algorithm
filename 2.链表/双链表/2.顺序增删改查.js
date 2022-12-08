class DoubleNode {
  no
  name
  next
  pre
  constructor(json) {
    this.no = json?.no
    this.name = json?.name
    this.next = null
    this.pre = null
  }
}

class DoubleLinkedList {
  head
  constructor() {
    this.head = new DoubleNode()
  }

  //双向链表的顺序插入
  add(node) {
    let head = this.head
    let flag = false
    while (true) {
      if (head.next == null) {
        //空链表
        break
      }
      if (head.next.no > node.no) {
        flag = true
        break
      }
      if (head.next.no == node.no) {
        console.log('节点已存在');
        break
      }
      head = head.next
    }
    if (flag) {
      //true
      /**
       * head当前节点的next节点比新增的大，所有在head后面加入
       */
      node.next = head.next //先将 新增节点的下一个节点 指向 当前节点的下一个节点
      head.next.pre = node  //将下一个节点的前一个节点 指向 新增节点

      head.next = node //在将当前节点的下一个节点指向新增节点
      node.pre = head  //新增节点的 前一个节点 指向 当前节点
    } else {
      //false 在链表尾部插入
      head.next = node
      node.pre = head
    }
  }

  view() {
    let head = this.head
    while (true) {
      if (head.next == null) {
        //空链表
        break
      }
      console.log(head.next)
      head = head.next
    }
  }
  getHead() {
    return this.head
  }
  edit(node) {
    let head = this.head
    let flag = false //true 找到
    while (true) {
      if (head.next == null) {
        break
      }
      if (head.next.no == node.no) {
        //找到了
        flag = true
        break
      }
      //后移
      head = head.next
    }
    if (flag) {
      console.log('修改成功');
      head.next.name = node.name
    } else {
      console.log('没有找到该节点');
    }
  }
  del(node) {
    let head = this.head
    let flag = false //true 找到
    while (true) {
      if (head.next == null) {
        break
      }
      if (head.next.no == node.no) {
        //找到了
        flag = true
        break
      }
      head = head.next
    }
    if (flag) {
      console.log('删除成功');
      head.next = head.next.next

      //这句代码有问题，如果删除的是最后一位会报错
      if (head.next != null) {
        head.next.pre = head
      }
    } else {
      console.log('没有找到改节点');
    }
  }


}