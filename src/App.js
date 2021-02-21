import './App.css';
import ToDo from './ToDo.js';
import {Route, Switch, Redirect, Link} from 'react-router-dom';
import About from './About.js';
import Contact from './Contact.js';
import Single from './Single.js';
import notFound from './notFound.js';
import NavMenu from './NavMenu.js';

function App (){


  return (
    <>
      <div className="App">
      <NavMenu/>
        <Switch> 
        
        <Route path = '/' exact component = {ToDo}/>
        <Route path = '/about' exact component = {About}/>
        <Route path = '/contact' exact component = {Contact}/>
        <Route path = '/singletask/:id' exact component = {Single}/>
        <Route path = '/404' exact component = {notFound}/>
        <Redirect to = '/404'/>
        </Switch>
      </div>
    </>
  );
}



export default App;
