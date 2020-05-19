import React,{useState} from 'react';

import HorizontalMenu from '../components/HorizontalMenu';
import Sudoku from '../components/projects/sudoku/Sudoku';


const Projects = (props) => {
    console.log(window.innerWidth)
    const [projects] = useState([
        {
            name:"Sudoku",
            url: "sudoku"
        },
        {
            name:"It's Always Datchi",
            url: "datchi"
        },
        {
            name:"Task Master",
            url: "task-master"
        },
        {
            name: "Library",
            url:"library"
        }
    ]);
    const [selectedP,setSelectedP] = useState(0);
    const handleSelect = (idx) => {
        setSelectedP(idx);
    }

    return (
        <div style={{minHeight:"700px"}}>

            <HorizontalMenu 
                projects={projects}
                selected={selectedP}
                handleClick={handleSelect}
            />
            <div >
                {
                    selectedP === 0 ? <Sudoku /> : null
                }
            </div>
        </div>
    );
}

export default Projects;