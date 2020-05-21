// import axios from 'axios';




class Cell{
    constructor(val, solved, id, row, col, box){
        this.value = val;
        this.isSolved = solved;
        this.id = id;
        this.row = row;
        this.col = col;
        this.box = box;
    }
}
// var ip = "18.216.108.30";
// const output = new Promise ((resolve,reject) => {
//     axios.get(`https://${ip}/api/sudoku/new`)
//         .then(res => {

//             let solved = res.data.solution;
//             let puzzle = res.data.puzzle;
//             console.log(solved)
//             console.log(puzzle)
        
//             let board = [];
//             let count = 0;
//             for(let i =0; i < puzzle.length; i++){
                
//                 let row = [];
//                 for(let j = 0; j < puzzle.length; j++){
//                     count ++;
//                     let isSolved = true;
//                     if(puzzle[i][j] === 0){
//                         isSolved = false;
//                     }
//                     let box = (Math.floor(i/3)*3)+(j/3)+1;
//                     console.log(box);
//                     row.push(new Cell(solved[i][j],isSolved,count,i+1,j+1,Math.floor(box)))
//                 }
        
//                 board.push(row);
//             }
//             console.log(board);
//             resolve(board);
//         })
//         .catch(err => reject(fallback()))
//     }
// ) 
const easy = {
    puzzle: [
        [8,0,0,7,6,2,4,1,3],
        [0,7,3,4,9,1,8,0,0],
        [0,6,0,0,0,0,0,0,2],
        [5,4,9,0,0,6,0,2,0],
        [0,0,2,0,0,0,1,0,0],
        [3,0,0,0,0,0,0,5,9],
        [0,5,8,0,0,7,2,0,0],
        [0,0,1,8,0,4,3,0,6],
        [0,0,0,1,0,9,5,0,7]
    ],
    solution: [
        [8,9,5,7,6,2,4,1,3],
        [2,7,3,4,9,1,8,6,5],
        [1,6,4,5,8,3,9,7,2],
        [5,4,9,3,1,6,7,2,8],
        [6,8,2,9,7,5,1,3,4],
        [3,1,7,2,4,8,6,5,9],
        [9,5,8,6,3,7,2,4,1],
        [7,2,1,8,5,4,3,9,6],
        [4,3,6,1,2,9,5,8,7]
    ]
}
const medium = {
    puzzle: [
        [0,5,8,0,0,0,0,0,1],
        [3,1,0,0,0,0,0,6,0],
        [0,2,7,0,3,0,5,9,4],
        [0,0,0,0,1,0,0,0,0],
        [0,0,1,4,2,0,0,0,0],
        [0,7,6,5,0,0,0,0,0],
        [0,3,0,0,0,2,1,8,0],
        [0,0,0,0,0,0,9,4,5],
        [0,6,0,9,0,5,0,0,0]
    ],
    solution:[
        [4,5,8,6,7,9,3,2,1],
        [3,1,9,2,5,4,7,6,8],
        [6,2,7,1,3,8,5,9,4],
        [2,4,3,8,1,7,6,5,9],
        [5,9,1,4,2,6,8,3,7],
        [8,7,6,5,9,3,4,1,2],
        [9,3,5,7,4,2,1,8,6],
        [7,8,2,3,6,1,9,4,5],
        [1,6,4,9,8,5,2,7,3]
    ]
}
const hard = {
    puzzle:[
        [0,0,0,0,0,0,0,0,0],
        [0,5,1,0,0,3,0,0,0],
        [0,0,0,0,7,9,0,2,4],
        [0,0,0,3,0,0,0,6,0],
        [4,2,6,0,0,0,0,0,1],
        [8,0,0,9,0,1,0,0,7],
        [0,7,0,4,0,0,3,0,0],
        [5,9,0,7,0,0,4,0,0],
        [0,0,0,0,9,0,7,0,8]
    ],
    solution: [
        [2,4,9,6,1,8,5,7,3],
        [7,5,1,2,4,3,6,8,9],
        [6,8,3,5,7,9,1,2,4],
        [9,1,7,3,2,4,8,6,5],
        [4,2,6,8,5,7,9,3,1],
        [8,3,5,9,6,1,2,4,7],
        [1,7,2,4,8,5,3,9,6],
        [5,9,8,7,3,6,4,1,2],
        [3,6,4,1,9,2,7,5,8]
    ]
}
const output = () => {
    var level = Math.floor(Math.random() * 3);
    var solved;
    var puzzle;
    if(level === 1){
        solved = easy.solution;
        puzzle = easy.puzzle;
    }
    else if(level === 2){
        solved = medium.solution;
        puzzle = medium.puzzle;
    }
    else{
        solved = hard.solution;
        puzzle = hard.puzzle;
    }
    console.log(puzzle);
    let board = [];
    let count = 0;
    for(let i =0; i < puzzle.length; i++){
        
        let row = [];
        for(let j = 0; j < puzzle.length; j++){
            count ++;
            let isSolved = true;
            if(puzzle[i][j] === 0){
                isSolved = false;
            }
            let box = (Math.floor(i/3)*3)+(j/3)+1;
            console.log(box);
            row.push(new Cell(solved[i][j],isSolved,count,i+1,j+1,Math.floor(box)))
        }

        board.push(row);
    }
    console.log(board)
    return board;
}

export default output;