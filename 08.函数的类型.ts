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