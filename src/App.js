import './App.css';
import { Counter } from './components/core-concept/React-component';
import { reactHeader } from './components/core-concept/React-element';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {reactHeader}
      </header>

      <Counter/>
    </div>
  );
}

export default App;
