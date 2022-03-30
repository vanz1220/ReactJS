import logo from './logo.svg';
import './App.css';
import SocialFollow from './SocialFollow'
import About from './About'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, NavDropdown, Nav} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>
            <img
            alt=""
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-middle"
            />
            OWSHII&nbsp;&nbsp;&nbsp;✌😉
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/About">About</Nav.Link>
                <Nav.Link>Contact</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <About/>
      <SocialFollow />
    </div>
  );
}

export default App;
