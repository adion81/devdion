import React,{useState} from 'react';
import Ticker from 'react-ticker';


function rand(min, max) {
    var offset = min
    var range = (max - min) + 1
    var randomNumber = Math.floor(Math.random() * range) + offset
    return randomNumber
}

const FriendTicker = (props) => {
    const [headlines,setHeadlines] = useState([
        "Adrien is the coolest.",
        "I heard Benny Bob was gonna get him.",
        "KHAMPB!!!"
    ]);
    const [input,setInput] = useState("");
    const [move] = useState(true);

    const reset = () => {
        setHeadlines([
            "Adrien is the coolest.",
            "I heard Benny Bob was gonna get him.",
            "KHAMPB!!!"
        ])
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setHeadlines(oldHeadlines => [...oldHeadlines,input]);
        setInput("");
    }
    return (
        <div className="flex-row bg-hex text-greeny-500 p-5">
            <h2 className=" text-2xl text-center text-white">Add to the ticker headlines . . . </h2>
            <Ticker
                
                direction="toLeft"
                offset="100%"
                speed={10}
                move={move}
                mode="await"
            >
                {(index) => (
                    <h1>{headlines[rand(0,headlines.length -1)]}</h1>
                )}
            </Ticker>
            <form onSubmit={(e) => handleSubmit(e)} className="mx-auto flex w-full max-w-sm">
                <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)} 
                    className="bg-gray-200 appearance-none border-2 border-greeny-500 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mx-2"
                />
                <input 
                    className="bg-bluey-500 hover:bg-greeny-500 text-white font-bold py-2 px-4 rounded"
                    type="submit"
                    value="ADD"
                />
                <button 
                    className="bg-bluey-500 hover:bg-orangey-500 text-white font-bold py-2 px-4 rounded" 
                    onClick={reset}
                >RESET</button>
            </form>
            
            
        </div>
    );
}

export default FriendTicker;