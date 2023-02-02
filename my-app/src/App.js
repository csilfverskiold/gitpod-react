import logo from './logo.svg';
import './App.css';
// 3. Import functional component
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';

// 4. Use functional component
// 5.0 Pass in prop (name, greeting, age) as JSX
function App() {
  return (
    <div className="App"> 
      <FunctionalGreeting />
      <FunctionalGreetingWithProps name="Mike!" greeting="Nice to meet you!!" age="32"/>
    </div>
  );
}

export default App;
