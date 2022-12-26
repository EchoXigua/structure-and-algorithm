const arr = [6, 15, 42, 13, 2, 1]

bubbleSort(arr)
console.log('最终结果为：', arr);

function bubbleSort(array) {
  let temp = 0
  /**
   *  优化
   *  如果没有发生交换，说明顺序已经排列好，直接退出循环
   */
  let flag = false
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        flag = true
        temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
    console.log(`第${i}次循环顺序为：`, arr);
    if (!flag) {
      //没有发生交换
      break
    } else {
      //交换之后重置，使得下次循环可以重新对比是否交换过
      flag = false
    }
  }

}
