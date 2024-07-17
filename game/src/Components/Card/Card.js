
import Icon from "../Icon/Icon";
import './Card.css';

function Card({onPlay,player,index,gameEnd,tie}){

        let icon =<Icon/>
        if(player=='X'){
            icon=<Icon name={'cross'}/>
        }else if(player=='O'){
            icon=<Icon name={'circle'}/>
        }else{
            icon=<Icon name={''}/>
        }
    return (
        <div className="card" onClick={()=>!tie&& !gameEnd&&player==""&& onPlay(index)}>
            {icon}
         

           

        </div>




    )
}

export default Card;