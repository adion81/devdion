import React,{useState} from 'react';
import profile from '../assets/img/adrienProfile.png';
import Info from './Info';

const ProfileImg = (props) => {
    const [infoPop, setInfoPop] = useState(false);
    return(
        <div className="absolute z-10 profile-img" >
        <img onClick={() => setInfoPop(true)}src={profile} alt="Adrien Dion" />
        {
            infoPop ? <Info handleClick={() => setInfoPop(false)} /> : null
        }
        </div>
    );
}

export default ProfileImg;