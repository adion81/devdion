import React from 'react';

const Info = ({handleClick}) => {
    return (
        <div onClick={() => handleClick()} className=" inset-0 absolute z-20 p-6 text-center w-26 rounded-lg bg-white">
            <h2 className="text-xl">Adrien Dion</h2>
            <p className="text-greeny-100">WEB INSTRUCTOR</p>
            <p className="text-greeny-100">FULL STACK DEVELOPER</p>
            <p className="text-greeny-100">GITHUB PUSHER</p>
            <p>adion81@gmail.com</p>
            <p>(415)298-0192</p>

        </div>
    );
}

export default Info;