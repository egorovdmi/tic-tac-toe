import { CellState } from 'src/app/cell/cell-state.enum';

export class Cell {
    public position: Number;
    public state: CellState;

    constructor(position: Number, state: CellState) {
        this.position = position;
        this.state = state;
    }
}
