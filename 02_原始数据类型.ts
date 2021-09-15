// boolean
const flag:boolean = false

const flag1:boolean = Boolean(1)

// 报错 使用构造函数Boolean创造的对象不是布尔值
// const flag2:boolean = new Boolean(1)
console.log(flag)

// number
const num:number = 1

// void
// 声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null
function sayName():void {
  console.log(`My name is curry`)
}
const unusable:void = undefined

// NUll Undefined
/* 
  undefined 和 null 是所有类型的子类型
  也就是说 undefined 类型的变量，可以赋值给 number 类型的变量
*/
let u:undefined = undefined
let n:null = null

let num1:number = undefined