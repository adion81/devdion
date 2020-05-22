import React, { Component } from 'react';
import Square from './Square';

export default class Game extends Component {

    createSudoku() {
        return this.props.grid.map(function (row,i) {

            return <tr key={i}>{row.map(function (cell) {
                return <Square
                    key={cell.id}
                    id={cell.id}
                    isSolved={cell.isSolved}
                    value={cell.value}
                    row={cell.row}
                    col={cell.col}
                    box={cell.box}
                    selected={this.props.selected}
                    highlightSelect={this.props.highlightSelect}
                />
            },this)}</tr>
        },this)

    }
    render() {
        return (
            <table className="board xsm:w-4/4 xsm:mx-auto md:w-3/6">
                <tbody>
                    {this.createSudoku()}
                </tbody>
            </table>
        );
    }

}