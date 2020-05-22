import React from 'react';
import construction from "../../../assets/img/underConstruction.jpg";


const Library = (props) => {
    return (
        <div>
            <img className="w-full" src={construction} alt="Under Construction"/>
        </div>
    );
}

export default Library;