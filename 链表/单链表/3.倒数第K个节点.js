function getKNode(node,k) {
    //传入头节点
    /**
     * 获取倒数第K个节点的思路：
     *  1.遍历链表获取链表的长度 length
     *  2.倒数第K个节点  为  length-K
     * 
     * */

    if(node.next == null){
      //空链表
      return 
    }
    let temp = node.next
    let length = 0
    while (temp != null) {
      length++
      temp = temp.next
    }
    if(length<k){
      return null
    }
    console.log('length',length);
    temp = node.next
    for(let i = 0;i<length-k;i++){
      temp = temp.next
    }
    return temp
} 