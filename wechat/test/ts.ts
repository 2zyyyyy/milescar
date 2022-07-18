// typescript 极速入门

// 数组
const a = [1, 2, 3, 4, 5, 6, 7, 8, 2, 10]
// 找得到且只有一个
// console.log('index of 6:', a.indexOf(6))
// 找得到但是又多个
// console.log('index of 2:', a.indexOf(2))
// 找不到 -1
// console.log('index of 20:', a.indexOf(20))

// split/join
const str: string = '1,2,3,4,css,html'
const num: number[] = [1, 2, 3, 4]
// console.log(str.split(','))
// console.log(num.join(' '))

// object
const user = {
    name: {
        first: '里',
        last: '万',
    },
    gender: 'male' as 'male' | 'female' | 'other' | 'secret',
    salary: 20000,
    bouns: undefined as number | undefined,
    performance: 3.5,
    // 给对象添加方法 
    updateBouns() {
        // 如果奖金没有则计算奖金
        if (!this.bouns) {
            this.bouns = this.performance * this.salary
        }
    },
}
user.updateBouns()
console.log(user)

// json to string
// console.log(JSON.stringify(user))

// function
function add(a: number, b: number, c?: number, d: number = 0, ...e: number[]) {
    // return c ? a+b+c : a+b
    // return a + b + (c || 0)
    let sum = a + b + (c || 0) + d
    for (let i = 0; i < e.length; i++) {
        sum += e[i]
    }
    return sum
}
// console.log(add(1, 2))
// console.log(add(1, 2, 3))
const listNum = [1, 2, 3]
// console.log(add(1, 2, 3, 4, 5, 6, ...listNum))

// promise
function addPromise(a: number, b: number): Promise<number> {
    return new Promise((resolve, reject) => {
        if (b % 7 === 0) {
            reject(`bad number:${b}`)
        }
        setTimeout(() => {
            resolve(a + b)
        }, 2000);
    })
}

addPromise(1, 2)
    .then(res => addPromise(res, 4))
    .then(res => addPromise(res, 7))
    .then(res => {
        console.log('final resule:', res)
    })
    .catch(err => {
        console.log('caught error:', err)
    })