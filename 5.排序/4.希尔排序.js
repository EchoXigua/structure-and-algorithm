// const array = [8, 9, 2, 4, 7, 6, 5, 1, 3, 0] //推导使用的数组
const array = [8, 9, 1, 7, 2, 3, 5, 4, 6, 0]

// shell(array)
shellBetter(array)
console.log(array);
/**
 * 
 * @param {*} arr
 * 
 * 希尔排序，插入排序的一种优化
 * 2，3，4，6，8，1
 * 当有较小的数在最后时，普通的插入排序会增加移动次数
 * 
 * 希尔排序通过分组的方式，将小的数尽可能放在前面，最后再通过插入排序来完成 
 * arr.length / 2 来得到分组
 */

//推导
function shellInfer(arr) {
  // for() {

  // }

  /**
   *  arr.length / 2 = 5
   *  得到 5 组
   */
  let temp = 0
  for (let i = 5; i < arr.length; i++) {
    //第一个for 循环，去遍历每个组
    for (let j = i - 5; j >= 0; j -= 5) {
      //第二个for 循环，将每个组进入直接插入排序
      if (arr[j] > arr[j + 5]) {
        //如果组内的元素大于后一位，则交换位置
        //这个地方采用交换位置，比较浪费时间，后面给出优化
        temp = arr[j + 5]
        arr[j + 5] = arr[j]
        arr[j] = temp
      }
    }
  }
  console.log('第一次循环得到的数字为：', arr);
  //第一次得到 6, 5, 1, 3, 0,8, 9, 2, 4, 7

  //第二次的分组为 5 / 2 = 2
  for (let i = 2; i < arr.length; i++) {
    /**
     * 
     * 6, 5, 1, 3, 0,8, 9, 2, 4, 7
     * 分为两个组，
     * A: [6，1，0，9，4]      B: [5，3，8，2，7]     
     *  i 从2开始，每次+1 都是对不同的组进行操作 +2 是对相同的组进行操作，所以会有一组不会发生变化
     * */
    for (let j = i - 2; j >= 0; j -= 2) {
      /**
       * 这里j 为什么每次减去相同的步长?
       * 减去相同的步长能保证操作的是同一组，每次i+1 组会变化，但是第二个循环是处理相同组内的排序
       *  这里可以理解直接插入排序 [6,5,4,3,2,1] 直接插入排序是将数组看成一个有序 和无序。
       * 
       *  随着i 的增大，两个组内的数也在逐渐增大
       *  i = 2  j = 0   6和1比较
       *  6 和 1 比较   6、1为同一组内
       *  A 组 当前变为 [6,1] 经过比较后变为[1,6] 随着i的增大，会有A 组内的数逐渐增加，组内数每一次增加，
       *  增加后都需要进行插入排序，来保证 数是有序的 
       * 
       *  i = 4  j = 2  6和0比较 对比后，位置交换，这里类似冒泡
       *  A 组 当前变为 [1,0,6]
       *  i = 4  j = 0  1和0比较 对比后，位置交换，这里类似冒泡       
       */
      if (arr[j] > arr[j + 2]) {
        //如果组内的元素大于后一位，则交换位置
        temp = arr[j + 2]
        arr[j + 2] = arr[j]
        arr[j] = temp
      }
    }
  }
  console.log('第二次循环得到的数字为：', arr);

  //第三次步长变为1  以此类推

}

function shell(arr) {
  //gap 步长
  let temp = 0
  let count = 0
  for (let gap = Number.parseInt(arr.length / 2); gap > 0; gap = Number.parseInt(gap / 2)) {
    for (let i = gap; i < arr.length; i++) {
      for (let j = i - gap; j >= 0; j -= gap) {
        //这里这样比较会费时，采用插入排序会快
        if (arr[j] > arr[j + gap]) {
          temp = arr[j + gap]
          arr[j + gap] = arr[j]
          arr[j] = temp
        }
      }
    }
    console.log('第' + (++count) + '轮:', arr);
  }
}

//优化希尔排序，使用插入排序

function shellBetter(arr) {
  for (let gap = Number.parseInt(arr.length / 2); gap > 0; gap = Number.parseInt(gap / 2)) {
    for (let i = gap; i < arr.length; i++) {
      let j = i  //要插入的序号
      let temp = arr[j]  //要插入的值
      if (arr[j] < arr[j - gap]) {
        //后面的值比前面的小
        while (j - gap >= 0 && temp < arr[j - gap]) {
          //移动
          // [101,34,123,1]  想当于  101 移动到 arr[1]
          arr[j] = arr[j - gap]
          j -= gap //相当于将索引往前走，如果索引<0 了就退出
        }
        // 这个地方和3.插入排序.js 不一样的是，while循环比较的是j-gap的值
        arr[j] = temp
      }
    }
  }
}