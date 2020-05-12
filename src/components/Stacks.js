import React,{useState} from 'react';
import initialState from '../states/stackState';
import Stack from './Stack';

const Stacks = (props) => {

    const [stacks] = useState(initialState);
    const [isReact,setIsReact] = useState(true);

    const handleReact = () => {
        setIsReact(!isReact);
    }

    return (
        <div className="my-5">
            <h2 className="text-3xl text-center mb-10">Full Stack Development Tracks</h2>
            <div className="flex xsm:flex-col md:flex-row justify-center w-11/12 mx-auto">
                {
                    stacks.map((stack,i) => {
                        if(stack.stack === 'M.E.A.N.' && isReact === true){
                            return null;
                        }
                        else if(stack.stack === "M.E.R.N." && isReact === false){
                            return null;
                        }
                        else{
                            return <Stack 
                                        stack={stack}
                                        key={i}
                                        handleReact={handleReact}
                                    />
                        }
                    })
                }

            </div>
        </div>
    );
}

export default Stacks;