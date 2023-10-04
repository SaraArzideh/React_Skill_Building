import { useState } from "react";

const ShoppingForm = (props)=>{
    const [state, setState]=useState({
        type:"",
        count:0,
        price:0
    })
    const onChange = (event) => {
        setState((state)=>{
            return{
                ...state,
                [event.target.name]:event.target.value
            }
        })
    }
    const onSubmit = (event) => {
        event.preventDefault();
        let item={
            ...state
        }
        props.addItem(item);
        setState({
            type:"",
            count:0,
            price:0
        })
    }
    return(
        <div style={{
            backgroundColor:"lightgreen",
            margin:"auto",
            width:"40%",
            textAlign:"center"
        }}>
            <form className="mb-5" onSubmit={onSubmit}>
                <lable htmlFor="type" className="form-lable">Type</lable>
                <input type="text"
                        name="type"
                        id="type"
                        className="form-control"
                        onChange={onChange}
                        value={state.type}/>
                <lable htmlFor="count" className="form-lable">Count</lable>
                <input type="number"
                        name="count"
                        id="count"
                        className="form-control"
                        onChange={onChange}
                        value={state.count}/>
                <lable htmlFor="price" className="form-lable">Price</lable>
                <input type="number"
                        name="price"
                        id="price"
                        step="0.01"
                        className="form-control"
                        onChange={onChange}
                        value={state.price}/>
                <input type="submit" className="btn btn-primary" value="Add"/>   
            </form>
        </div>
    )
}
export default ShoppingForm;