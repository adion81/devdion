import React from 'react';
import './webkit.css';

const ProjectMenu = (props) => {
    return (
        <div style={{overflow:"auto",whiteSpace:"nowrap",height:"90px"}} className="f w-full bg-bluey-900 p-3 text-white">
            {
                props.projects.map((p,i)=> {
                    return <h3 
                            key={i}
                            className={props.selected === i ?"inline-block rounded-lg border border-solid border-bluey-500 bg-greeny-500 text-bluey-900  mx-5 my-2 p-3 ":"inline-block rounded-lg border border-solid border-greeny-900  mx-5 my-2 text-center p-3 cursor-pointer"}
                            onClick={(e)=>props.handleClick(i)}
                        >{p.name}</h3>
                })
            }
        </div>
        
    );
}

export default ProjectMenu;