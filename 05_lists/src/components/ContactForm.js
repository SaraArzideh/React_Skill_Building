import {useState} from 'react';
const ContactForm=(props)=>{
    const[state,setState]= useState({
        firstname:"",
        lastname:"",
        email:"",
        phone:""
    })
    const onChange= (event)=>{
        setState((state)=>{
            return{
                ...state,
                [event.target.name]:event.target.value
            }
        })
    }
    const onSubmit=(event)=>{
        event.preventDefault();
        let contact={
            ...state
        }
        props.addContact(contact);
        setState({
            firstname:"",
            lastname:"",
            email:"",
            phone:""
        })
    }
    return(
        <form onSubmit={onSubmit}>
            <lable htmilFor="firstname">First Name</lable>
            <input type="text"
                name="firstname"
                id="firstname"
                onChange={onChange}
                value={state.firstname}/>
            <br/>
            <lable htmilFor="lastname">Last Name</lable>
            <input type="text"
                name="lastname"
                id="lastname"
                onChange={onChange}
                value={state.lastname}/>
            <br/>
            <lable htmilFor="email">Email</lable>
            <input type="email"
                name="email"
                id="email"
                onChange={onChange}
                value={state.email}/>
            <br/>
            <lable htmilFor="phone">Phone</lable>
            <input type="text"
                name="phone"
                id="phone"
                onChange={onChange}
                value={state.phone}/>
            <br/>
            <input type="submit" value="Add"/>
            <br/>
        </form>
    )
}
export default ContactForm;