import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import { IoPersonOutline } from "react-icons/io5";
import { IoBagHandleOutline  } from "react-icons/io5";

function Header(props) {
  return (
    <Navbar className="header1" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">Mobile Cart</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {!props.user ? null : (
              <Navbar.Brand>
                <Link to={"/PersonalInformation"}> 
                <div className="SuccessMargin">
                  <h1>
                    <IoPersonOutline /><br></br>
                    My Profile
                  </h1>{" "}
              </div></Link>
              </Navbar.Brand>
            )}

            {props.user ? (
              <Navbar.Brand
                onClick={() => {
                  localStorage.removeItem("Token");
                  window.location.reload();
                }}
              >
                Log Out
              </Navbar.Brand>
            ) : null}
          </Nav>
          <Form className="d-flex">
            {props.user ? (
              `Welcom ${props.user.FirstName}`
            ) : (
              <Link className="LoginBtn" to={"/Login"}>
                <Button>Log in</Button>
              </Link>
            )}

            <Link className="CartBtn" to={"/Cart"}>
              <Button><div className="CartBtn">
                  <h1>
                    <IoBagHandleOutline  />
                  </h1>
                    Cart
              </div></Button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
