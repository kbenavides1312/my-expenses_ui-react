import dotenv from 'dotenv';
import logo from './logo.svg';
import './App.css';

dotenv.config();
console.log("REACT_APP_USERS_API_URL", process.env.REACT_APP_USERS_API_URL);


function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
