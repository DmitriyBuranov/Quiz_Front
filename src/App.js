import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import {Button, Alert, Card, Form, Navbar, NavDropdown, Nav, Container} from 'react-bootstrap'

//API where we going to get questions and save
const API_URL = 'localhost:5000'

function App() {
  return (
    <div className="App">
        <Navbar bg="secondary" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Quiz Platform</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#StartNewRound">New Round</Nav.Link>
                <NavDropdown title="Menu" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Add question</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Last Results</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>        
    </div>
  );
}

export default App;
