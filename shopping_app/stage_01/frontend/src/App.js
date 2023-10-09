import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import ShoppingForm from './components/ShoppingForm';
import ShoppingList from './components/ShoppingList';
import Navbar from './components/Navbar';
import { Route,Routes, Navigate } from 'react-router-dom';

function App() {
  const [state,setState]=useState({
    list:[]
  })
  const [urlRequest, setUrlRequest]=useState({
    url:"",
    request:{},
    action:""
  })

  useEffect(()=>{
    // Define an asynchronous function named fetchData
    const fetchData=async ()=>{
      // Check if the urlRequest object has a valid URL
      if(!urlRequest.url) {
        return;   // Exit the function if the URL is missing
      }

      // Send a fetch request to the specified URL with the provided request options
      const response =await fetch (urlRequest.url,urlRequest.request)
      // Check if the server did not respond
      if (!response){
        console.log ("Server did not respond!");
        return;   // Exit the function if there's no response
      }
      // Check if the response status is OK (HTTP status code 200)
      if (response.ok) {
        // Handle different actions based on the urlRequest's action property
        switch(urlRequest.action){
          case "getlist":
            // If the action is "getlist," parse the JSON response and set it in the state
            const data=await response.json();
            if (!data){
              console.log("Failed to parse shopping data");
              return;
            }
            setState({
              list:data
            })
            return;
          case "additem":
          case "removeitem":
          case "edititem":
            // If the action is one of these, call the getList function (not defined here)
            getList()
          default:
              return;
        }
      } else {
        // Handle different actions based on the urlRequest's action property for non-OK responses
        switch(urlRequest.action){
          case"getlist":
            console.log("Failed to fetch shopping list. Server responded with a status"+ response.status+" "+response.statusText)
            return;
          case"additem":
            console.log("Failed to add new item. Server responded with a status"+ response.status+" "+response.statusText)
            return;
          case"removeitem":
            console.log("Failed to remove new item. Server responded with a status"+ response.status+" "+response.statusText)
            return;
          case"edititem":
            console.log("Failed to edit new item. Server responded with a status"+ response.status+" "+response.statusText)
            return;
          default:
            return;
        }
      }
    }
    // Call the fetchData function when this useEffect hook is triggered
    fetchData();

  },[urlRequest]) // This hook depends on the urlRequest object

useEffect(()=>{
  getList();
},[])

  //REST API

  const getList=()=> {
    setUrlRequest({
      url:"/api/shopping",
      request:{
        method:"GET"
      },
      action: "getlist"
    })
  }
  const addItem = (item)=>{
    setUrlRequest({
      url:"/api/shopping",
      request:{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(item)
      },
      action: "additem"
    })
  } 
  const removeItem=(id)=>{
    setUrlRequest({
      url:"/api/shopping/"+id,
      request:{
        method:"DELETE"
      },
      action: "removeItem"
    })
  }
  const editItem=(item)=>{
    setUrlRequest({
      url:"/api/shopping/"+item.id,
      request:{
        method:"PUT",
        headers:{
          "Content-type":"application/json"
        },
        body:JSON.stringify(item)
      },
      action: "editItem"
    })
  }
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<ShoppingList list={state.list} removeItem={removeItem}
        editItem={editItem}/>}/>
        <Route path="/form" element={<ShoppingForm addItem={addItem}/>}/>
        <Route path="*" element={<Navigate to="/"/>}/>  
      </Routes>
      
    </div>
  );
}

export default App;