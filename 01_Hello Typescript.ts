// ts只会在编译时对类型进行静态检查，如果发现有错误，编译的时候就会报错
function sayHello (person: string) {
  if (typeof person === 'string') {
    return 'Hello' + person
  } else {
    throw new Error('person is not a string')
  }
}

const user = 'Tom'
console.log(sayHello(user))