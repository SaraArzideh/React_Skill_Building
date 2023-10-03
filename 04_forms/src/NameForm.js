import {useState} from 'react';
const NameForm= (props)=>{

    const[state,setState]=useState({
        firstname:"",
        lastname:""
    })
    const onChange=(event)=>{
        setState((state)=>{
            return{
                ...state,
                [event.target.name]:event.target.value
            }
        })
    }
    const onSubmit=(event)=>{
        event.preventDefault();
        let name= state.firstname+" "+state.lastname;
        props.setGreeting(name);
    }

    return(
        <form onSubmit={onSubmit}>
            <lable htmlFor="firstname">First Name</lable>
            <input type="text"
                name="firstname"
                id="firstname"
                onChange={onChange}
                value={state.firstname}/>
            <br/>
            <lable htmlFor="lastname">Last Name</lable>
            <input type="text"
                name="lastname"
                id="lastname"
                onChange={onChange}
                value={state.lastname}/>
            <br/>
            <input type="submit" value="Greet"/>
            
        </form>
    )
}
export default NameForm