export default str => {
  //1.建立电话号码键盘映射
  let map = ["", 1, "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"] //下标与数字对应
  //2.把输入字符串按单字符分隔 变成数组 234=》【2，3，4】
  let num = str.split("")
  //保存键盘映射后的字母内容 23=》['abc','def']
  let code = [] //code长度不确定
  num.forEach(item => {
    if (map[item]) {
      //如果item为0 映射为""不保存该值
      code.push(map[item])
    }
  })
  let comb = arr => {
    let tmp = [] //临时数组 保存前2个组合的运算结果
    if (!arr[0]) {
      //边界问题 输入为空
      return []
    }
    //最外层的循环是遍历第一个元素 里层的循环是遍历第二个元素
    for (let i = 0, il = arr[0].length; i < il; i++) {
      if (!arr[1]) {
        //输入为2
        return arr[i].split("")
      }
      for (let j = 0, jl = arr[1].length; j < jl; j++) {
        tmp.push(`${arr[0][i]}${arr[1][j]}`)
      }
    }
    arr.splice(0, 2, tmp)
    if (arr.length > 1) {
      comb(arr)
    } else {
      return tmp
    }
    return arr[0]
  }
  return comb(code)
}
