// Defining the initial state for the contact reducer
const initialState = {
	list:[],  // An empty array to store contacts
	id:100    // An initial value for the contact ID
}

// Defining the contact reducer function, which handles actions related to contacts
const contactReducer = (state = initialState,action) => {
	console.log("contactReducer, action",action);  // Logging the action being processed for debugging purposes
	
    // Using a switch statement to handle different action types
	switch(action.type) {
		case "ADD_CONTACT":

            // Setting the ID of the incoming contact to the current ID in the state
			action.contact.id = state.id;
			
            // Returning a new state with the updated list of contacts and incremented ID
			return {
				list:state.list.concat(action.contact),
				id:state.id+1
			}
		case "REMOVE_CONTACT":

            // Filtering out the contact with the specified ID from the list
			let tempList = state.list.filter(contact => contact.id !== action.id);
			
            // Returning a new state with the updated list (contact removed)
			return {
				...state,       // Copying the existing state
				list:tempList   // Updating the list with the filtered list
			}
		default:
			return state;
	}
}

export default contactReducer;