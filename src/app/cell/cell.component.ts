import { Component, OnInit, Input } from '@angular/core';
import { Cell } from 'src/app/cell/cell.model';
import { CellState } from "src/app/cell/cell-state.enum";

@Component({
    selector: 'app-cell',
    templateUrl: './cell.component.html',
    styleUrls: ['./cell.component.css'],
})
export class CellComponent implements OnInit {
    @Input() cell: Cell;

    constructor() {}

    ngOnInit() {}

    getText() {
        switch (this.cell.state) {
            case CellState.X:
                return "X";
            case CellState.O:
                return "O";
            default:
                return "";
        }
    }
}
