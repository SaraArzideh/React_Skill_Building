const Lable= (props)=> {
    let lableStyle={
        fontfamily:"sans-serif",
        fontweight:"bold",
        margin:0,
        padding:13
    }
    return(
        <p style={lableStyle}
        onClick={props.colorChange}
        >{props.color}</p>

    )
}
export default Lable;