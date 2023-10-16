// Importing the necessary dependencies from React and Redux
import {useState} from 'react';
import {useDispatch} from 'react-redux';

// Defining a functional component called ContactForm that takes 'props' as an argument
const ContactForm = (props) => {
	
	const [state,setState] = useState({
		firstname:"",
		lastname:"",
		email:"",
		phone:""
	})
	
    // Getting access to the Redux dispatch function
	const dispatch = useDispatch();
	
    // Defining 'onChange' function to update the state when input fields change
	const onChange = (event) => {
		setState((state) => {
			return {
				...state,
				[event.target.name]:event.target.value
			}
		})
	}
	
    // Defining 'onSubmit' function to handle the form submission
	const onSubmit = (event) => {
		event.preventDefault();
		
	    // Creating a 'contact' object with the current state
		let contact = {
			...state
		}
		
		
	    // Dispatching an action to the Redux store with type 'ADD_CONTACT' and the contact data
		dispatch({
			type:"ADD_CONTACT",
			contact:contact
		})

	    // Clearing the form by resetting the state
		setState({
			firstname:"",
			lastname:"",
			email:"",
			phone:""
		})
	}
	
	
	// Rendering the form with input fields(first name, last name, email, and phone)
	return(
		<form onSubmit={onSubmit}>
			<label htmlFor="firstname">First Name</label>
			<input type="text"
					name="firstname"
					id="firstname"
					onChange={onChange}
					value={state.firstname}/>
			<br/>
			<label htmlFor="lastname">Last Name</label>
			<input type="text"
					name="lastname"
					id="lastname"
					onChange={onChange}
					value={state.lastname}/>
			<br/>
			<label htmlFor="email">Email</label>
			<input type="email"
					name="email"
					id="email"
					onChange={onChange}
					value={state.email}/>
			<br/>
			<label htmlFor="phone">Phone</label>
			<input type="tel"
					name="phone"
					id="phone"
					onChange={onChange}
					value={state.phone}/>
			<br/>
			<input type="submit" value="Add"/>
		</form>
	)
}

// Exporting the ContactForm component for use in other parts of the application
export default ContactForm;