import GetAPI from './components/GetAPI';
import './App.css';

function App() {
  return (
    <>
    <header className="header">
        <div className="head-container">
            <h1>React API</h1>
            <p>"That's Not A Cookie. And You Know That HUE, You Know That!"</p>
            <button>Get Started</button>  
        </div>
    </header>
      <GetAPI />
    </>
  );
}

export default App;
