import './App.css';
// 3. Import functional/class component
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import NestingComponents from './components/NestingComponents';

// 4. Use functional/class component
// 5.0 Pass in prop (name, greeting, age) as JSX
function App() {
  return (
    <div className="App"> 
      <FunctionalGreeting />
      <FunctionalGreetingWithProps name="Mike!" greeting="Nice to meet you!!" age="32"/>
      <StatefulGreeting greeting="I'm a stateful class component!" name="Mike!" />
      <EventsClass />
      <EventsFunctional />
      <ConditionalRenderingClass />
      <ConditionalRenderingFunctional connected = {true}/>
      <NestingComponents />
    </div>
  );
}

export default App;
