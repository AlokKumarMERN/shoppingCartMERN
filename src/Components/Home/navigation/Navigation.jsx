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
// import { useSelector } from 'react-redux';
import { CartIcon} from '../../../icons';
import {useSelector, useDispatch} from 'react-redux'




function BasicExample() {
  const dispatch = useDispatch();  
  const { amount } = useSelector((store) => store.cart);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className='mx-3'>
        <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto mx-2">
            <Nav.Link as={NavLink} to="/" className=" ">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/shopping" className="">Shopping</Nav.Link>
            
            

        <Nav.Link as={NavLink} to="/addtocart" className="mx-2">
        <div className='nav-center'>
            {/* <h3>Amazon</h3> */}
        <div className='nav-container'> 
            <CartIcon />
                <div className='amount-container'>
                    <p className='total-amount'>{amount}</p>
                </div>
        </div>
        </div>
        </Nav.Link>

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
