// typescript 极速入门

// 数组
const a = [1, 2, 3, 4, 5, 6, 7, 8, 2, 10]
// 找得到且只有一个
console.log('index of 6:', a.indexOf(6))
// 找得到但是又多个
console.log('index of 2:', a.indexOf(2))
// 找不到 -1
console.log('index of 20:', a.indexOf(20))

// split/join
const str: string = '1,2,3,4,css,html'
const num: number[] = [1, 2, 3, 4]
console.log(str.split(','))
console.log(num.join(' '))

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
}
// 如果奖金没有则计算奖金
if (!user.bouns) {
    user.bouns = user.performance * user.salary
}
// json to string
console.log(JSON.stringify(user))