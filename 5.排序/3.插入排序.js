const array = [101, 34, 132, 1]

insertSort(array)
/**
 * 
 * @param {*} arr
 *  思路
 *  将数组看成一个有序列表，一个无序列表
 *  依次遍历无序列表，按顺序插入到有序列表中  
 */
function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    //这个地方 i 起始为1，将arr[0]作为有序列表，将1-(n-1) 作为无序列表
    let insertValue = arr[i] //要插入的值
    let insertIndex = i - 1  //要插入的前一个

    //和无序列表中的每一个元素进行比较，如果小于，就将当前比较的元素后移，
    //大于的话，直接在当前比较元素的后面插入
    while (insertIndex >= 0 && insertValue < arr[insertIndex]) {
      //insertIndex>=0 是为了防止索引小于0后出现，越界
      /**
       * [101,34,132,1]
       * insertIndex = 0 时候，是arr[0] 和arr[1] 作比较
       *  如果arr[1] < arr[0] 将arr[1] = arr[0]  //相当于arr[0] 后移了一位
       *  [101,101,132,1] 此时的数组应为这个，  34的值存在insertValue中
       *  insertIndex--  insertIndex 变为了-1,退出循环
       */
      arr[insertIndex + 1] = arr[insertIndex] //后移
      insertIndex--
    }

    /**
     * 退出循环代表找到了插入的位置
     * 此时的insertIndex 为要插入位置的前一位，所有需要 +1 
     */
    arr[insertIndex + 1] = insertValue
    console.log('第' + i + '次循环的数组为：', arr);
  }
}
