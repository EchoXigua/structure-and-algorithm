class Calculator {
  numStack  //数栈
  operStack  //符号栈
  constructor() {
    this.numStack = new ArrayStack(10)
    this.operStack = new ArrayStack(10)
  }

  calculate(str) {
    let char = ''
    let num1 = '' //顶栈
    let num2 = ''  //次顶栈
    let keepCh = '' //多位数拼接
    for (let i = 0; i < str.length; i++) {
      char = str[i]
      if (this.isOper(char)) {
        /**符号
         * 1.先判断符号栈里面有没有符号
         * 2.如果有，比较优先级：
         *    优先级低
         *    1）如果优先比栈里的低，则将符号栈里面的符号取出来
         *    2）在将数字栈里面弹出两个数字进行计算，计算完成后，
         *       结果放入数栈中，当前符号放入符号栈中
         *    优先级高
         *    1）当前符号放入符号栈中
         * 3.如果没有，则将当前符号放入符号栈中
         * 
         */
        //先判空
        if (this.operStack.empty()) {
          this.operStack.push(char)
        } else {
          //不为空比较优先级
          const head = this.operStack.viewHead() //顶栈，没有取出
          if (this.operStack.priority(char) <= this.operStack.priority(head)) {
            //当前优先级低于栈中
            //取出数栈开始计算
            num1 = Number(this.numStack.pop())
            num2 = Number(this.numStack.pop())

            let res = this.cal(num1, num2, this.operStack.pop()) //取出符号栈中的符号
            this.numStack.push(res)
            this.operStack.push(char) //将当前符号存入
          } else {
            //当前优先级高于栈中，直接存入
            this.operStack.push(char)
          }
        }


      } else {
        //数字往符号栈里面存入，但是要注意多位数

        keepCh += char
        //最后一位直接加入
        if (i == str.length - 1) {
          this.numStack.push(Number(keepCh))
        } else {
          //下一位是符号的话
          if (this.isOper(str[i + 1])) {
            this.numStack.push(Number(keepCh))
            keepCh = ''
          }
        }

      }

    }
    //退出循环后，需要检查符号栈里面是否为空
    while (true) {
      if (!this.operStack.empty()) {
        //继续计算
        num1 = this.numStack.pop()
        num2 = this.numStack.pop()

        let res = this.cal(num1, num2, this.operStack.pop())
        this.numStack.push(res)
      } else {
        break
      }
    }

    return this.numStack.pop()

  }

  isOper(char) {
    //判断是否是符号
    return char == '*' || char == '/' || char == '+' || char == '-'
  }

  cal(num1, num2, oper) {
    switch (oper) {
      case '*':
        return num1 * num2
      case '/':
        return num2 / num1
      case '+':
        return num1 + num2
      case '-':
        return num2 - num1
      default:
        break;
    }
  }

}



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

  //扩展功能：优先级比较
  priority(char) {
    if (char == '*' || char == '/') {
      return 1
    } else if (char == '+' || char == '-') {
      return 0
    } else {
      return -1 //目前只计算+ - * / 小括号排除
    }

  }

  //查看顶栈
  viewHead() {
    return this.arr[this.headNo]
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
    this.arr[this.headNo] = null
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