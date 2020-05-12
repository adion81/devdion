import React,{useState,useRef,useEffect} from 'react';

import cSharp from '../assets/img/csharp.png';

const TechTank = (props) => {
    const canvasRef = useRef(null);
    const cSharpRef = useRef(null);
    const [size] = useState({w:window.innerWidth -200,h:600});
    
    // useEffect(() => {
    //     const canvas = canvasRef.current;
    //     const ctx = canvas.getContext("2d");
    //     const cSharpImage = cSharpRef.current;
        
    //     cSharpImage.onload = () => {
    //         let x = Math.floor(Math.random() * window.innerWidth - 100);
    //         let y = Math.floor(Math.random() * 520);
    //         ctx.drawImage(cSharpImage,x,y,100,80);
    //     }

    // },[size,cSharpRef])
    // useEffect(() => {
    //     const canvas = canvasRef.current;
    //     const ctx = canvas.getContext("2d");
    //     const cSharpImage = cSharpRef.current;
    // }

    // );
    const handleMovement = () => {

    }
    
    if(size)
    {

        return (
            <div>
                <h2 className="text-3xl text-center mb-10">Tech Tank(Under Construction)</h2>
                {props.children}
                <canvas 
                    style={{borderTopWidth: "50px"}}
                    className="bg-bluey-600 border-black border-8 border-solid mx-auto"
                    width={size.w}
                    height={size.h}
                    ref={canvasRef}
                >
                </canvas>
                <img ref={cSharpRef} src={cSharp} alt="C#" width="100px" className="hidden"/>
            </div>
        );
    }
    else{
        return <h4>Loading...</h4>
    }
}

export default TechTank;