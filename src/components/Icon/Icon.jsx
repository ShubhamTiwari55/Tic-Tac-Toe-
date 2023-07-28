import {FaTimes, FaPen, FaRegCircle} from 'react-icons/fa';
import {memo} from 'react';
function Icon({name}){
    if(name=="circle") return <FaRegCircle/>
    else if(name == "cross") return <FaTimes/>
    else return <FaPen/>
}

export default memo(Icon);
//memo is used for optimisation so that on touching or hovering the card, icons don't get re-render//