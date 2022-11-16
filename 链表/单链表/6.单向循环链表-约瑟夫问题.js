
//小男孩
class Boy {
  no
  next
  constructor(no) {
    this.no = no
    this.next = null
  }
}


class CircleLinkedList {
  first = new Boy(-1)

  /**
   *  1. 先生成单循环链表
   */
  //创建循环链表
  addBoy(num) {
    if (num < 1) {
      return
    }

    //通过循环来创建
    let curBoy = null
    for (let i = 1; i <= num; i++) {
      //当创建一个的时候，需要自我循环
      let boy = new Boy(i)

      if (i == 1) {
        this.first = boy
        this.first.next = boy
        curBoy = boy
      } else {
        curBoy.next = boy
        boy.next = this.first
        curBoy = boy //curBoy 后移
      }
    }
  }

  /**
   *  2. 遍历单循环链表
   */
  view() {
    //需要一个辅助变量来遍历
    let temp = this.first
    while (true) {
      if (temp.next == this.first) {
        //下一个节点指向头，说明下一个节点是尾节点
        console.log('boy 编号为：', temp.no);
        break
      }
      console.log('boy 编号为：', temp.no);
      temp = temp.next  //后移
    }
  }
}
