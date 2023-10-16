// Importing necessary dependencies and resources

import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from 'react-redux';

function App() {
	
	// Getting a reference to the dispatch function to dispatch actions to the Redux store
	const dispatch = useDispatch();
	
	// Defining a selector function to get the 'count' state from the Redux store
  const countSelector = (state) => state.count;

	// Using the useSelector hook to extract the 'count' state from the Redux store
  const count = useSelector(countSelector);
	
	// Function to increment the count in the Redux store
  const increment = () => {
		dispatch({
			type:"INCREMENT" // Dispatching an action of type 'INCREMENT' to the Redux store

		})
	}
	
	// Function to decrement the count in the Redux store
	const decrement = () => {
		dispatch({
			type:"DECREMENT"
		})
	}
	
  // Rendering the component
	return (
		<div className="App">
			<h2>Current count:{count}</h2>
			<button onClick={increment}>+</button>
			<button onClick={decrement}>-</button>
		</div>
	);
}

export default App;