import React,{useState} from 'react';

import HorizontalMenu from '../components/HorizontalMenu';
import Sudoku from '../components/projects/sudoku/Sudoku';
import Datchi from '../components/projects/datchi/Datchi';
import TaskMaster from '../components/projects/taskMaster/TaskMaster';
import Library from '../components/projects/library/Library';


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
                    selectedP === 0 ? <Sudoku /> : 
                        selectedP === 1 ? <Datchi /> :
                            selectedP === 2 ? <TaskMaster /> : 
                                selectedP === 3 ? <Library /> : null
                }
            </div>
        </div>
    );
}

export default Projects;