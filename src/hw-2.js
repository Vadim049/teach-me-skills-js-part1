/**
 * Напишите логику, которая умножает все числовые свойства объекта obj на переменную num.
 */
function task1(num) {
    const obj = {
        name: 'Valera',
        age: 20,
        height: 300,
        weight: 30,
        surname: 'Trololo',
    };
    // ваш код должен быть ниже этой строки
    for (const key in obj){
        if (typeof(obj[key])==="number"){
            obj[key]*=num

        }
    }
    // ваш код должен быть выше этой строки
    return obj;
}

/**
 * Напишите код для суммирования всех значений из obj и сохраните результат в переменной sum.
 */
function task2(num) {
    let sum = null;
    const obj = {
        a: 20,
        b: 10,
        c: 50,
        d: 1,
        e: 5,
    };
    // ваш код должен быть ниже этой строки
for ( const key in obj){
    sum+=obj[key]
}
    // ваш код должен быть выше этой строки
    return sum;
}

/**
 * Напишите код для проверки на существование свойства в объекте. Если свойство property существует в obj,
 * то функция должна возвращать true, в противном случаи false
 */
function task3(obj, property) {
    let result = null;
    // ваш код должен быть ниже этой строки
for(const key in obj){
    if( key===property){
        result=true
    }
}
    // ваш код должен быть выше этой строки
    return result;
}

/**
 * Написать логику, что скопирует все свойства из obj в result.
 */
function task4(obj) {
    const result = {};
    // ваш код должен быть ниже этой строки
for(const key in obj){
    result[key]=obj[key]
}
    // ваш код должен быть выше этой строки
    return result;
}

/**
 * Ваша реализацимя должна проверить в каком объекте obj1 или obj2 свойств больше, в переменную result
 * положите 1 или 2 в зависимости в каком объекте свойств больше
 */
function task5(obj1, obj2) {
    let result = null;
    // ваш код должен быть ниже этой строки
if(Object.values(obj1)>Object.values(obj2)){
    result=1
}
else{
    result=2
}
    // ваш код должен быть выше этой строки
    return result;
}

/**
 * Написать логику, которая должна удалять все свойства из объекта obj.
 */
function task6(obj) {
    // ваш код должен быть ниже этой строки
for( const key in obj){
    delete obj[key]
}
    // ваш код должен быть выше этой строки
    return obj;
}

/**
 * Задание с *.
 * Написать цикл (не for..in), который пройдется по объекту obj и выведет все значения в консоль
 */
function task7(obj) {
    // ваш код должен быть ниже этой строки
    let array=[];
    array=Object.keys(obj)
    for( i=0; i<array.length; i++) {
        console.log(array[i]);
    }

    // ваш код должен быть выше этой строки


}

/**
 * Задание с *.
 *  В функции есть 2 аргумента, объект и строка. Написать логику, чтобы их сумма была такого вида:
 obj = {}
 str = "Vitalik"
 Значит результат должен быть "Hello Vitalik"
 Или
 obj = {}
 str = "Katya"
 Результат: "Hello Katya"
 */
function task8(obj, str) {
    let result = null;
    // ваш код должен быть ниже этой строки

    result=obj.message+str
    // ваш код должен быть выше этой строки
    return result;
}

/**
 * Задание с *.
 * Все аргументы функции должны добавляться в массив.
 */
function task9() {
    const array = [];
    // ваш код должен быть ниже этой строки
for(let i=0 ; i< arguments.length; i++){
    array[i]=arguments[i]

}
    // ваш код должен быть выше этой строки
    return array;
}


function callStack(callback){


}

function test1(){
    console.log(1)
}
function test2(){
    console.log(2)
}
function test3(){
    console.log(3)
}