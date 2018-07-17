import { Component, OnInit } from '@angular/core';
import { Cell } from 'src/app/cell/cell.model';
import { CellState } from 'src/app/cell/cell-state.enum';

const MaxCells = 9;
const MaxRowLength = 3;

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
    cellRows = new Array<Array<Cell>>();
    cells = new Array<Cell>();

    constructor() {}

    ngOnInit() {
        this.buildCells();
    }

    buildCells() {
        let rowIndex = 0;
        for (let i = 0; i < MaxCells; i++) {
            if (!this.cellRows[rowIndex]) {
                this.cellRows[rowIndex] = [];
            }

            let cell = new Cell(i, CellState.X);
            this.cellRows[rowIndex].push(cell);

            if (this.cellRows[rowIndex].length === MaxRowLength) {
                rowIndex++;
            }

            // for comfortable access add the cell object info the flat array.
            this.cells.push(cell);
        }
    }
}
