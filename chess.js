'use strict';
const game = {
    rowCount: { // строки будут j в цикле рендера
        1: 'H',
        2: 'G',
        3: 'F',
        4: 'E',
        5: 'D',
        6: 'C',
        7: 'B',
        8: 'A'
    },
    colCount: 8, // столбцы будут i в рендере
    cellSize: '50px',
    figureSize: '45px',
    render() {
        const playGround = document.querySelector('.chess_board');
        for (let i = 1; i <= 8; i++) {
            for (let j = 1; j <= 8; j++) {
                playGround.appendChild(this.cellBuild(i, j));

            }
        }
    },
    cellBuild(i, j) {
        if (i % 2 > 0 && j % 2 > 0) { // если строка нечетная
            if (i % 2 > 0) { // если столбец нечетный присвоить нечетным ячейкам коричневый цвет
                let divInsertStatement = this.rowCount[j] + i.toString();
                let myDiv = document.createElement('DIV');
                myDiv.id = divInsertStatement;
                myDiv.className = 'chess_cell';
                myDiv.style.backgroundColor = 'rgba(43, 39, 39, 0.7)';
                return this.startAllocation(myDiv);
            } else { // иначе белый
                let divInsertStatement = this.rowCount[j] + i.toString();
                let myDiv = document.createElement('DIV');
                myDiv.id = divInsertStatement;
                myDiv.className = 'chess_cell';
                myDiv.style.backgroundColor = '#fff';
                return this.startAllocation(myDiv);
            }
        } else { // в обратном случае если строка четная
            if (i % 2 === 0 && j%2===0) { // в каждой четной строке присвоить коричневый цвет ячейке
                let divInsertStatement = this.rowCount[j] + i.toString();
                let myDiv = document.createElement('DIV');
                myDiv.id = divInsertStatement;
                myDiv.className = 'chess_cell';
                myDiv.style.backgroundColor = 'rgba(43, 39, 39, 0.7)';
                return this.startAllocation(myDiv);
            } else { // иначе белый
                let divInsertStatement = this.rowCount[j] + i.toString();
                let myDiv = document.createElement('DIV');
                myDiv.id = divInsertStatement;
                myDiv.className = 'chess_cell';
                myDiv.style.backgroundColor = '#fff';
                return this.startAllocation(myDiv);
            }

        }

    },
    startAllocation(elem) {
        let nowFigure = '';
        switch (elem.id) {
            case 'H8':
            case 'A8':
                nowFigure = document.createElement('DIV');
                nowFigure.style.position = 'absolute';
                nowFigure.id = 'white_rook';
                nowFigure.className = 'figure';
                nowFigure.innerHTML = '<img src="img/rook.png" alt="rook">';
                elem.appendChild(nowFigure);
                return elem;
            case 'H1':
            case 'A1':
                nowFigure = document.createElement('DIV');
                nowFigure.style.position = 'absolute';
                nowFigure.id = 'black_rook';
                nowFigure.className = 'figure';
                nowFigure.innerHTML = '<img src="img/rook_black.png" alt="rook">';
                elem.appendChild(nowFigure);
                return elem;
            case 'G8':
            case 'B8':
                nowFigure = document.createElement('DIV');
                nowFigure.style.position = 'absolute';
                nowFigure.id = 'white_knight';
                nowFigure.className = 'figure';
                nowFigure.innerHTML = '<img src="img/knight_white.png" alt="White knight">';
                elem.appendChild(nowFigure);
                return elem;
            case 'G1':
            case 'B1':
                nowFigure = document.createElement('DIV');
                nowFigure.style.position = 'absolute';
                nowFigure.id = 'black_knight';
                nowFigure.className = 'figure';
                nowFigure.innerHTML = '<img src="img/knight_black.png" alt="Black knight">';
                elem.appendChild(nowFigure);
                return elem;
            case 'F8':
            case 'C8':
                nowFigure = document.createElement('DIV');
                nowFigure.style.position = 'absolute';
                nowFigure.id = 'white_bishop';
                nowFigure.className = 'figure';
                nowFigure.innerHTML = '<img src="img/bishop_white.png" alt="White bishop">';
                elem.appendChild(nowFigure);
                return elem;
            case 'C1':
            case 'F1':
                nowFigure = document.createElement('DIV');
                nowFigure.style.position = 'absolute';
                nowFigure.id = 'black_bishop';
                nowFigure.className = 'figure';
                nowFigure.innerHTML = '<img src="img/bishop_black.png" alt="Black bishop">';
                elem.appendChild(nowFigure);
                return elem;
            case 'E8':
                nowFigure = document.createElement('DIV');
                nowFigure.style.position = 'absolute';
                nowFigure.id = 'white_queen';
                nowFigure.className = 'figure';
                nowFigure.innerHTML = '<img src="img/queen_white.png" alt="White queen">';
                elem.appendChild(nowFigure);
                return elem;
            case 'E1':
                nowFigure = document.createElement('DIV');
                nowFigure.style.position = 'absolute';
                nowFigure.id = 'black_queen';
                nowFigure.className = 'figure';
                nowFigure.innerHTML = '<img src="img/queen_black.png" alt="Black queen">';
                elem.appendChild(nowFigure);
                return elem;
            case 'D8':
                nowFigure = document.createElement('DIV');
                nowFigure.style.position = 'absolute';
                nowFigure.id = 'white_king';
                nowFigure.className = 'figure';
                nowFigure.innerHTML = '<img src="img/king_white.png" alt="White king">';
                elem.appendChild(nowFigure);
                return elem;
            case 'D1':
                nowFigure = document.createElement('DIV');
                nowFigure.style.position = 'absolute';
                nowFigure.id = 'black_king';
                nowFigure.className = 'figure';
                nowFigure.innerHTML = '<img src="img/king_black.png" alt="Black queen">';
                elem.appendChild(nowFigure);
                return elem;
            case 'A7':
            case 'B7':
            case 'C7':
            case 'D7':
            case 'E7':
            case 'F7':
            case 'G7':
            case 'H7':
                nowFigure = document.createElement('DIV');
                nowFigure.style.position = 'absolute';
                nowFigure.id = 'white_pawn';
                nowFigure.className = 'figure';
                nowFigure.innerHTML = '<img src="img/pawn_white.png" alt="White pawn">';
                elem.appendChild(nowFigure);
                return elem;
            case 'A2':
            case 'B2':
            case 'C2':
            case 'D2':
            case 'E2':
            case 'F2':
            case 'G2':
            case 'H2':
                nowFigure = document.createElement('DIV');
                nowFigure.style.position = 'absolute';
                nowFigure.id = 'black_pawn';
                nowFigure.className = 'figure';
                nowFigure.innerHTML = '<img src="img/pawn_black.png" alt="Black pawn">';
                elem.appendChild(nowFigure);
                return elem;
        }
        return elem;
    },

};

game.render();