'use strict';

const settings = {
    rowCount: 10,
    colCount: 10,
    startPositionX: 0,
    startPositionY: 0,
};

const player = {
    x: null,
    y: null,

    init(startX, startY) {
        this.x = startX;
        this.y = startY;
    },

    move(direction) {
        switch (direction) {
            case 's':
                this.y++;
                if (this.y > 9) {
                    this.y = 9;
                    alert('Туда не ходи, сюда ходи');
                    game.log[game.log.length - 1] += ' ошибка перемещения, попытка выйти за пределы поля';
                    break;
                }
                break;
            case 'a':
                this.x--;
                if (this.x < 0) {
                    this.x = 0;
                    alert('Туда не ходи, сюда ходи');
                    game.log[game.log.length - 1] += '; ошибка перемещения, попытка выйти за пределы поля';
                    break;
                }

                break;
            case 'd':
                this.x++;
                if (this.x > 9) {
                    this.x = 9;
                    alert('Туда не ходи, сюда ходи');
                    game.log[game.log.length - 1] += ' ошибка перемещения, попытка выйти за пределы поля';
                    break;
                }

                break;
            case 'w':
                this.y--;
                if (this.y < 0) {
                    this.y = 0;
                    alert('Туда не ходи, сюда ходи');
                    game.log[game.log.length - 1] += ' ошибка перемещения, попытка выйти за пределы поля';
                    break;
                }

                break;
        }
    }
};


const game = {
    settings,
    player,
    log: ['Начало игры'],

    run() {
        this.player.init(this.settings.startPositionX, this.settings.startPositionY);

        while (true) {
            this.render();

            const direction = this.getDirection();

            if (direction === 'q') {
                return alert('До свидания!');
            }

            this.player.move(direction);
        }
    },

    render() {
        let map = '';

        for (let row = 0; row < this.settings.rowCount; row++) {
            for (let col = 0; col < this.settings.colCount; col++) {
                if (this.player.y === row && this.player.x === col) {
                    map += 'o '
                } else {
                    map += 'x '
                }
            }
            map += '\n';
        }

        console.clear();
        console.log(map);
    },

    getDirection() {
        const availableDirections = ['q', 's', 'a', 'd', 'w'];
        let directionName = '';

        while (true) {
            const direction = prompt('С помощью WASD выберите направление для перемещения. Q для выхода.');

            if (!availableDirections.includes(direction)) {
                alert(`Для перемещения необходимо выбрать направление клавишами: ${availableDirections.join(', ')}.`);
                continue;
            }
            switch (direction) {
                case 's':
                    directionName = 'переместился вниз';
                    break;
                case 'a':
                    directionName = 'переместился влево';
                    break;
                case 'd':
                    directionName = 'переместился вправо';
                    break;
                case 'w':
                    directionName = 'переместился вверх';
                    break;
                case 'q':
                    directionName = 'вышел из игры';
            }
            this.log.push(`Игрок находился на клетке ${this.player.x} : ${this.player.y} и ${directionName}`);

            return direction;
        }
    },

};

game.run();
console.log(game.log);


/*
 * 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект,
 * в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект:
 * {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log
 * и вернуть пустой объект.
 */

function splitNum(num) {
    if (num < 0 || num > 999) {
        return alert("число должно быть больше 0 и меньше 999");
    }
    const splitObj = {"единицы": 0, "десятки": 0, "сотни": 0};
    splitObj.единицы = +(num.toString()[2]);
    splitObj.десятки = +(num.toString()[1]);
    splitObj.сотни = +(num.toString()[0]);
    return splitObj;
}

// console.log(splitNum(+prompt('Введите число от 0 до 999')));