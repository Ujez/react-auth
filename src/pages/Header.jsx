import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import Register from "../components/Register";
import Login from "../components/Login";
import Home from "../components/Home";
import Profile from "../components/Profile";
import Forget from "../components/Forget";

function NavComp() {
  let activeStyle = {
    color: "orange",
    textDecoration: "none",
 
  };
  let linkStyle = {
    textDecoration: "none",
  };

  return (
    <>
      <Router>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">React Auth</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                // style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link to="/" style={linkStyle}>
                  Home
                </Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown> */}
                <Nav.Link href="#" disabled>
                  Link
                </Nav.Link>
              </Nav>
              <div className="d-flex ">
                <NavLink
                  to="/Login"
                  style={({ isActive }) => (isActive ? activeStyle : linkStyle)}
                  className="me-4"  
                >
                  Login
                </NavLink>
                <NavLink
                  to="/Register"
                  style={({ isActive }) => (isActive ? activeStyle : linkStyle)} 
                 
                >
                  Register
                </NavLink>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Forget" element={<Forget />} />
        </Routes>
      </Router>
    </>
  );
}

export default NavComp;
