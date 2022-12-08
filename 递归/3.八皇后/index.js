class Queue8 {
  constructor() {
    this.arr = new Array(8)
    this.max = 8
    this.count = 0
    this.query = 0
  }

  //放入皇后
  /**
   * 
   * @param {*} n  放入第n个皇后
   */
  check(n) {
    if (n == this.max) { //n==8
      //8个皇后就已经放好了
      this.print()
      return
    }
    for (let i = 0; i < this.max; i++) {
      this.arr[n] = i  //先放第一行第一列
      if (this.judge(n)) {
        //不冲突的话就需要放 开始递归  有递归就需要往退出递归靠
        this.check(n + 1)
      }
      //冲突之后 尝试第一行第二列
    }
  }


  //判断冲突
  /**
   * 不能同一行，同一列，统一斜线
   * n 第几个皇后, 检查该皇后是否和前面的皇后冲突了
   * 
   * 拿二维坐标来解释容易理解，同一列不相同  就是x不相等
   *  斜线   y=x y=-x 这条线就是斜线，可看坐标.png
   * 
   * Math.abs(i - n) == Math.abs(this.arr[i] - this.arr[n]) 就是 y = +- x
   * 
   * 来个数学题就能很好的理解了
   *  如何判断两个点  (x1,y1)   (x2,y2)  是不是在y=+- x上
   *  x1-x2 = y1-y2
   * 
   */
  judge(n) {
    this.query++
    for (let i = 0; i < n; i++) {
      if (this.arr[i] == this.arr[n] || Math.abs(i - n) == Math.abs(this.arr[i] - this.arr[n])) {
        //这个地方没有去判断同一行，因为每一行都是递增的，第一个放第一行之后，第二个就回去放第二行
        return false
      }
    }
    return true
  }

  print() {
    this.count++
    let str = ''
    for (let i = 0; i < this.max; i++) {
      str += this.arr[i] + '  '
    }
    console.log(str);
  }
}