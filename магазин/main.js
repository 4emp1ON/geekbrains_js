'use strict';
const products = [
    {
        id: 1,
        name: 'MANGO PEOPLE T-SHIRT',
        price: 52,
        img: './img/items/Item1.jpg',
    },
    {
        id: 2,
        name: 'MANGO PEOPLE BOOTS',
        price: 30,
        img: './img/items/Item2.jpg',
    },
    {
        id: 3,
        name: 'MANGO PEOPLE JACKET',
        price: 90,
        img: './img/items/Item3.jpg',
    },
    {
        id: 4,
        name: 'MANGO PEOPLE sweatshirt',
        price: 29,
        img: './img/items/Item4.jpg',
    },
    {
        id: 5,
        name: 'MANGO PEOPLE pants',
        price: 44,
        img: './img/items/Item5.jpg',
    },
    {
        id: 6,
        name: 'MANGO PEOPLE cap',
        price: 80,
        img: './img/items/Item6.jpg',
    },
    {
        id: 7,
        name: 'MANGO PEOPLE shirt',
        price: 95,
        img: './img/items/Item7.jpg',
    },
    {
        id: 8,
        name: 'MANGO PEOPLE trousers',
        price: 100,
        img: './img/items/Item8.jpg',
    },
];

const cart = {
    goodsInCart: [],
    total: 0,

    renderCart() {
        this.prepareForRender();
        for (let elem in this.goodsInCart) {
            this.renderCartElement(this.goodsInCart[elem]);
        }
        this.renderTotal();
    },

    renderCartElement(good) {
        this.total += good.price;
        const elementToRender = this.createCartElement(good);
        const parentElement = document.querySelector('.cart_drop');
        parentElement.insertAdjacentHTML('afterbegin', elementToRender);

    },

    renderTotal() {
        document.querySelector('.cart-drop-total-value').innerHTML = `$${this.total}.00`;
    },

    createCartElement(good) {
        return `
                    <div class="cart-drop-item" id = "${good.id}">
                        <div class="cart-drop-img"><img src="img/incart-men.jpg" alt="Cool t-shirt"></div>
                        <div class="cart-drop-desc">
                            <ul>
                              <li class="cart-drop-desc_header">${good.name}</li>
                              <li class="cart-drop-desc_rate-star"></li>
                              <li class="cart-drop-desc_price">1 x &#36;${good.price}</li>
                            </ul>
                        </div>
                        <div class="cart-drop-del"><a href="#"><i class="fa fa-times-circle" aria-hidden="true"></i></a></div>
                    </div>
        `
    },
    prepareForRender() {
        let cartElems = [...document.querySelectorAll('.cart-drop-item')];
        for (let elem in cartElems) {
            cartElems[elem].remove();
        }
    }
};

const catalog = {
    goodOnPage: 1,


    renderCatalog(goodOnPage, targetTag) {
        this.goodOnPage = goodOnPage;
        for (let i = 1; i <= this.goodOnPage; i++) {
            this.renderGood(i, targetTag);
        }
        this.clickListener();
    },
    renderGood(productId, targetTag) {
        let elementToRender = this.goodHTMLGenerate(+productId);
        const parentElement = document.querySelector(`${targetTag}`);
        parentElement.insertAdjacentHTML("beforeend", elementToRender);
    },

    goodHTMLGenerate(productId) {
        let nowGood = this.currentGood(productId);
        return `
            <div class="item" id ="${nowGood.id}">
            <ul>
            <li class="item-image"><img src="${nowGood.img}" alt="${nowGood.name}">
            <div class="item-image-hover"><a href="#">
            <ul class="add-to-cart-hover">
            <li><img class="cart-white" src="img/cart_white.svg" alt="cart"></li>
            <li>Add to Cart</li>
        </ul></a></div>
        </li>
        <li class="item-name"><a href="singlePage.html"> ${nowGood.name}</a></li>
        <li class="item-cost">&#36;${nowGood.price}.00</li>
        </ul>
        </div>
        `;
    },

    currentGood(productId) {
        for (let id in products) {
            if (products[id].id === productId) {
                return products[id];
            }
        }
    },
    clickListener() {
        let tagToListen = document.querySelector('.goods__container');
        tagToListen.addEventListener('click', event =>
            this.addToCart(this.goUpInDOM((event.target), 6)));
    },
    goUpInDOM(element, howMuch) {
        for (let i = 0; i < parseInt(howMuch); i++) {
            element = element.parentNode;
        }
        return element;
    },
    addToCart(itemElement) {
        if (itemElement.id) {
            cart.goodsInCart.push(this.currentGood(+itemElement.id));
            cart.renderCart();
        }
    },
};


catalog.renderCatalog(8, '.goods__container');