import logo from './logo.svg';
import './App.css';
import SocialFollow from "./SocialFollow"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          This is my first React Js.
        </p>
      </header>
      <SocialFollow />
    </div>
  );
}

export default App;
