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
import { BiShoppingBag } from "react-icons/bi";
import { MdMobileFriendly } from "react-icons/md";

function Header(props) {
  return (
    <Navbar className="header1" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <MdMobileFriendly size={30} className='BrandLogo' />
          </Link>
        </Navbar.Brand>
        <div className="BrandName" >Mobile Carts</div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {/* {props.user ? (
              <Navbar.Brand
                onClick={() => {
                  localStorage.removeItem("Token");
                  window.location.reload();
                }}
              >
                Log Out
              </Navbar.Brand>
            ) : null} */}
          </Nav>
          <Form className="d-flex">
            {/* <br></br>
            {props.user ? (
              `Welcome ${props.user.FirstName}`
            ) : (
              <Link className="LoginBtn" to={"/Login"}>
                <Button>Log in</Button>
              </Link>
            )} */}

            <div className="HeaderIcon">
              <Link to={"/PersonalInformation"}>
                <div>
                  <IoPersonOutline size={30} className="ProfileIcoon" />{" "}
                  {/*My Profile */}
                  <div className="headerboldtext">Profile</div>
                </div>
              </Link>
            </div>

            <div className="HeaderIcon">
              <Link className="CartBtn" to={"/Cart"}>
                <div>
                  <BiShoppingBag size={30} className="CartIcon" />
                  <div className="headerboldtext">Cart</div>
                </div>
              </Link>
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
