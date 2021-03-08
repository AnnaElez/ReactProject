import './App.css';
import ToDo from '../ToDo/ToDo.js';
import {Route, Switch, Redirect} from 'react-router-dom';
import About from '../About.js';
import Contact from '../Contact.js';
import Single from '../Single/Single.js';
import notFound from '../notFound.js';
import NavMenu from '../NavMenu/NavMenu.js';

function App (){
  
  const routes = [
    {
      path: '/',
      component: ToDo
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '/singletask/:id',
      component: Single
    },
    {
      path: '/404',
      component: notFound
    },
  ]
 
  return (
    <>
      <div className="App">
      <NavMenu/>
        <Switch> 
        {
          routes.map((item,index) => <Route 
            path = {item.path} 
            exact 
            component = {item.component}
            key = {index}/> )
        }
        <Redirect to = '/404'/>
        </Switch>
      </div>
    </>
  );
}



export default App;
