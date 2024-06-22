import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Form, FormControl } from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faSearch 
} from "@fortawesome/free-solid-svg-icons";


function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className='mx-3'>
        <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto mx-2">
            <Nav.Link as={NavLink} to="/" className=" ">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/shopping" className="">Shopping</Nav.Link>
            
            
            <Nav.Link as={NavLink} to="/" className="mx-2"><FontAwesomeIcon
              key="cartIcon"
              // className="fontAwesomeHover me-1 my-1 p-3 bg-white rounded-4 border "
              icon={faCartShopping}
            /></Nav.Link>

            <Nav.Link as={NavLink} to="/signup" className="mx-2"><FontAwesomeIcon
              key="cartIcon"
              // className="fontAwesomeHover me-1 my-1 p-3 bg-white rounded-4 border "
              icon={faUser}
            /></Nav.Link>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" rounded-4"
            />
          </Form>

            <Nav.Link as={NavLink} to="/" className="mx-2"><FontAwesomeIcon
              key="cartIcon"
              className=""
              icon={faSearch}
            /></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
