class ArrayQueue {
  maxSize
  front //队列头
  rear //队列尾
  array
  constructor(size) {
    this.maxSize = size
    this.array = new Array(size)
    this.front = 0
    this.rear = 0
  }

  //向队列中添加一个元素
  add(number) {
    console.log('add');
    //先判断队列是否满
    if (this.isFull()) {
      console.log('队列已满');
      return
    }
    this.array[this.rear] = number
    //取模，因为时环形
    this.rear = (this.rear + 1) % this.maxSize
    this.viewAll()
  }

  // //不留空位的add
  // add(number) {
  //   console.log('add');
  //   //先判断队列是否满
  //   if (this.isFull()) {
  //     console.log('队列已满');
  //     return
  //   }
  //   this.array[this.rear - 1] = number
  //   //取模，因为时环形
  //   this.rear = (this.rear + 1) % this.maxSize
  //   this.viewAll()
  // }

  //取出队列第一个
  get() {
    console.log('get');
    //先判断队列是否为空
    if (this.isNull()) {
      console.log('队列为空，无法取出数据')
      return
    }
    //保存队列头元素
    const temp = this.array[this.front]
    this.array[this.front] = null
    this.front = (this.front + 1) % this.maxSize
    this.viewAll()
    return temp
  }
  //查看队列第一个
  viewHead() {
    return this.array[this.front]
  }
  //查看队列所有元素
  viewAll() {
    console.log(this.array)
    // for (const item of this.array) {
    //   console.log(item)
    // }
  }
  //判断队列是否已满
  isFull() {
    //这个地方+1 代表让数组最后一位空出来
    return (this.rear + 1) % this.maxSize == this.front

    // //如果不留最后一位需要改造rear初始值，并且改造add方法
    // return (this.rear) % this.maxSize == this.front
  }
  isNull() {
    return this.rear == this.front
  }

}