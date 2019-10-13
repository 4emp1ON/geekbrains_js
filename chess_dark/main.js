const defaultData = [
	['4W', '3W', '2W', '5W', '6W', '2W', '3W', '4W'],
	['1W', '1W', '1W', '1W', '1W', '1W', '1W', '1W'],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	['1B', '1B', '1B', '1B', '1B', '1B', '1B', '1B'],
	['4B', '3B', '2B', '5B', '6B', '2B', '3B', '4B'],
];

const figureMap = {
	0: 'empty',
	1: 'peshka',
	2: 'slon',
	3: 'kon',
	4: 'ladya',
	5: 'koroleva',
	6: 'korol'
}

const figureColor = {
	'black': 'B',
	'white': 'W'
}

const xMap = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].reverse();

class ChessGame {
	constructor(targetId, data) {
		this.data = data || defaultData;
		this.field = document.querySelector(`#${targetId}`);
		this.field.innerHTML = this.render();
	}

	render() {
		let newField = `<div class="field">`;
		this.data.forEach((row, y) => {
			newField += `<div class="row">`;
			row.forEach((cell, x) => {
				newField += `<div class="cell">${this.getFigure(cell)}</div>`;
			})
			newField += `</div>`;
		})
		newField += `</div>`;
		return newField;
	}

	getFigure(cell) {
		if (!cell) return '';
		return figureMap[cell[0]];
	}
}

const game = new ChessGame('field1');