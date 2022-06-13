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
            <Navbar.Brand>
              <Link to="/MyProfile">My Profile</Link>
            </Navbar.Brand>

            <NavDropdown title="Other" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action4">My Orders</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="#action5">Wishlist</NavDropdown.Item>
              <NavDropdown.Item href="#action6">Coupons</NavDropdown.Item>
              <NavDropdown.Item href="#action7">Notifications</NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  localStorage.removeItem("Token");
                  window.location.reload();
                }}
              >
                Log Out
              </NavDropdown.Item>
              <NavDropdown.Item href="#action9">
                <Link className="ContactBtn" to={"/SetNewPassword"}>
                  <p>Set New Password</p>
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />

            <Button variant="outline-success">Search</Button>
            {props.user ? (
              `Welcom ${props.user.FirstName}`
            ) : (
              <Link className="LoginBtn" to={"/Login"}>
                <Button>Log in</Button>
              </Link>
            )}

            <Link className="CartBtn" to={"/Cart"}>
              <Button>Cart</Button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
