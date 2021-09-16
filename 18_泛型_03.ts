// 泛型在类和接口中的使用

class Queue<T>{
  private data = []

  push (item:T) {
    this.data.push (item)
  }

  pop ():T {
    return this.data.shift()
  }
}

const q = new Queue<number>()
q.push(1)
q.push(2)
console.log(q.pop().toFixed())


interface KeyPair<T,U> {
  key: T
  value: U
}

let ke1: KeyPair<number, string> = {key:1,value:'str'}
let ke2: KeyPair<string, number> = {key:'str',value:2}
