/**
 *  程序出Bug了？
 *        ∩∩
 *      （´･ω･）
 *     ＿| ⊃／(＿＿_
 *    ／ └-(＿＿＿／
 *    ￣￣￣￣￣￣￣
 *   算了反正不是我写的
 *      ⊂⌒／ヽ-、＿
 *    ／⊂_/＿＿＿＿ ／
 *    ￣￣￣￣￣￣￣
 * @Author: SeLiNnnn
 * @Description: Go for my goal and go for the life I want.
 * @Date: 2020-03-06 16:48
 **/
// let map = new Map([['name', '张三'],
//     ['title', 'Author']])
//
// console.log(map.size);
// console.log(map.has('name'));
// console.log(map.get('name'));


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export default (nums,target) => {
    for (let i = 0; i < nums.length; i++){
        for (let j = i+1; j < nums.length; j++){
            if(nums[j]===target-nums[i]){
                return [i,j]
            }
        }
    }
}
// let twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++){
//         for (let j = i+1; j < nums.length; j++){
//             if(nums[j]===target-nums[i]){
//                 return [i,j]
//             }
//         }
//     }
// };
// console.log(twoSum([1,4,6,2,5,3],10));

