import React from 'react';

const Fish = ({image,name,width}) => {
    return (
        <div>
            <img src={image} alt={name}  width={width} />
        </div>
    );
}

export default Fish;