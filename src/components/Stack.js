import React from 'react';
import serverWhite from '../assets/img/serverWhite.png';
import serverBlack from '../assets/img/serverBlack.png';
import serverBlue from '../assets/img/serverBlue.png';
import dbWhite from '../assets/img/dbWhite.png';
import dbBlack from '../assets/img/dbBlack.png';
import dbBlue from '../assets/img/dbBlue.png';
import frontEnd from '../assets/img/frontEnd.png';
import python from '../assets/img/python.png';
import mern from '../assets/img/mern.png';
import mean from '../assets/img/mean.png';
import csharp from '../assets/img/csharp.png';


const Stack = ({stack,handleReact}) => {
    return (
        <fieldset className=" py-5 flex-1 rounded-lg m-5 text-white text-center bg-hex">
            <legend>
                <img 
                    src={stack.stack === 'C#/ASP.Net Core' ? 
                        csharp : stack.stack === 'M.E.R.N.' ?
                        mern : stack.stack === "M.E.A.N." ?
                        mean : python
                    }
                    alt={stack.stack}
                    className="mx-auto xsm:w-5/6 md:w-1/2"
                    onClick={stack.stack === 'M.E.R.N.' || stack.stack === 'M.E.A.N.' ? () => handleReact(): null}
                />
            </legend>
            <div className={`w-3/4 p-4 mx-auto h-32 my-3 flex justify-around rounded-md ${stack.color.bg}`}>
                <img 
                    className="w-2/6 h-20 my-auto" 
                    src={stack.color.img === 'black' ?
                        dbBlack : stack.color.img === 'blue' ?
                        dbBlue : dbWhite
                    }
                    alt="database"
                />
                <div className="m-1">
                    <p className="text-xl">{stack.db.name}</p>
                    <ul className="text-sm text-left">
                        {
                            stack.db.assocTech.map((t,i) => {
                                return <li key={i}>{t}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className={`w-3/4 p-4 mx-auto my-3 h-40 flex justify-around rounded-md ${stack.color.bg}`}>
                <img 
                    className="w-2/6 h-20 my-auto" 
                    src={stack.color.img === 'black' ?
                        serverBlack : stack.color.img === 'blue' ?
                        serverBlue : serverWhite
                    } 
                    alt="server"
                />
                <div className="m-1">
                    <p className="text-xl">{stack.server.name}</p>
                    <ul className="text-sm text-left">
                        {
                            stack.server.assocTech.map((t,i) => {
                                return <li key={i}>{t}</li>
                            })
                        }
                    </ul>
                </div>

            </div>
            <div className={`
                w-3/4 p-4 mx-auto my-3 flex h-40 justify-around rounded-md 
                ${stack.color.bg}
                `}>
                <img 
                    className="w-2/6 h-16 my-auto" 
                    src={frontEnd} 
                    alt="Front End"
                />
                <div className="ml-1">
                    <p className="text-xl">{stack.frontEnd.name}</p>
                    <ul className="text-sm text-left">
                        {
                            stack.frontEnd.assocTech.map((t,i) => {
                                return <li key={i}>{t}</li>
                            })
                        }
                    </ul>
                </div>

            </div>
        </fieldset>
    );
}

export default Stack;