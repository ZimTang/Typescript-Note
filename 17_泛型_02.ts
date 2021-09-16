// 约束泛型

function echoWithArr<T> (arg: T[]): T[] {
  console.log(arg.length)
  return arg
}

const result = echoWithArr([1,2,3])

// 使用接口约束泛型
interface WithLength {
  length: number
}

function echoWithLength<T extends WithLength> (arg: T): T {
  console.log(arg.length)
  return arg
}

const result2 = echoWithLength('str')
const result3 = echoWithLength({length:1,width:100})
