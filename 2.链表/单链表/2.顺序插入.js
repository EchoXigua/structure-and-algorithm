class Node {
  no
  name
  next
  constructor(json) {
    this.name = json?.name
    this.no = json?.no
    this.next = null
  }


}

class Linked {
  head
  constructor() {
    this.head = new Node()
  }
  add(node) {
    //
    let temp = this.head
    let flag = false  //false说明编号不存在，true 说明编号已存在
    while (true) {
      if (temp.next == null) {
        //说明找到了链表的尾部，直接插入
        break
      }

      if (temp.next.no > node.no) {
        //下个节点比node节点编号大
        //将node插入到temp后面
        break
      }
      if (temp.next.no == node.no) {
        flag = true
        break
      }
      temp = temp.next //temp后移
    }
    if (flag) {
      console.log('节点已存在')
      return
    }
    node.next = temp.next //将node的下个节点指向temp下个节点 (链表后面的元素不会因此断掉)
    temp.next = node //将temp下个节点指向node

  }

  view() {
    let temp = this.head
    while (true) {
      if (temp.next) {
        console.log(temp.next)
        temp = temp.next
      } else {
        break
      }
    }
  }

  getHead(){
    return this.head
  }

  //修改节点
  edit(node) {
    //遍历链表
    let temp = this.head
    let flag = false  //false  没有找到  true  找到
    while (true) {
      if (temp.next == null) {
        //空链表
        break
      }
      if (temp.next.no == node.no) {
        //找到了
        flag = true
        break
      }
      //没有找到，temp后移
      temp = temp.next
    }
    //判断是否找到
    if (flag) {
      temp.next.name = node.name
    } else {
      console.log('没有找到')
    }
  }


  //删除节点
  delete(node) {
    let temp = this.head
    let flag = false
    while (true) {
      if (temp.next == null) {
        //空
        break
      }
      if (temp.next.no == node.no) {
        flag = true
        break
      }
      temp = temp.next
    }
    if (flag) {
      temp.next = temp.next.next
    } else {
      console.log('删除失败')
    }
  }
}