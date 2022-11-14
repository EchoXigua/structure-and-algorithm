function reverseLinked(node) {
  /**
   * 思路：
   *  1.遍历原来的链表，将每个节点挨个取出
   *  2.将取出的每个节点从头插入到新的链表中
   *  3.将原来的链表的头节点指向新链表头节点的下一个节点
   * 
   */
  
  //如果为空，或者只有一个节点，返回
  if(node.next == null || node.next.next == null){
    return node
  }
  //定义辅助变量，遍历链表
  let cur = node.next
  //保存辅助变量的下一个节点
  let next = null
  //创建一个新的链表
  const linkedNew = new Linked()
  while (cur != null) {
    //保存当前节点的下一个节点，
    //因为后面需要后移当前节点，如果不保存，原来的链表就断掉了
    next = cur.next

    //将当前节点的下一个节点指向 新链表的下一个节点
    cur.next = linkedNew.next

    linkedNew.next = cur //将新链表的头部指向当前的节点

    cur = next //当前节点后移    
  }

  return linkedNew
}