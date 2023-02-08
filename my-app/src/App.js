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
import MethodsAsPropsChild from './components/MethodsAsPropsChild';
import MethodsAsPropsParent from './components/MethodsAsPropsParent';
import RenderingLists from './components/RenderingLists';
import LifeCyclesCDM from './components/LifeCyclesCDM';
import LifeCyclesCDU from './components/LifeCyclesCDU';
import LifeCyclesCWU from './components/LifeCyclesCWU';
import ControlledForms from './components/ControlledForms';
import UncontrolledForms from './components/UncontrolledForms';
import SearchBar from './components/SearchBar';

// 4. Use functional/class component
// 5.0 Pass in prop (name, greeting, age) as JSX
function App() {
  return (
    <div className="App"> 
      {/* <FunctionalGreeting />
      <FunctionalGreetingWithProps name="Mike!" greeting="Nice to meet you!!" age="32"/>
      <StatefulGreeting greeting="I'm a stateful class component!" name="Mike!" />
      <EventsClass />
      <EventsFunctional />
      <ConditionalRenderingClass />
      <ConditionalRenderingFunctional connected = {true}/>
      <NestingComponents />
      <MethodsAsPropsChild />
      <MethodsAsPropsParent />
      <RenderingLists />
      <LifeCyclesCDM />
      <LifeCyclesCDU />
      <LifeCyclesCWU />
      <ControlledForms />
      <UncontrolledForms />*/}
      <SearchBar />
    </div>
  );
}

export default App;
