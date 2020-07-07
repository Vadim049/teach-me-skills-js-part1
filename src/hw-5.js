/**
 * Написать функцию, которая будет принимать бесконечное количество аргументов(коллбэк кфнкций) и во втором вызове
 * бесконечное количесвто аргументов.
 * Например: foo(foo1(foo2(10)))
 * Ваша функция должна выглядеть так:
 * task1(foo, foo1, foo2)(10);
 */
function task1() {

}

/**
 * Напсиать функцию, которая будет принимать строку. Функция должна проверить явяляется ли строка палиндромом
 */
function task2(str) {
    let result= ''
    for(let i=0; i<str.length;i++){
        if(str[i] === str[str.length - 1 - i]){
            result= 'yes!'
        }
        else {
            result= 'no!'
        }
    }
    return result
}

/**
 * Написать функцию, которая будет принимать целое число n. Нужно вывести в консоль числа от 1 до n.
 * Вместо чисел кратных на 3 выводить fizz, вместо чисел кратных 5 - buzz. Если числа кратные 15, то fizzbuzz
 */
function task3(num) {

    for(let i=1; i<=num;i++){

        if(i% 3 === 0 && i % 5 === 0){
            console.log('fizzbuzz')
        }

        else if(i % 3 === 0){
            console.log('fizz')
        }

        else if( i % 5 === 0){
            console.log('buzz')
        }
        else {
           console.log(i)
        }

    }

}

/**
 * Напсиать функцию, что будет принимать 2 аргумента, строки. Вы должны проверить является ли второе слово анаграммой
 * второго.
 * Примеры:
 * anagram('finder', 'Friend'); => true
 * anagram('', ''); => false
 */


    const buildCharObject = str => {
        const charObj = {}
        for(let char of str.replace(/[^\w]/g).toLowerCase()) {

            charObj[char] = charObj[char] + 1 || 1
        }
        return charObj
    }


    const anagram = (strA, strB) => {

        const aCharObject = buildCharObject(strA)
        const bCharObject = buildCharObject(strB)
        if(Object.keys(aCharObject).length !== Object.keys(bCharObject).length) {
            return false
        }

        for(let char in aCharObject) {
            if(aCharObject[char] !== bCharObject[char]) {
                return false
            }
        }

        return true
    }


/**
 * Написать функцию, которая будет принимать число. Функция должна возвращать массив чисел, которые являются делителями.
 */
function task5(num) {
    const arr = []
    for(let i=0; i<=num; i++ ) {
        if(num % i === 0 ) {
            arr.push(i)
        }
    }
    return arr
}