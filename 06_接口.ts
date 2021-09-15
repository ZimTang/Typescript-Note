/* 
  定义的变量比接口少了一些属性是不允许的，多一些属性也是不允许的
*/
interface IPerson {
  name: string
  age: number
}

let tom: IPerson = {
  name: 'Tom',
  age: 25
}

// 可选属性
interface IFruit {
  name: string
  price?: number
}

/* 
  任意属性
  一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
*/
interface IPlayer {
  name: string
  // 报错 number不是 string的子属性
  // age: number
  [propName: string]: string
}

// 只读属性
// 只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
interface IAnimal {
  readonly id :number
  name: string
}
