function reverseLog(linkedList) {
  /**
   * 思路：
   *  1. 利用栈来做，栈的特性是先进后出
   * 
   */
  //js中用数组来模拟栈 push 和 pop 方法
  const stack = []

  //遍历链表
  let head = linkedList.getHead()
  while (true) {
    if (head.next == null) {
      break
    }
    //当链表中的每个节点一次存入stack中
    stack.push(head.next)
    head = head.next //后移
  }

  //现在取出stack中的数据
  const len = stack.length
  //保存stack的长度，在for循环中stack.length会发生变化
  //导致循环次数减少
  for (let i = 0; i < len; i++) {
    console.log(stack.pop())
  }

}