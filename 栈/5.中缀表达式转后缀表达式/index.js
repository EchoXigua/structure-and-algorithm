const toCenterArr = (str) => {
  const arr = []
  let num = ''
  let char = ''
  for (let i = 0; i < str.length; i++) {
    char = str[i]
    const reg = /[0-9]/
    if (reg.test(char)) {
      //数字，需要处理多位数
      if (i == str.length - 1) {
        num += char
      }
      while (i < str.length && reg.test(str[i])) {
        num += str[i]
        i++
      }
      i-- //while 循环退出后 for循环会再次++，导致丢失了+
      arr.push(char)
      num = ''

    } else {
      arr.push(char)
    }
  }
  return arr
}

const toEndArr = (arr) => {
  const s1 = [] //符号栈
  const s2 = [] //存放中间结果的栈
  let reg = /[0-9]{1,}/
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i]
    if (reg.test(item)) {
      //数字直接加入s2
      s2.push(item)
    } else {
      if (s1.length == 0) {
        s1.push(item)
        continue
      }
      if (item == '(') {
        s1.push(item)
        continue
      }
      if (item == ')') {
        let temp = s1.pop()
        while (s1.length != 0 && temp != '(') {
          s2.push(temp)
          temp = s1.pop()
        }
      } else {
        //跟栈顶比较优先级
        let top = s1[s1.length - 1]
        if (pr(top) >= pr(item)) {
          //栈顶的优先级大于当前符号的优先级
          s2.push(s1.pop()) //将栈顶符号弹出 加入到s2中
          s1.push(item)  //将当前符号加入s1中
        } else {
          s1.push(item)
        }
      }
    }
  }

  //遍历s1 弹出所有符号
  while (s1.length != 0) {
    s2.push(s1.pop())
  }
  // console.log('s1', s1);
  // console.log('s2', s2);
  return s2
}

// 优先级
const pr = (str) => {
  switch (str) {
    case '+':
      return 1
    case '-':
      return 1
    case '*':
      return 2
    case '/':
      return 2
    default:
      console.log('error');
      break;
  }
}