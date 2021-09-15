// 联合类型使用 | 分隔每个类型。
let n : string | number
n = 'seven'
n = 7

// 只能访问此联合类型的所有类型里共有的属性或方法：
// function getLength (sth: string | number) : number {
  // 报错 只能访问此联合类型的所有类型里共有的属性或方法：
  // return sth.length
// }


// 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：
let m : string | number
m = 'seven'
m.length // 5
m = 7
// 报错
// m.length 