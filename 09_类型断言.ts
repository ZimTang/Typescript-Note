// 类型断言（Type Assertion）可以用来手动指定一个值的类型。

// 类型断言只能够「欺骗」TypeScript 编译器，无法避免运行时的错误 
interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}

function isFish(animal: Cat | Fish) {
    if (typeof (animal as Fish).swim === 'function') {
        return true;
    }
    return false;
}

// 将一个父类断言为更加具体的子类
class ApiError extends Error {
    code: number = 0;
}
class HttpError extends Error {
    statusCode: number = 200;
}

function isApiError(error: Error) {
    if (typeof (error as ApiError).code === 'number') {
        return true;
    }
    return false;
}

// 在 any 类型的变量上，访问任何属性都是允许的
// 它极有可能掩盖了真正的类型错误，所以如果不是非常确定，就不要使用 as any
(window as any).foo = 1;