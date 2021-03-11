import './App.css';
import ToDo from '../ToDo/ToDo.js';
import { Route, Switch, Redirect } from 'react-router-dom';
import About from '../About.js';
import Contact from '../Contact.js';
import Single from '../Single/Single.js';
import notFound from '../notFound.js';
import NavMenu from '../NavMenu/NavMenu.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import Spiner from '../Loader/spiner.js';

function App(props) {

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

  const notify = () => toast.error('🦄 Wow so easy!', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const { errorMessage, successMessage, loading } = props

  if (errorMessage) {
    toast.errorM(errorMessage)
  }

  if (successMessage) {
    toast.success(successMessage)
  }

  return (
    <>
      <div className="App">
        <NavMenu />
        <Switch>
          {
            routes.map((item, index) => <Route
              path={item.path}
              exact
              component={item.component}
              key={index} />)
          }
          <Redirect to='/404' />
        </Switch>
        {loading && <Spiner />}

        <button onClick={notify}>Notify!</button>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.error,
    loading: state.loading,
    successMessage:state.successMessage,
  }
}

export default connect(mapStateToProps)(App);
