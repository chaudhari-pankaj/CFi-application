import House from './components/House';
import Content from './components/content/Content';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Notify from './components/notification/Notify';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <House />
      <Notify />
      {/* <h1> hello</h1> */}
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
      {/* <h1>fuck you</h1> */}
    </div>
  );
}

export default App;
