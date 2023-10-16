// Defining the initial state for the reducer
const initialState={
    count:0
}

// Defining a reducer function that takes state and an action as parameters
const countReducer=(state=initialState, action)=>{

    // logging the action being processed
    console.log("countReducer, action", action);

    // Using a switch statement to handle different action types

    switch(action.type){
        case"INCREMENT":
            return{
                count:state.count+1
            }
            case"DECREMENT":
            return{
                count:state.count-1
            }
            default:
            return state;
            }
    }

// Exporting the countReducer function to be used in other parts of the application
export default countReducer;