/**
 * Напишите код, чтобы вызвав эту фукнцию с 2 чсилами и одной строкой вы получили их сумму в переменной sum
 * если строка придет с символами, то результат функции должна быть строка "неверные данные"
 */
function task1(num1, num2, str) {
  let sum = null;
  // ваш код должен быть ниже этой строки

if(str>='A'){
  console.log("неверные данные")
}

else {
  str=Number(str);
  sum=num1+num2+str;
}


  // ваш код должен быть выше этой строки
  return sum;
}

/**
 * Код ниже перепишете с использованием switch

  let result = null;

  if (age > 5) {
    result = 'Он старше 5 лет';
  } else if (age > 8) {
    result = 'Он старше 8 лет';
  } else if (age > 11) {
    result = 'Он старше 11 лет';
  } else {
    result = 'Нет подходящего возраста';
  }

 */

function task2(age) {
  let result = null;
  // ваш код должен быть ниже этой строки
switch(age){

    case 6:
      case 7:
        case 8:{
          console.log("он страше 5 лет");
          break;
        }

  case 9:
  case 10:
  case 11:{
    console.log("он старше 8 лет");
    break;
  }

  case 12:
  case 13:
  case 14:{
    console.log("он страше 11 лет");
    break;
  }

  default:{
    console.log("нет подходящего возраста")
  }

}

  // ваш код должен быть выше этой строки
  return result;
}

/**
 * Используя while напишите цикл от 0 до 21 и каждое нечетное число суммируйте к переменной result
 *
 */
function task3() {
  let result = 0;
  // ваш код должен быть ниже этой строки
  let i=0
while(i<21){
  if (i % 2 != 0){
    result += i;
  }
  i++
}

  // ваш код должен быть выше этой строки
  return result;
}

/**
 * Используя for напишите цикл от 0 до 100. На каждой итерации, что делится на 5 без остатка
 * в консоль нужно отображать цифру 5.
 *
 */
function task4() {
  // ваш код должен быть ниже этой строки
for( let i=0; i<100; i++ ){
  if (i % 5==0){
    console.log(5)
  }
}
  // ваш код должен быть выше этой строки
}

/**
 * В функцию приходят 4 аргумента все разных типов, какие бы не были значения результат всегда должен быть один и тот же, true
 *
 */
function task5(num, str, bool, val) {

  let result = num || str || bool || val; // выражение с || менять нельзя, остальное в ваших руках


  return result;
}

/**
 * Вы должны дополнить код так, чтобы переменная result была не больше number
 */
function task6(number) {
  let result = 0;

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      // ваш код должен быть ниже этой строки

      result += i + j;

      if (number < 0){
        number *= -1;
      }
       number+= i+j;

      // ваш код должен быть выше этой строки
    }
  }
if(result>number){
  console.log("error")
}
  return result;
}


/**
 * Написать такой цикл, чтобы заполнить переменную result символами своего имени,
 * таким образом результатом этой функции будет ваше имя.
 *
 */
function task7() {
  let result = null;

  // ваш код должен быть ниже этой строки
  let a=0;
  let b=0;
  let c=0;
  let d=0;
  let e=0;
for (let i=0; i<=5; i++){
  if (i==1){
    a='v';
  }
  if(i==2){
    b='a';
  }
  if(i==3) {
    c = 'd';
  }
  if(i==4){
    d='i';
  }
  if(i==5){
    e='m';
  }

}
result=a+b+c+d+e;
  // ваш код должен быть выше этой строки
  return result;
}


/**
 * Задание с *.
 * Написать код таким образом, чтобы можно было выполнить любое матемптичиское действие с num и str
 */
function task8(num) {
  let str = '10n';
  let result = null;


  // ваш код должен быть ниже этой строки

  str = parseInt(str.match(/\d+/));

  console.log(str);

  result=str*num;

  // ваш код должен быть выше этой строки
  return result;
}
