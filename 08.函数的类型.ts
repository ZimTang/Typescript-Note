// 函数的声明 考虑输入和输出的类型
// 输入多余的（或者少于要求的）参数，是不被允许的：
function sum(x: number , y: number): number {
  return x + y
}

// 函数表达式
// 类型推断出来的
// let mySum = function (x:number, y:number): number {
//   return x + y
// }

// 给mySum添加类型
/* 
  在 TypeScript 的类型定义中，=> 用来表示函数的定义，
  左边是输入类型，需要用括号括起来，右边是输出类型。
*/
let mySum: (x: number, y: number) => number = function (x:number, y: number): number {
  return x + y
}

// 用接口定义函数的形状
interface ISum {
  (x: number, y: number): number
}

const otherSum: ISum = (x: number, y: number) => {
  return x + y
}


// 可选参数
// 可选参数后面不允许再出现必需参数了
function buildName (firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + ' ' + lastName
  } else {
    return firstName
  }
}

// 参数默认值
function getNum (x: number, y: number = 1): number {
  return x + y
}

// 剩余参数
function push (arr: any[], ...items: any[]) {
  items.forEach(item => {
    arr.push (item) 
  });
}

// 重载
// 实现一个函数 reverse，输入数字 123 的时候，输出反转的数字 321，输入字符串 'hello' 的时候，输出反转的字符串 'olleh'。
// 输入为数字的时候，输出也应该为数字，输入为字符串的时候，输出也应该为字符串
function reverse(x: number): number
function reverse(x: string): string
function reverse(x: number | string): number | string | void {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''))
  } else {
    return x.split('').reverse().join('')
  }
}