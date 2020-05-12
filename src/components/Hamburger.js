import React from 'react';
import border from '../assets/img/menu-hex.svg';

const Hamburger = (props) => {
    const style={
        backgroundImage: `url(${border})`,
        backgroundSize: '55px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
        
    }
    return (
        <div style={style} className="px-4 my-1">
            <p className="text-xl">A</p>
        </div>
    );
}

export default Hamburger;