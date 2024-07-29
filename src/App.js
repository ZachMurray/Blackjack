import logo from './logo.svg';
import './App.css';
import Buttons from './components/Buttons';

function App() {
  newDeck();
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
        <img
          src="https://i.imgur.com/MK3eW3Am.jpg"
          alt="Katherine Johnson"
        />
        <Buttons />
      </header>
    </div>
  );
}

export default App;
function newDeck() {
  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };

  fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6", requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}

