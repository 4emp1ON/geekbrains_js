const cart = {
    productInCart: [],
    total: 0,

    init() {
        let targetTag = document.querySelector('.cart');
        targetTag.innerHTML = '<h1>Корзина пуста</h1>';
        let myButtonAddGoodInCart = document.createElement('INPUT');
        myButtonAddGoodInCart.type = 'button';
        myButtonAddGoodInCart.value = 'Добавить случайный товар';
        myButtonAddGoodInCart.addEventListener('click', function () {
            let x = cart.randGood();
            cart.productInCart.push(products[x]);
            cart.total = 0;
            cart.renderCart();
        });
        targetTag.insertAdjacentElement('afterend', myButtonAddGoodInCart);

    },
    randGood() {
        return Math.round(Math.random() * (Object.keys(products).length - 1));

    },
    renderCart() {
        const nowTag = document.querySelector('.cart');
        nowTag.innerHTML = '';
        this.productInCart.forEach(elem => {
            let targetTag = document.querySelector('.cart');
            let newChildName = document.createElement('DIV');
            newChildName.className = 'good_name';
            newChildName.innerText = elem.name;
            targetTag.insertAdjacentElement("afterbegin", newChildName);
            let newChildSize = document.createElement('DIV');
            newChildSize.className = 'good_size';
            let randSize = Math.round(Math.random() * (elem.size.length - 1));
            newChildSize.innerText = `Размер: ${elem.size[randSize]}`;
            targetTag.insertAdjacentElement("afterbegin", newChildSize);
            let newChildPrice = document.createElement('DIV');
            newChildPrice.className = 'good_price';
            newChildPrice.innerText = `Цена: ${elem.price} руб.`;
            this.total += elem.price;
            targetTag.insertAdjacentElement("afterbegin", newChildPrice);
            targetTag.insertAdjacentElement("afterbegin", document.createElement('BR'));
        });
        let totalPrice = document.createElement('h2');
        totalPrice.className = 'total_price';
        totalPrice.innerText = `Всего в корзине товара на : ${this.total} руб.`;
        nowTag.insertAdjacentElement('beforeend', totalPrice);
    },

    catalogRender() {
        const catalogHeader = document.createElement('H2');
        catalogHeader.innerText = 'Каталог товаров';
        document.querySelector('.catalog').insertAdjacentElement('beforebegin', catalogHeader);
        for (let key in products) {
            let targetTag = document.querySelector('.catalog');
            targetTag.insertAdjacentElement('afterbegin', this.createCatalogElement(products[key].name, products[key].price, products[key].size));
        }
    },

    createCatalogElement(name, price, size) {
        const addToCartButton = document.createElement('INPUT');
        addToCartButton.type = 'button';
        addToCartButton.value = `Добавить ${name} в корзину`;
        addToCartButton.style.marginTop = '10px';
        addToCartButton.addEventListener('onclick', function (name) {
            for (let elem in products) {
                if (products[elem].name == name) {
                    this.productInCart.push(products[elem]);
                }
            }
        });
        const wrapperTag = document.createElement('DIV');
        wrapperTag.className = 'good_wrapper';
        const nameTag = document.createElement('DIV');
        nameTag.className = 'good_name';
        nameTag.innerText = name;
        const sizeTag = document.createElement('DIV');
        sizeTag.className = 'good_size';
        sizeTag.innerText = `Доступные размеры: ${size}`;
        const priceTag = document.createElement('DIV');
        priceTag.className = 'good_price';
        priceTag.innerText = `Цена: ${price}`;
        wrapperTag.appendChild(nameTag);
        wrapperTag.appendChild(sizeTag);
        wrapperTag.appendChild(priceTag);
        wrapperTag.appendChild(addToCartButton);
        wrapperTag.style.marginTop = '10px';
        return wrapperTag;
    },
    addToCart(name) {
        for (let elem in products) {
            if (products[elem].name == name) {
                this.productInCart.push(products[elem]);
            }
        }

    }
};
const products = {
    0: {
        name: 'Свитшот',
        size: ['xs', 's', 'l', 'xl'],
        price: 50
    },
    1: {
        name: 'Футболка',
        size: ['xs', 's', 'l', 'xl'],
        price: 70
    },
    2: {
        name: 'Ботинки',
        size: ['37', '38', '39', '40'],
        price: 100
    },
    3: {
        name: 'Пистолет',
        size: ['9mm', '9x17', '.410', '12x76'],
        price: 70
    },

};

cart.init();
cart.catalogRender();

