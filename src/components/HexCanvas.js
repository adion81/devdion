import React,{useEffect,useState,useRef} from 'react';
import ProfileImg from './ProfileImg';


const HexCanvas = (props) => {
    const canvasRef = useRef(null);
    const [size,setSize] = useState({w:window.innerWidth,h:350});
    const [didMove,setDidMove] = useState(false);

    useEffect(() => {
        
            setSize({
                w: window.innerWidth,
                h: 350
            })
    },[didMove])
    
    const drawHexi = (areaX,areaY,ctx) => {
        var plusX = areaX + 600;
        var plusY = areaY + 600;
        var minusX = areaX - 600;
        var minusY = areaY - 600;
        for(var y = 0; y < 20; y++){
            var rangeX = Math.random() * (plusX - minusX) + minusX;
            var rangeY = Math.random() * (plusY - minusY) + minusY;
            if(y % 2 === 1){
                drawHex(rangeX,rangeY,5,2,'#00ff00');
            }
            else{
                drawHex(rangeX,rangeY,5,2,'#00ffff');
            }
        } 
    }

    const drawHex = (xCoord,yCoord,sideSize,line,color) => {
        var canvas = canvasRef.current;
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(xCoord + sideSize * Math.cos(0), yCoord + sideSize * Math.sin(0));
        for (var i = 0; i < 8; i++) {
            ctx.lineTo(xCoord + sideSize * Math.cos(i * 2 * Math.PI / 6), yCoord + sideSize * Math.sin(i * 2 * Math.PI / 6));
        }
        ctx.lineWidth = line;
        ctx.strokeStyle = color;
        ctx.stroke();
        setTimeout(() => ctx.clearRect(xCoord -10,yCoord -10,18,18),100)
    }

    const handleMove = (e) => {
        var canvas = canvasRef.current;
        var ctx = canvas.getContext("2d");
        var rect = canvas.getBoundingClientRect();
        var x = (e.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
        var y = (e.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
        drawHexi(x,y,ctx);
        setDidMove(!didMove);
    }

    return(
        <div>
            <canvas
                style={{zIndex:2}}
                ref={canvasRef}
                width={size.w}
                height={size.h}
                onMouseMove={(e) => handleMove(e)}
                className="bg-bluey-900"
            >
            </canvas>
            <ProfileImg  />

        </div>
    );
}

export default HexCanvas;