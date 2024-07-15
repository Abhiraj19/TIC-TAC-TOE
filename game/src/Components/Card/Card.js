
import Icon from "../Icon/Icon";
import './Card.css';

function Card({iconName,onPlay}){
    return (
        <div className="card" onClick={onPlay}>
            <Icon name={iconName}/>

           

        </div>




    )
}

export default Card;