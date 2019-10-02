const game = {
    moneyWon: 0,
    questionNumber: 1,

    getPlayerAnswer() {

        let randQuestionNumber = Math.round(Math.random() * (questions.length - 1));
        while (questions[randQuestionNumber].used !== 0) {
            randQuestionNumber = Math.round(Math.random() * (questions.length - 1));
        }
        console.log(randQuestionNumber);
        let question = questions[randQuestionNumber].questionName;
        let answer = questions[randQuestionNumber].answer;
        let randomizedAnswers = this.randomizeAnswers(answer.slice());
        console.log(randomizedAnswers);
        let getPlayerAnswer = prompt(`Вопрос звучит следующим образом 
            ${question}
            1. ${randomizedAnswers[0]}
            2. ${randomizedAnswers[1]}
            3. ${randomizedAnswers[2]}
            4. ${randomizedAnswers[3]}
            Введите номер ответа который считаете правильным`);
        while (!+getPlayerAnswer >= 4 && !+getPlayerAnswer <= 0) {
            prompt(`Введен неправильный вариант ответа
                Вопрос звучит следующим образом 
            ${question}
            1. ${randomizedAnswers[0]}
            2. ${randomizedAnswers[1]}
            3. ${randomizedAnswers[2]}
            4. ${randomizedAnswers[3]}
            Введите номер ответа который считаете правильным`);

        }

        switch (+getPlayerAnswer) {
            case 1:
                if (randomizedAnswers[0] === questions[randQuestionNumber].answer[0]) {
                    questions[randQuestionNumber].used = 1;
                    return true;
                }
                break;
            case 2:
                if (randomizedAnswers[1] === questions[randQuestionNumber].answer[0]) {
                    questions[randQuestionNumber].used = 1;
                    return true;
                }
                break;
            case 3:
                if (randomizedAnswers[2] === questions[randQuestionNumber].answer[0]) {
                    questions[randQuestionNumber].used = 1;
                    return true;
                }
                break;
            case 4:
                if (randomizedAnswers[3] === questions[randQuestionNumber].answer[0]) {
                    questions[randQuestionNumber].used = 1;
                    return true;
                }
                break;
        }
        return false;

    },

    run() {
        for (let maxQuestion = 0; maxQuestion <= questions.length - 1; maxQuestion++) {
            const playerAnswer = this.getPlayerAnswer();
            if (playerAnswer && maxQuestion == questions.length - 1) {
                this.moneyWon += 500;
                alert(`И у нас есть победитель! Напишите номер карты, срок действия, фамилию имя и cvc-код 
                    на нашу почту и получите свой выйгрыш который составил ${this.moneyWon} рублей! (но это не точно)`);
                break;
            }
            if (playerAnswer) {
                this.moneyWon += 500;
                this.questionNumber++;
                alert(`Совершенно верно! Ваш выйгрыш составил ${this.moneyWon} рублей!`);
            } else {
                alert(`Вы проиграли все деньги! Игра окончена!`);
                break;
            }
        }
    },
    randomizeAnswers(answer) {
        return answer.sort(function () {
            return Math.random() - 0.5
        });
    },
};
const questions = [
    {
        questionName: 'Как зовут Джеймс Бонда',
        answer: ['>Бонд, Джеймс Бонд', 'Джеки Чан', 'Киану Ривз', 'Стивен Сигал'],
        used: 0
    },
    {
        questionName: 'Сколько цветов у радуги',
        answer: ['>Семь', 'Шесть', 'Пять', 'Двеннадцать'],
        used: 0
    },
    {
        questionName: 'Самая большая по площади страна в мире',
        answer: ['>Россия', 'США', 'Канада', 'Китай'],
        used: 0
    },
    {
        questionName: 'Покажите где раки зимуют',
        answer: ['>Вот, на дне озера', 'У излучины реки', 'Рядом с крабами', 'В раковарке'],
        used: 0
    },
    {
        questionName: 'Сколько будет 2х2',
        answer: ['>Четыре', 'Три', 'Один', 'Как говорит мой бухгалтер: "Сколько надо - столько и сделаем"'],
        used: 0
    },
    {
        questionName: 'Почему люди не летают как птицы?',
        answer: ['>У них нет крыльев', 'Они бояться летать', 'Не правильный ответ', 'Оставлю с прошного вопроса, глядишь, никто не заметит в раковарке'],
        used: 0
    },
    {
        questionName: '1024 гигабайта это',
        answer: ['>1 Терабайт', '1 Пентабайт', '2 Терабайта', 'Еще один неправильный ответ'],
        used: 0
    },
    {
        questionName: 'Предположите фамилию по имени и отчеству Александ Сергеевич',
        answer: ['>Пушкин', 'Лермонтов', 'Олюнин', 'Дятлов'],
        used: 0
    },
];
alert('Для отладки правильные ответы помечены знаком >');
game.run();