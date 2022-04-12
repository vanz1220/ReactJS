import logo from './logo.svg';
import './App.css';
import SocialFollow from './SocialFollow'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav} from 'react-bootstrap'
import { Routes, Route} from "react-router-dom";
import AboutPage from './AboutPage'
import HomePage from './HomePage'

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
            OWSHII&nbsp;&nbsp;✌😉
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse> 
        </Container> 
      </Navbar>
      <div class="row">
        <div class="column1">
        <img
            alt=""
            src={logo}
            className="d-inline-block align-middle"
            /><br/><br/>
          <a href="/">Home</a>&nbsp;&nbsp;
          <a href="/about">About</a>
        </div>
        <div class="column2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
      
      <SocialFollow />
    </div>
  );
}


function Home() {
  return (
    <>
      <main>
      <HomePage/>
      </main>
    </>
  );
}

function About() {
  return (
    <>
      <main>
      <AboutPage/>
      </main>
    </>
  );
}
export default App;
