import './App.css';
import ToDo from './Demo.js';



function App() {
  return (
    <div>
      <div className="App">
        <ToDo placeholder = 'Add new task for today' day = 'today'/>
        <ToDo placeholder = 'Add new task for tomorrow' day = 'tomorrow'/>
      </div>
    </div>
  );
}



export default App;
