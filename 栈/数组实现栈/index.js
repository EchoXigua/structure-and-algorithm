class ArrayStack {
  headNo
  maxSize
  arr
  constructor(size) {
    //初始化数组
    this.arr = new Array(size)
    this.maxSize = size
    this.headNo = -1
  }

  //添加
  push(num) {
    if (this.isFull()) {
      console.log('栈已满~')
      return
    }
    this.headNo++
    this.arr[this.headNo] = num
  }
  //取出
  pop() {
    if (this.empty()) {
      console.log('栈为空');
      return
    }
    const value = this.arr[this.headNo]
    this.headNo--
    return value
  }
  //遍历栈
  view() {
    if (this.empty()) {
      console.log('栈为空');
      return
    }
    for (let i = this.headNo; i >= 0; i--) {
      console.log(`arr[${i}]:${this.arr[i]}`);
    }
  }
  //是否存满
  isFull() {
    return this.headNo == this.maxSize - 1
  }
  //判空
  empty() {
    return this.headNo < 0
  }
}