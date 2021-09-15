// any类型允许被赋值为任意类型
let n:any = 'seven'
n = 7

// 在任意值上访问任何属性都是允许的
// 声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值
console.log(n.myName)
n.sayName()

// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型
let sth
sth = 'seven'
sth = 7