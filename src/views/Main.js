import React,{useEffect} from 'react';
import Axios from 'axios';
import HexCanvas from '../components/HexCanvas';
import FriendTicker from '../components/FriendTicker';
import Stacks from '../components/Stacks';
import TechTank from '../components/TechTank';

const Main = (props) => {
    useEffect(() => {
        Axios.get("http://www.cs.utep.edu/cheon/ws/sudoku/new/?size=9&level=1")
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    },[])
    return (
        <div>
            <HexCanvas />
            <Stacks />
            <FriendTicker />
            {window.outerWidth >= 1024 ? <TechTank ></TechTank> : null}
        </div>
    );
}

export default Main;