import React, { Component } from 'react';
import Timer from './Timer';
import Game from './Game';
import NumberSelect from './NumberSelect';
import Modal from './Modal';
import Strike from './Strike';
import board from './createGame';

import './Sudoku.css';

export default class Sudoku extends Component {

    constructor(props) {
        super(props)

        this.state = {
            numOfStrikes: 0,
            strikes: [
                [
                    {
                        id: 1,
                        made: false
                    },
                    {
                        id: 2,
                        made: false
                    },
                    {
                        id: 3,
                        made: false
                    }
                ],
                [
                    {
                        id: 4,
                        made: false
                    },
                    {
                        id: 5,
                        made: false
                    },
                    {
                        id: 6,
                        made: false
                    }
                ],
                [
                    {
                        id: 7,
                        made: false
                    },
                    {
                        id: 8,
                        made: false
                    },
                    {
                        id: 9,
                        made: false
                    }
                ]
            ],
            message: '',
            unSolvedSquares: 100,
            isPlaying: false,
            selected: {
                row: 0,
                col: 0,
                box: 0,
                square: 0
            },
            numbers: [
                {
                    value: 1,
                    id: 1
                },
                {
                    value: 2,
                    id: 2
                },
                {
                    value: 3,
                    id: 3
                },
                {
                    value: 4,
                    id: 4
                },
                {
                    value: 5,
                    id: 5
                },
                {
                    value: 6,
                    id: 6
                },
                {
                    value: 7,
                    id: 7
                },
                {
                    value: 8,
                    id: 8
                },
                {
                    value: 9,
                    id: 9
                }
            ],
            isGuessing: true,
            guess: 0,
            grid: []
        };
        

        this.baseState = this.state;

    }

    resetGame = () => {
        window.location.reload();
    }
    componentDidMount(){
        board
            .then(res => {
                this.setState(prevState => ({
                    grid: res
                }))
            })
            .catch(err => console.log(err))
            
    }
    getStrikeId = () => {
        this.setState( prevState =>({
            numOfStrikes: prevState.numOfStrikes + 1
        }))
    }
    addStrike = () => {
        this.getStrikeId();
        let strike = this.state.strikes.map(row => {
            row.map(cell => {
                if(cell.id === this.state.numOfStrikes + 1){
                    cell.made = true;
                }
                return cell;
            })
            return row;
        })
        this.setState({strikes: strike});
        if(this.state.numOfStrikes === 9){
            this.setState( prevState => ({
                message: prevState.message = 'YOU LOSE!!!'
            }))
        }
    }


    handleSelect = (id) => {
        console.log(id);
        let sId = this.state.selected.square;
        console.log(sId);
        let square = this.state.grid.map(g => {
            g.map(cell => {
                if (cell.id === sId) {
                    console.log(cell);
                    if (cell.value === id) {
                        cell.isSolved = true;
                        this.getSolved();
                    }
                    if (cell.value !== id) {
                        this.addStrike();
                    }
                }
                return cell;
            })
            return g;
        })
        this.setState({ grid: square });

    }


    highlightSelect = (row, col, box, id) => {
        if (this.state.isPlaying === true) {
            console.log("Row: " + row + ", Column: " + col + ", Box: " + box);
            this.setState(prevState => ({
                selected: {
                    row: row,
                    col: col,
                    box: box,
                    square: id
                }
            }))
        }
    }
    getSolved =() => {
        let unSolved = 0;
        for(var i = 0; i < this.state.grid.length; i++){
            for(var j = 0; j < this.state.grid[i].length; j++){
                if(this.state.grid[i][j].isSolved === false){
                    unSolved += 1;
                }
            }
        }
        if(unSolved === 0){
            this.setState( prevState => ({
                message: prevState.message = 'YOU WIN!!!!',
                
            }))
        }
        this.setState( prevState => ({
            unSolvedSquares: prevState.unSolvedSquares = unSolved
        }))
    }
    startPlaying = () => {
        this.setState(prevState => ({
            isPlaying: !prevState.isPlaying
        }))
    }
    render() {

        return (
            <div  className="sudoku-body">
                <h1 className="sudoku-h1">Sudoku</h1>
                <NumberSelect
                    numbers={this.state.numbers}
                    getNumber={this.getNumber}
                    handleSelect={this.handleSelect}
                />
                <main className="xsm:block md:flex md:justify-evenly">
                    <div className="xsm:w-4/4 xsm:mx-auto md:w-1/4">
                        <Timer
                            startPlaying={this.startPlaying}
                            resetGame={this.resetGame}
                        />
                        <Strike
                            strikes={this.state.strikes}
                        />

                    </div>
                    {
                        this.state.message.length > 0 ? 
                            <Modal 
                                unSolvedSquares={this.state.unSolvedSquares}
                                message={this.state.message}
                                resetGame={this.resetGame}
                            /> :
                            <Game
                                grid={this.state.grid}
                                compareNumber={this.compareNumber}
                                highlightSelect={this.highlightSelect}
                                selected={this.state.selected}
                            />
                    }
                    


                </main>
                
            </div>

        );
    }

}
