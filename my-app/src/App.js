import logo from './logo.svg';
import './App.css';
// 3. Import functional component
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';

// 4. Use functional component
function App() {
  return (
    <div className="App"> 
      <FunctionalGreeting />
      <FunctionalGreetingWithProps />
    </div>
  );
}

export default App;
