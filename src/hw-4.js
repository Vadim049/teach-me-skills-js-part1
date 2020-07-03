/**
 * Написать функцию, которая будет считать ряд Фибоначчи. Функция должна возвращать массив из чисел
 * Фибоначчи, длина массива будет приходить, как аргумент функции
 */
function fibonacci(length) {

}

/**
 * Написать свою функцию map
 */
function map(array, callback) {
    const newArr=[]

    for (let i= 0; i<array.length; i++){
        newArr.push(callback(array[i],i))
    }
    return newArr
}

/**
 * Написать свою функцию filter
 */
function filter(array, callback) {
    const newArr=[]

    for(let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            newArr.push(array[i])
        }
    }
    return newArr;
}

/**
 * Написать свою функцию indexOf
 */
function indexOf(array, value, fromIndex) {

    for(let i = 0; i < array.length; i++){
        if(value===array[i]){
            return fromIndex(i)
        }
    }

}

/**
 * Написать свою функцию reduce
 */
function reduce(array, callback, acc) {

    for(let i = 0; i < array.length; i++){

        acc=callback(acc,array[i])
    }
    return acc
}

/**
 * Написать свою функцию find
 */
function find(array, callback) {

    for(let i=0; i<array.length; i++){

        if ( callback(array[i])) {

            return array[i]

        }
    }

}

/**
 * Написать свою функцию sort
 */
const sort=(array,swap)=>{
    const length=array.length;
    for (let i=0;i<length-1;i++){
        for (let j=i+1; j<length;j++){
            if(array[i]>array[j]){
                [array[i],array[j]]=swap(array[i],array[j]);
            }
        }
    }
    return array;
};

const swap=(el1,el2)=>{
    let tmp=el1;
    el1=el2;
    el2=tmp;
    return [el1,el2];
};







/**
 * Написать свою функцию Object.keys
 */

    const objectKeys=(object)=>{
        let objectKeysArray=[];
        for(let field in object){
            console.log(field);
            objectKeysArray=[...objectKeysArray,field];
        }
        return objectKeysArray;
    };

    const object={
        firstName: 'Leo',
        secondName: 'Messi',
        age: 32,
        height:171,
        goals: 987,
    };
    console.log(object);
    const keys=objectKeys(object);
    console.log(keys);




/**
 * Написать свою функцию Object.values
 */
const objectValues=(object)=>{
    let objectValuesArray=[];
    for(let field in object){
        console.log(field);
        objectValuesArray=[...objectValuesArray,object[field]];
    }
    return objectValuesArray;
};

const obj={
    firstName: 'Leo',
    secondName: 'Messi',
    age: 32,
    height:171,
    goals: 987,
};
console.log(obj);
const values=objectValues(obj);
console.log(values);




