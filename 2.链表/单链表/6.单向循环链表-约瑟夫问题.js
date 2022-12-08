
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
    this.view()
  }

  /**
   *  2. 遍历单循环链表
   */
  view() {
    //需要一个辅助变量来遍历
    let temp = this.first
    while (true) {
      console.log('boy 编号为：', temp.no);
      if (temp.next == this.first) {
        //下一个节点指向头，说明下一个节点是尾节点
        break
      }
      temp = temp.next  //后移
    }
  }
/**
 * 
 * @param {*} k 从第几个人开始 
 * @param {*} m 数几次
 * @param {*} n 总共多少人
 */
  handle(k,m,n){
    if(k<1 || m<1 || n<1){
      console.log('参数错误');
      return
    }

    this.addBoy(n)  //创建了n个单向环形链表
    let first = this.first
    let ender = this.first
    //1.先遍历，让ender指向链表最后一个
    while (true) {
      if(ender.next == first){
        break
      }
      ender = ender.next
    }

    //2.让ender 和 first 一起移动到k 第几个人.移动k-1次
    for(let i=0;i<k-1;i++){
      first = first.next
      ender = ender.next
    }

    while (true) {
      //只剩最后一个人出列
      if(ender == first){
        console.log('最后一个出列的序号为：',first.no);
        break
      }
      //3.数到m的人出列， 数m-1次 ender 和 first一起移动
      for(let i=0;i<m-1;i++){
        first = first.next
        ender = ender.next
      }
      //4.将数到m的人移除链表
      console.log('出列的序号为：',first.no);
      ender.next = first.next
      first = first.next //first后移
    }
    
  }
}
