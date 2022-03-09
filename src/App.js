import "./App.css";
import Keyboard from "./Keyboard";

function App() {
  return (
    <div className="app">
      <div className="header">
        <h1>Pentaphone</h1>
      </div>
      <div className="main-interface">
        <Keyboard />
      </div>
      <div className="footer">
        <div>Created by Bill Gathen</div>
        <div>
          <a class="link" href="http://billgathen.com">
            Website
          </a>
        </div>
        <div>
          <a class="link" href="http://github.com/billgathen">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
