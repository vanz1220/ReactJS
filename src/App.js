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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
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
