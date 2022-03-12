import "./App.css";
import Keyboard from "./Keyboard";

function App() {
  return (
    <div className="app">
      <div className="header">
        <img className="logo" src="/favicon.ico" alt="Logo" />
        <h1>The Pentaphone</h1>
        <a href="https://billgathen.github.io/pentaphone/">What is this?</a>
      </div>
      <div className="main-interface">
        <Keyboard />
      </div>
      <div className="footer">
        <div>Created by Bill Gathen</div>
        <div>
          <a className="link" href="http://billgathen.com">
            Website
          </a>
        </div>
        <div>
          <a className="link" href="http://github.com/billgathen">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
