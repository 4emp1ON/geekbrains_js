// /*
// lesson-1 task-1
//  */
//
// let tempCelsius = prompt("Введите значение температуры в градусах Цельсия");
// let tempFahrenheit = (9 / 5) * tempCelsius + 32;
// if (!tempCelsius){
//     tempCelsius=prompt('Введите валидное значение температуры в градусах Цельсия')
// }
// alert(tempCelsius+' градусов Цельсия будут равняться \n'+ tempFahrenheit + ' градусов по Фаренгейту');
//
// /*
// lesson-1 task-2
//  */
//
// let a=1;
// let b=2;
// let c='3';
//
// console.log(a+b); //3
// console.log(a-b); // -1
// console.log(a+c); // 13 (конкатенация)
// console.log(a-c); // -2 (переменная c преобразована в число)
// console.log(a*c); // 3 (переменная c преобразована в число)
// console.log(a/c); // 0.333333 (переменная c преобразована в число)
//
// /*
// lesson-1 task-3
//  */
//
// let admin = 'Василий';
// let name = admin; // присваивается значение которое именно в этот момент находится в переменной, при изменении admin то что мы присвоили переменной name не изменится
// console.log(name);
// admin+=admin;
// console.log('в переменной admin: '+admin+'\nв переменной name '+name);
//
// /*
// lesson-1 task-4
//  */
//
// console.log(1000 + "108"); // 1000108. Сложение со строкой приведет к склеиванию значений.
// console.log(true+'108'); // true108 тоже самое
//
// /*
// lesson-1 task-5
//  */
//
// // в случае с defer скрипты гарантированно отрабатывают когда страница уже отрендерена и скрипты выполняются в порядке их вызова на странице. Сначала весь стэк скриптов загружается,
// // а затем они начинают по очереди исполнятся, но при этом в первую очередь прогружается вся страница.
// // в случае с async также скрипты не мешают началу загрузки страницы, но если скрипт маленький, а страница большая, то он может загрузиться раньше всего документа,
// // но при этом начнет исполняться немедленно после того как полностью загрузится. Друг от друга async скрипты также не зависят.


/*
 * lesson-2 task-1
 */
var a = 1, b = 1, c, d;
c = ++a;
//alert(c);// 2
// в данном варианте записи сначала производится увеличение переменной а на 1, а потом производится присвоение данного значения переменной c;
d = b++;
//alert(d); // 1
//в данном варианте сначала происходит присвоение переменной значения хранящегося в b переменной d, а затем увеличение d на 1;
c = (2 + ++a);
//alert(c);// 5
//на данном этапе после выполнения первой операции с=++а в переменной а хранится значение 2.
//запись ++а говорит о том что сначала необходимо увеличить значение, хранящееся в переменной а на 1, а затем произвести операцию сложения 2+3;
d = (2 + b++);
//alert(d);// 4
// тоже самое, но сначала выполняется операция 2+2, двойка заданная в функции и двойка, которая хранится в переменной b после выполнения
// операции d = b++;
//alert(a);// 3
//исходное значение а = 1, дважды использованное выражение ++а увеличило значение а на 2
//alert(b);// 3
//исходное значение b = 1, дважды использованное выражение b++ также увеличило значение b на 2

/*
 * lesson-2 task-2
 */

var a = 2;
var x = 1 + (a *= 2);
// console.log(x); // 5
// данный результат обусловлен выполнением последовательности математических операций
// сначала выполняется выражение, указанное в скобках, если развернуть его, получится a=a*2 - результатом данной операции будет 4
// затем выполняется действие за скобками 1+4=5

/*
 * lesson-2 task-3
 */
function getRandomPositiveNegativeNumber() {
    let positiveNegativeIndex = Math.round(Math.random());
    return positiveNegativeIndex === 1 ? Math.round(Math.random() * 100) : Math.round(Math.random() * 100) * -1;
}

a = getRandomPositiveNegativeNumber();
b = getRandomPositiveNegativeNumber();
console.log(`a= ${a} b= ${b}`);

if (a >= 0 && b >= 0) {
    console.log(`Разность чисел a и b = ${a - b}. Выведено т.к. a>=0 & b>=0`);
} else if (a < 0 && b < 0) {
    console.log(`Произведение чисел a и b = ${a - b} Выведено т.к. a<0 & b<0`);
} else if (a >= 0 && b < 0 || a < 0 && b >= 0) {
    console.log(`Сумма чисел a и b = ${a + b} Выведено т.к. a и b разных знаков`);
}

/*
 * lesson-2 task-4
 */

a = Math.round(Math.random() * 15);
console.log(`Начальное значение а= ${a}`);
switch (a) {
    case 1:
        console.log(1);
    case 2:
        console.log(2);
    case 3:
        console.log(3);
    case 4:
        console.log(4);
    case 5:
        console.log(5);
    case 6:
        console.log(6);
    case 7:
        console.log(7);
    case 8:
        console.log(8);
    case 9:
        console.log(9);
    case 10:
        console.log(10);
    case 11:
        console.log(11);
    case 12:
        console.log(12);
    case 13:
        console.log(13);
    case 14:
        console.log(14);
    case 15:
        console.log(15 + ` Поздравляю, вашему коду завидует один индус`);
}

/*
 * lesson-2 task-5
 */

a = getRandomPositiveNegativeNumber();
b = getRandomPositiveNegativeNumber();

console.log(`a= ${a} b= ${b}`);

function makeSum(a, b) {
    if (!isNaN(parseFloat(a)) && !isNaN(a - 0) && !isNaN(parseFloat(b)) && !isNaN(b - 0)) {
        return a + b;
    }
}

// console.log(`результат сложения: ${makeSum(a, b)}`);

function makeSubstraction(a, b) {
    if (!isNaN(parseFloat(a)) && !isNaN(a - 0) && !isNaN(parseFloat(b)) && !isNaN(b - 0)) {
        return a - b;
    }
}

// console.log(`результат вычитания: ${makeSubstraction(a, b)}`);

function makeMultiply(a, b) {
    if (!isNaN(parseFloat(a)) && !isNaN(a - 0) && !isNaN(parseFloat(b)) && !isNaN(b - 0)) {
        return a * b;
    }
}

// console.log(`результат умножения: ${makeMultiply(a, b)}`);

function makeDivision(a, b) {
    if (!isNaN(parseFloat(a)) && !isNaN(a - 0) && !isNaN(parseFloat(b)) && !isNaN(b - 0)) {
        return a / b;
    }
}

// console.log(`результат деления: ${makeDivision(a, b)}`);

/*
 * lesson-2 task-6
 */

function mathOperation(arg1, arg2, operation) {
    if (!isNaN(parseFloat(arg1)) && !isNaN(arg1 - 0) && !isNaN(parseFloat(arg2)) && !isNaN(arg2 - 0)) {
        switch (operation.toLowerCase()) {
            case "сложение":
                return makeSum(arg1, arg2);
            case "вычитание":
                return makeSubstraction(arg1, arg2);
            case "умножение":
                return makeMultiply(arg1, arg2);
            case "деление":
                return makeDivision(arg1, arg2);
        }
    }
}

console.log(`Результат сложения: ${mathOperation(a, b, "Сложение")}`);
console.log(`Результат деления: ${mathOperation(a, b, "Деление")}`);
console.log(`Результат вычитания: ${mathOperation(a, b, "Вычитание")}`);
console.log(`Результат умножения: ${mathOperation(a, b, "Умножение")}`);

/*
 * lesson-2 task-7
 */

null > 0; // false
// 4,5 шаги абстрактного алгоритма сравнения для отношений - null преобразуется в +0, 0 остается 0, на 8 шаге проверяется если +0 = 0 возвращается false;
null == 0; // false
// используется абстрактный алгоритм сравнения для равенств
// не выполняется ни одно условие удовлетворяющее данному алгоритму и на 22, заключительном шаге возвращается false как значение по-умолчанию.
null >= 0; // true
//если a=null<0 принимает значение false, значит значит (null>=0)=!a, согласно довольно занимательной статье на хабре. Таким образом, при сравнении
// выполняется только один алгоритм и результат выполнения данного алгоритма определяет сразу две взаимоисключающие друг друга логические операции
// т.е. в один момент времени может быть истина только одна из них и если одна истина значит другая ложная и наоборот.

/*
 * lesson-2 task-8
 */

function power(val, pow) {
    if (!isNaN(parseFloat(val)) && !isNaN(val - 0) && !isNaN(parseFloat(pow)) && !isNaN(pow - 0))

        return pow === 1 ? val : val * power(val, pow - 1);

}

console.log(`а в 3 степени равно: ${power(a, 3)}`);