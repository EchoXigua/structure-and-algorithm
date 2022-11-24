class ReversePoland {
  numStack  //数栈
  operStack  //符号栈

  constructor() {
    this.numStack = []
    this.operStack = []
  }
  //实现思路还是跟综合计算器几乎一样 这里还未考虑小括号
  //在中缀转后缀会实现
  cal(str) {
    const arr = str.split(' ')
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      let char = arr[i]
      let num1 = ''
      let num2 = ''
      let spliceStr = ''
      if (this.isOper(char)) {
        /**符号的话得先判断，符号栈中是否有值，没有直接入，有的话
         * 有的话先比较优先级
         * 这里判空直接利用数组长度了
        */
        num1 = Number(this.numStack.pop())
        num2 = Number(this.numStack.pop())
        let res = this.calc(num1, num2, char)
        this.numStack.push(res)

      } else {
        //数字
        //
        // spliceStr += char
        // if (i == arr.length - 1) {
        //   this.numStack.push(char)
        //   return
        // }
        this.numStack.push(char)

      }
    }

    //遍历符号栈
    // while (true) {
    //   if (this.operStack.length == 0) {
    //     break
    //   }
    //   let oper = this.operStack.pop()
    //   let num1 = this.numStack.pop()
    //   let num2 = this.numStack.pop()
    //   let res = this.calc(num1, num2, oper)
    //   console.log(res);
    //   this.numStack.push(res)
    // }
    return this.numStack.pop()
  }

  isOper(char) {
    return char == '+' || char == '-' || char == '*' || char == '/'
  }

  priority(oper) {
    if (oper == '*' || oper == '/') {
      return 1
    } else if (oper == '+' || oper == '-') {
      return 0
    } else {
      return -1
    }
  }

  calc(num1, num2, oper) {
    switch (oper) {
      case '+':
        return num1 + num2
      case '-':
        return num2 - num1
      case '*':
        return num1 * num2
      case '/':
        return num2 / num1
      default:
        break;
    }
  }
}