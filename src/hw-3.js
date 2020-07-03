/**
 * Проверить строку str на уникальные символы, если все символы в строке встречаются один раз, то
 * функция должна возвращать true, в противном случаи false
 * Например:
 *  "avbhye3" => true
 *  "afsbvra" => false
 *  "Aaret64ip" => true
 */
function task1(str) {
    let check = true;
    for(let i = 0; i < str.length - 1; i++){
        for(let j = i + 1 ; j < str.length; j++){
            if(str[i]===str[j]) {
                return  false }
        }
    }
    return check;
}


/**
 * Проверить строку str на буквы, если в строке есть буквы, то их нужно вынести в переменную result и вернуть эту
 * переменную
 */
function task2(str) {
    let result = '';
    result = str.match(/[A-Z && a-z]/g);
    result+=''

    return result;
}

/**
 * arr массив чисел. Нужно найти в массиве найбольшое число и вернуть его
 */
function task3(arr) {
let max= 0
    for(let i=0; i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i]
        }
    }
    return max
}

/**
 * В функцию приходит объект obj. Нужно скопировать все его свойства в объект result и вернуть его
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
 * Приходит строка str такого вида "Ivan Ivanov", вы должны сохранить первые символы в переменную result. Должен
 * иметь такой вид "I.I."
 * Еще пример: str => "Vitalik Skopets". result => "V.S."
 */
function task5(str) {
    let result = str.match(/[A-Z]/g)+'.'
   result= result.replace(',' ,'.' )
        return result

}

/**
 * Написать логику, которая будет возвращать название планеты. По ее номеру начиная от ближайшей к солнцу.
 * Примечание: написать эту логику без if и switch!!!!!!!
 */
function task6(num) {
let arr=['Меркурий', 'Венера', 'Земля', 'Марс', 'Юпитер', 'Сатурн', 'Уран', 'Нептун']
    return arr[num-1]
}

/**
 * Функция должна удалять первый и последний символы из строки str и вернуть получившеюся строку.
 */
function task7(str) {
    str=(str.substring(1,str.length - 1))
    return str


}