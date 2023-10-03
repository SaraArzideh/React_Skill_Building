import {useState} from 'react';
import Square from './Square';
import Lable from './Lable';
const Card = (props)=> {

const [state, setState] = useState({
    color:"red"
})
const colorChange=()=>{
    const letters = "0123456789ABCDEF";
    let color="#";
    for (let i =0;i<6;i++){
        let temp=Math.floor(Math.random()*16);
        color=color+letters[temp];
    }
    setState({
        color:color
    })
}
let cardStyle={
    height:200,
    width:150,
    backgroundColor: "FFFFFF",
    filter: "drop-shadow(opx opx 5px #666)"
}
return(
    <div style={cardStyle}>
        <Square color={state.color}/>
        <Lable color={state.color}colorChange={colorChange}/>
    </div>
)
}
export default Card;