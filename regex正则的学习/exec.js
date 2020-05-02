
/**
 * 如果匹配成功，exec() 方法返回一个数组
 * （包含额外的属性 index 和 input ），
 * 并更新正则表达式对象的 lastIndex 属性。
 * 完全匹配成功的文本将作为返回数组的第一项，
 * 从第二项起，后续每项都对应正则表达式内捕获括号里匹配成功的文本。
如果匹配失败，exec() 方法返回 null，并将 lastIndex 重置为 0 。
 */
const str='hello wrorld abc. hello'
const reg=RegExp('hello*','g');
let arr= reg.exec(str)
console.log(arr)
/**
 [ 'hello',
  index: 0,
  input: 'hello wrorld abc. hello',
  groups: undefined ]
5
 */
console.log(reg.lastIndex)//5
arr= reg.exec(str)
console.log(arr)
/**
 * [ 'hello',
  index: 18,
  input: 'hello wrorld abc. hello',
  groups: undefined ]
23
 */
console.log(reg.lastIndex)//23
// while ((arr = reg.exec(str)) !== null) {
//     console.log(`Found ${arr[0]}. Next starts at ${reg.lastIndex}.`);
//     // expected output: "Found foo. Next starts at 9."
//     // expected output: "Found foo. Next starts at 19."
//     console.log(arr)
//   }
const regex1 = RegExp('foo*','g');
const str1 = 'table football, foosball';
let array1;

while ((array1 = regex1.exec(str1)) !== null) {
  console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);
  // expected output: "Found foo. Next starts at 9."
  // expected output: "Found foo. Next starts at 19."
  console.log(array1)
}
