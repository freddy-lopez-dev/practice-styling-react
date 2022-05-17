import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import Button2 from "./components/Button2";
import Button3 from "./components/Button3";

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
        <Button />
        <Button2 />
        <Button3 />
      </header>
    </div>
  );
}

export default App;

//inline styles (DONT DO THIS)
//dot module css (import styles to component) WORKS ONLY FOR CLASSNAME or ID
