// 枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射：
// enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

// console.log(Days["Sun"] === 0); // true
// console.log(Days["Mon"] === 1); // true
// console.log(Days["Tue"] === 2); // true
// console.log(Days["Sat"] === 6); // true

// console.log(Days[0] === "Sun"); // true
// console.log(Days[1] === "Mon"); // true
// console.log(Days[2] === "Tue"); // true
// console.log(Days[6] === "Sat"); // true

// 手动赋值
enum Days {Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat};

console.log(Days["Sun"] === 7); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true

// 常数枚举
const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];