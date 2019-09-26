/*
 * 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
 */

let x = 0;
while (x <= 100) {
    if (x % 2 === 0) {
        console.log(x)
    }
    x++;
}

/*
 *  2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
    3. Товары в корзине хранятся в массиве. Задачи:
    a) Организовать такой массив для хранения товаров в корзине;
    b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
 */


function addGoodsInCart(cartServerResponse) {
    cartArr.push(castingServerResponse(cartServerResponse));
    return cartArr;
}

function castingServerResponse(inputData) {
    return inputData.replace(/\s/g, '').split(',');
}

function countBasketPrice(cartArr) {
    let cartCost = 0;
    for (let i = 0; i <= cartArr.length - 1; i++) {
        cartCost += (+cartArr[i][2]*cartArr[i][1]); // [i][2] - цена, [i][1] - количество товаров
    }
    return cartCost;
}


let cartArr = [];
let cartServerResponse = prompt('Введите ответ сервера о товарах в корзине в формате: id, count, price');

console.log(addGoodsInCart(cartServerResponse));

while (confirm("Добавить еще один товар?")) {
    cartServerResponse = prompt('Введите ответ сервера о товарах в корзине в формате: id, count, price');
    addGoodsInCart(cartServerResponse);
}

document.getElementById('price').innerHTML = `Цена всех товаров в корзине: ${countBasketPrice(cartArr)} $`; 

/*
 * 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
 * for(…){// здесь пусто}
*/

for(let i=1;i<=9;console.log(i++)){}

/*
 * 5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
 *  x
 *  xx
 *  xxx
 *  xxxx
 *  xxxxx
 */
let pyramid = 'x';
for (let i=1;i<=20;i++){
    console.log(`${pyramid}`);
    pyramid+='x';
}