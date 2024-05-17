import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Form } from "react-bootstrap";
import "./Navigation.css";
import Buttons from "../../Button/Button";
const Navigation = ({act}) => {
  console.log("navigation :",act);
  return (
    <Navbar expand="lg" className="bg-body-tertiary p-2 sticky-top shadow mb-2">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {/* it is for small screen in inspacting  */}
          <Nav
            className=" me-auto my-lg-1 "
            // style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* for creating navigatin button at top */}
            <Link to="/">
              <Buttons name="Home" act={act}/>
            </Link>

            <Link to="/Shopping" >
              <Buttons name="Shopping" act={act}/>
            </Link>

            <Buttons name="Contect" />
            <Buttons name="Feedback" />
          </Nav>

          <Form className="d-flex">
            {/* shopping cart icon fonrawesome */}
            <FontAwesomeIcon
              className="fontAwesomeHover me-1 my-1 p-3 bg-white rounded-4 border border-primary-subtle"
              icon={faCartShopping}
            />
            {/* user cart icon fontawesome */}
            <FontAwesomeIcon
              className="fontAwesomeHover me-1 my-1 p-3 bg-white rounded-4 border border-primary-subtle"
              icon={faUser}
            />
            {/* search input box  */}
            <Form.Control
              type="search"
              placeholder="Search items"
              className="me-1 rounded-5 shadow-none my-1 border border-primary-subtle"
              aria-label="Search"
            />
            {/* search icon fontawesome */}
            <FontAwesomeIcon
              className="fontAwesomeHover me-3 my-1 p-3 bg-white rounded-4 border border-primary-subtle"
              icon={faMagnifyingGlass}
            />{" "}
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navigation;
