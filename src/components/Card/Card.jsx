import Icon from "../Icon/Icon";
import '../Card/Card.css';
function Card({iconName}){
    return(
        <div className="card">
           <Icon name = {iconName}/>
        </div>
    )
}

export default Card;