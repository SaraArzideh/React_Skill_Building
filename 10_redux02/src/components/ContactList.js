import {useDispatch,useSelector} from 'react-redux';

// Defining a functional component called ContactList to take props as an argument
const ContactList = (props) => {
	
	// Defining a selector function to extract the 'list' state from the Redux store
	const listSelector = (state) => state.list
	
	// Using the useSelector hook to get the 'list' from the Redux store
	const list = useSelector(listSelector);

	// Getting the dispatch function to dispatch actions to the Redux store
	const dispatch = useDispatch();
	
	// Mapping through the 'list' array to create a table row for each contact
	const contacts = list.map((contact) => {
		return (
			<tr key={contact.id}>
				<td>{contact.firstname}</td>
				<td>{contact.lastname}</td>
				<td>{contact.email}</td>
				<td>{contact.phone}</td>
				<td><button onClick={() => dispatch({
					type:"REMOVE_CONTACT",
					id:contact.id
				})}>Remove</button></td>
			</tr>
		)
	})

	// Rendering a table with a header row and the list of contacts
	return(
		<table>
			<thead>
				<tr>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Email</th>
					<th>Phone</th>
					<th>Remove</th>
				</tr>
			</thead>
			<tbody>
			{contacts}
			</tbody>
		</table>
	)
}

export default ContactList;