import React from 'react';
import HexCanvas from '../components/HexCanvas';
import FriendTicker from '../components/FriendTicker';
import Stacks from '../components/Stacks';
import TechTank from '../components/TechTank';

const Main = (props) => {
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