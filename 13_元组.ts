let tom: [string, number]

tom[0] = '1'

// 当直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项
let curry: [string, number]

curry = ['abc', 12]

// 当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型：
tom.push(2)
tom.push('1')