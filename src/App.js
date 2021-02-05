import './App.css';
import ToDo from './ToDo.js';
import './promise.js';
// import BootstrapDemo from './BootstrapDemo.js';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { Col, Row, Container } from 'react-bootstrap';




function App() {
  return (
    <div>
      <div className="App">
        {/* <Container>
          <Row>
            <Col> */}
              <ToDo placeholder='Add new task for today' day='today' />
            {/* </Col>

            <Col> */}
              {/* <ToDo placeholder='Add new task for tomorrow' day='tomorrow' /> */}
            {/* </Col>
          </Row>
          <BootstrapDemo /> 
        </Container> */}

      </div>
    </div>
  );
}



export default App;
