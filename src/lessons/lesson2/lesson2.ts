console.log('lesson 2');


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9

function sum(x: number) {
    return function (y: number) {
        return x + y;
    }
}

console.log(sum(3)(6));

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:

function makeCounter() {
    let count = 0;
    return function () {
        //ESLint configs
        //count += count +1;
        return ++count;
    }
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
const counter2 = makeCounter();
console.log(counter2()); // 1
console.log(counter()); // 4


// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

function makeCounter2(n: number) {
    return {
        increase() {
            return ++n;
        },
        decrease: () => --n,
        reset: () => {
            n = 0;
            return n;
        },
        set: (num: number) => {
            n = num;
            return n;
        }
    };
}

let test = makeCounter2(5);

console.log(test.increase());
console.log(test.set(100));
console.log(test.decrease());


// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:

function superSum(num: number) {
    if (num <= 0) return 0;
    if (num === 1) return (n: number) => n;

    let acc: number [] = [];

    function helper(...args: number[]) {
        acc = [...acc, ...args]

        if (acc.length >= num) {
            acc.length = num;
            return acc.reduce((acc, number) => acc + number)
        } else {
            return helper
        }
    }

    return helper
}

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore
//@ts-ignore
console.log(superSum(3)(2)(5)(3));
//@ts-ignore
console.log(superSum(3)(2)(5, 3));
//@ts-ignore
console.log(superSum(3)(2, 5)(3));
//@ts-ignore
console.log(superSum(3)(2, 5)(3, 9));


// Task 05

// factorial task
// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120

function factorial(n: number): number {
    return (n !== 1) ? n * factorial(n - 1) : 1;
}

console.log(factorial(5));

// Fibonacci task
//recursion mthd
function fibRec(n: number): number {
    return n <= 1 ? n : fibRec(n - 1) + fibRec(n - 2);
}

console.log(fibRec(7));
console.log(fibRec(77)); // too slow

//loop mthd
function fibLoop(n: number): number {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fibLoop(7));
console.log(fibLoop(77)); //  more rapid

//Task 06
//Recursion
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

//loop mthd
function sumTo(n: number) {
    let result = 0;
    for (let i = 0; i <= n; i++) {
        result += i;
    }
    return result;
}

console.log(sumTo(100));

//recursion mthd
function sumToRec(n: number): number {
    if (n === 1) return n;
    return n + sumToRec(n - 1);
}

console.log(sumToRec(100));

//tail recursion mthd
function sunToTailRec(n: number, acc: number): number {
    if (n === 1) return n + acc;
    return n + sunToTailRec(n - 1, acc + n);
}

console.log(sunToTailRec(100, 0));


//Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

function sumToNumbers(a: number) {
    return function (b: number) {
        return a + b
    }
}

console.log(sumToNumbers(1)(2)) //3
console.log(sumToNumbers(5)(-1)) //4


let company = { // тот же самый объект, сжатый для краткости
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}]
    }
};

//@ts-ignore
function sumSalaries(department) {
    if (Array.isArray(department)) { // случай (1)
        return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
    } else { // случай (2)
        let sum = 0;
        for (let subdep of Object.values(department)) {
            sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
        }
        return sum;
    }
}

console.log(sumSalaries(company));


// just a plug
export default () => {
};