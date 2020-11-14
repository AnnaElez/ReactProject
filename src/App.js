import logo from './logo.svg';
import './App.css';
import Animals from './classes.jsx'

export function Surname(props) {
  // console.log(props)
  return(
    <>
    <p>
      {props.propsObj.lastName}
    </p>
    <p>
      {props.propsObj.age}
    </p>
    </>
  )
}

export function Name(props) {
  return(
    <>
      <img src = {props.logo}/>
    </>
  )
 
}

function App() {
  
  const Greeting = "Hello";

  let obj = {
    lastName: "Elez",
    age: "18"
  }
  
  return (
    <>
    <div className="App">
      {Greeting}
      <Name/>
      <Surname propsObj = {obj}/>
    </div>

    <div className="App">
    <Animals type = 'cat' name = "Karen" color = "white" />
    <Animals type = 'monkey' name = "Tim" color = "brown" />
    <Animals type = 'hamster' name = "Vilyam" color = "orange" />
    </div>
    </>
  );
}

export default App;
