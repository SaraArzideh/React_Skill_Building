import logo from './logo.svg';
import './App.css';
import Helloworld from './Helloworld';
function App() {
  return (
    <div className="App">
      <h2>Hello World</h2>
      <Helloworld/>
      <Helloworld name= "Sara"/>   
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

    </div>
  );
}

export default App;
