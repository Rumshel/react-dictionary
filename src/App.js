import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header text-center">Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Julie Ruminski-Shelton</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
