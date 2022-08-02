import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {callAPI()}
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

function callAPI() {
   
  const LOCAL_URL = 'http://localhost:3001';
  // const HEROKU_URL = 'https://<>/herokuapp.com';
  fetch(LOCAL_URL, { method: 'GET' })
    .then(response => response.json())
    .then(json => alert(JSON.stringify(json.data)));
}

export default App;
