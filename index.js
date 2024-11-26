/*
Напишите функцию через Function Expression, которая принимает строку и возвращает эту строку с перевернутыми словами.
 При этом сами слова должны оставаться в оригинальном порядке, а символы внутри каждого слова — переворачиваться.
const reversedWords = reverseWords('Hello World');
 console.log(reversedWords); // Вывод: "olleH dlroW"
*/

const reversedWords = function(string) {
    return string.split(' ')
        .map(word => Array.from(word).reverse().join(''))
        .join(' ');
}

console.log('Перевёрнутый Hello world:', reversedWords('Hello world'));

/*
Создайте генератор arrayIterator, который принимает массив и возвращает его элементы по одному на каждой итерации.
const gen = arrayIterator(['apple', 'banana', 'cherry']);
console.log(gen.next().value); // 'apple'
console.log(gen.next().value); // 'banana'
console.log(gen.next().value); // 'cherry'
console.log(gen.next().done);  // true
*/

function* arrayIterator(arr) {
    for(let elem of arr) {
        yield elem;
    }
}

const gen = arrayIterator(['apple', 'banana', 'cherry']);
console.log('Следующее значение массива:', gen.next().value); // 'apple'
console.log('Следующее значение массива:', gen.next().value); // 'banana'
console.log('Следующее значение массива:', gen.next().value); // 'cherry'
console.log('Следующее значение массива:', gen.next().done);  // true

/*
Создайте свою функцию, которая принимает 2 параметра:
1 - одномерный массив
2 - функцию для изменения элементов массива
!!! Условие: изначальный массив, переданный в функцию не должен быть изменен!
Пример:
const initArr = [1, 2, 3, 4, 5];
const callback = (item, index, array) => item * 2;
const res = map(initArr, callback);
console.log(initArr); // [1, 2, 3, 4, 5]
console.log(res); // [2, 4, 6, 8, 10]
*/

function map(arr, fun) {
    const newArr = [];
    for(let index in arr) {
        newArr[index] = fun(arr[index]);
    }
    return newArr;
}

const initArr = [1, 2, 3, 4, 5];
const callback = (item, index, array) => item * 2;
const res = map(initArr, callback);
console.log('Исходный массив:', initArr); // [1, 2, 3, 4, 5]
console.log('Изменённый массив:', res); // [2, 4, 6, 8, 10]

/*
Часто приходится выводить информацию в консоль, и эти сообщения могут быть разных типов
Например:
 если мы хотим вывести сообщение об ошибке, оно может быть такого формата: ERROR: <описание ошибки>
 так же мы можем захотеть выводить отладочную информацию: DEBUG: <описание информации>
 или сообщения информационного характера: INFO: <описание информации>
Задание:
Создать функцию которая позволит выводить сообщения в консоль для разных уровней логирования.
 Пример использования:
 const errorLog = createLogger('ERROR: ');
 errorLog('Пофикси меня!')// ERROR: Пофикси меня!
 const debugLog = createLogger('DEBUG: ');
debugLog('Важная отладочная информация!')// DEBUG: Важная отладочная информация!
*/

function createLogger(errorType) {
    return (message) => {
        return `${errorType}: ${message}`;
    }
}

const errorLog = createLogger('ERROR: ');
console.log('Вывод сообщения отладчика типа ERROR -', errorLog('Пофикси меня!'))// ERROR: Пофикси меня!
const debugLog = createLogger('DEBUG: ');
console.log('Вывод сообщения отладчика типа DEBUG: -', debugLog('Важная отладочная информация!'))// DEBUG: Важная отладочная информация!

/*
 Напишите функцию для вычисления суммы всех элементов массива с использованием рекурсии и именованного функционального выражения (NFE).
 - Функция должна принимать массив чисел и возвращать сумму всех его элементов.
 - Используйте рекурсию для вычисления суммы.
 - Используйте именованное функциональное выражение для определения рекурсивной функции.
*/

const getSumOfElements = function sum(arr) {
    if(arr.length === 0) {
        return 0;
    }
    return arr[0] + sum(arr.slice(1));
}

const arr = [1, 2, 3, 12, 55, 12, 67];
console.log('Сумма элементов:', getSumOfElements(arr));

/*
Используя IIFE, создайте блок кода, где переменная x доступна только внутри функции. Внутри функции выполните следующую логику:
Генерируйте массив случайных чисел длиной 5.
Найдите минимальное и максимальное значение в массиве.
Выведите массив, минимальное и максимальное значение.
*/

const result = (function(){
    let x = 0;
    const arr = [];
    for(let i = 0; i < 5; i++){
        arr[i] = Math.floor(Math.random() * 5);
    }
    return {
        array: arr,
        min: Math.min(...arr),
        max: Math.max(...arr)
    }
})();

try{ // Проверка, что x доступна только внутри функции
    console.log(x)
} 
catch(e){
    console.log('Проверка попытки доступа к x вне IIFE функции -', errorLog(e.message));
}

console.log('Вывод объекта со значениями:', result);