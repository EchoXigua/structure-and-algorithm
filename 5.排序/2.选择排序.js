const array = [103, 45, 1, 16]

selectSort(array)
console.log('最终结果为：', array);

/**
 * 
 * @param {*} arr 
 * 
 * 思路：
 *  比较最小(大)值，比较 arr[0] - arr[n-1]的最小值，
 *  将最小值与第一个元素交换
 * 
 *  继续比较arr[1]-arr[n-1]的最小值
 *  将最小值放与第二个元素
 *  ......
 */
function selectSort(arr) {
  let minIndex = 0
  let min = 0
  for (let i = 0; i < arr.length - 1; i++) {
    //假设最小值就为第一个
    minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      //j 随着循环次数应该增加，遍历两次后，j 应该指向第四个元素

      //找到最小值
      if (arr[j] < arr[minIndex]) {
        minIndex = j
        min = arr[j]
      }
    }
    //将最小值和arr[i] 互换
    //优化
    if (minIndex != i) {
      //说明arr[i]不是最小值
      arr[minIndex] = arr[i]
      arr[i] = min
    }

    console.log(`第${i}次的顺序为：`, arr);
  }
}