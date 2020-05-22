import React, { useState } from 'react';
import Timer from './Timer';
import Game from './Game';
import NumberSelect from './NumberSelect';
import Modal from './Modal';
import Strike from './Strike';
import board from './createGame';
import './Sudoku.css';

const Sudoku = (props) => {
    const [numOfStrikes,setNumOfStrikes] = useState(0);
    const [strikes, setStrikes] = useState([
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
    ]);
    const [message,setMessage] = useState("");
    const [unSolvedSquares,setUnSolvedSquares] = useState(100);
    const [isPlaying,setIsPlaying] = useState(false);
    const [selected,setSelected] = useState({
        row: 0,
        col: 0,
        box: 0,
        square: 0
    });
    const [numbers] = useState([
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
    ]);
    
    const [grid,setGrid] = useState(board());

    const resetGame = () => {
        setGrid(board());
        setSelected({
            row: 0,
            col: 0,
            box: 0,
            square: 0
        });
        setMessage("");
        setIsPlaying(false);
        setUnSolvedSquares(100);
        setStrikes([
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
        ]);
        setNumOfStrikes(0);

    }

    const handleSelect = (id) => {
        console.log(id);
        let sId = selected.square;
        console.log(sId);
        let square = grid.map(g => {
            g.map(cell => {
                if (cell.id === sId) {
                    console.log(cell);
                    if (cell.value === id) {
                        cell.isSolved = true;
                        getSolved();
                    }
                    if (cell.value !== id) {
                        addStrike();
                    }
                }
                return cell;
            })
            return g;
        })
        setGrid(square);
    }

    const startPlaying = () => {
        setIsPlaying(!isPlaying);
    
    }

    const getSolved =() => {
        let unSolved = 0;
        for(var i = 0; i < grid.length; i++){
            for(var j = 0; j < grid[i].length; j++){
                if(grid[i][j].isSolved === false){
                    unSolved += 1;
                }
            }
        }
        if(unSolved === 0){
            setMessage("YOU WIN!!!");
        }
        setUnSolvedSquares(unSolved);
    }

    const addStrike = () => {
        getStrikeId();
        let strike = strikes.map(row => {
            row.map(cell => {
                if(cell.id === numOfStrikes + 1){
                    cell.made = true;
                }
                return cell;
            })
            return row;
        })
        setStrikes(strike);
        if(numOfStrikes === 9){
            setMessage("YOU LOSE!!!")
        }
    }

    const highlightSelect = (row, col, box, id) => {
        if (isPlaying === true) {
            console.log("Row: " + row + ", Column: " + col + ", Box: " + box);
            setSelected({
                row: row,
                col : col,
                box: box,
                square: id
            })
        }
    }

    const getStrikeId = () => {
        setNumOfStrikes(numOfStrikes+1);
    }
    return(
        <div  className="sudoku-body">
                <h1 className="sudoku-h1">Sudoku</h1>
                <NumberSelect
                    numbers={numbers}
                    isPlaying={isPlaying}
                    handleSelect={handleSelect}
                />
                <main className="xsm:block md:flex md:justify-evenly">
                    <div className="xsm:w-4/4 xsm:mx-auto md:w-1/4">
                        <Timer
                            startPlaying={startPlaying}
                            resetGame={resetGame}
                        />
                        <Strike
                            strikes={strikes}
                        />

                    </div>
                    {
                        message.length > 0 ? 
                            <Modal 
                                unSolvedSquares={unSolvedSquares}
                                message={message}
                                resetGame={resetGame}
                            /> :
                            <Game
                                grid={grid}
                                highlightSelect={highlightSelect}
                                selected={selected}
                            />
                    }
                    


                </main>
                
            </div>
    );
}

export default Sudoku;