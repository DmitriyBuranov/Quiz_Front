import 'bootstrap/dist/css/bootstrap.min.css'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

import { Navbar,  NavDropdown, Nav, Container} from 'react-bootstrap'

const NavBar = () => {
    return(
        <div className="App">
        <Navbar bg="secondary" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Quiz Platform</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/StartNewRound">
                <Nav.Link href="#StartNewRound">New Round</Nav.Link>
                </Link>
                <NavDropdown title="Menu" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/AddQuestion">Add question</NavDropdown.Item>
                  <NavDropdown.Item href="#action/LastResults">Last Results</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>
        )
}

export default NavBar;