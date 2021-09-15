// [类型+方括号] 表示法
// 数组中的一些方法也会收到类型限制
const numArr: number[] = [1, 2, 3]
// 报错
// numArr.push('8')

// 数组泛型
const strArr: Array<string> = ['A', 'B']

// 用接口表示数组 一般不会这么做
interface INumberArray {
  [index: number]: number
}

const arr: INumberArray = [1, 2, 3]

// 类数组
function sum () {
  const args: IArguments = arguments
}

// IArguments的内部实现
interface IArguments {
  [index: number]: number
  length: number
  callee: Function
}

// any在数组中的应用
// 数组中允许出现任意类型
const list: any[] = [1, 'A']
