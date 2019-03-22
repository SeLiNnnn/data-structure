// export default str => {
//   //字符串按空格进行分隔 保存数组 数组元素的先后顺序就是单词的顺序
//   let arr = str.split(" ")
//   //对数组进行遍历 每个结果进行反转
//   let result = arr.map(item => {
//     //按字符分隔 返回数组并反转
//     return item
//       .split("")
//       .reverse()
//       .join("")
//   })
//   //转字符串
//   return result.join(" ")
// }

export default str => {
  //1字符串按空格进行分隔 保存数组 数组元素的先后顺序就是单词的顺序
  //2对数组进行遍历 每个结果进行反转
  return str
    .split(" ")
    .map(item => {
      return item
        .split("")
        .reverse()
        .join("")
    })
    .join(" ")
}
