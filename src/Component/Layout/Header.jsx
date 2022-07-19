import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  ListGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import { IoPersonOutline } from "react-icons/io5";
import { BiShoppingBag } from "react-icons/bi";
import { MdMobileFriendly, MdSearch } from "react-icons/md";
import { FiHeart } from "react-icons/fi";

function Header(props) {
  return (
    <Navbar className="header1" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <MdMobileFriendly size={30} className="BrandLogo" />
          </Link>
        </Navbar.Brand>
        <div className="BrandName">Sawariya Mobile </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
          </Nav>
          <Form className="d-flex">

            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 SearchBox"
              aria-label="Search"
            />
            
            <div className="dropdown">
              <div className="HeaderIcon">
                <Link to={"/PersonalInformation"}>
                  <div className="Headericonalign">
                    <IoPersonOutline size={25} className="ProfileIcoon" />{" "}
                    {/*My Profile */}
                    <div className="headerboldtext">Profile</div>
                  </div>
                </Link>
              </div>
              <div className="dropdown-content">
                <div>
                  <div className="Welcome">
                    {" "}
                    welcome
                    {props.user ? ` ${props.user.FirstName}` : null}{" "}
                  </div>
                  <div>To access account and manage orders</div>
                  {!props.user ? (
                    <div>
                      <Link className="LoginBtn" to={"/Login"}>
                        {" "}
                        <Button size="sm" variant="outline-primary">
                          {" "}
                          LogIn/SignUp
                        </Button>
                      </Link>
                    </div>
                  ) : null}
                </div>
                {props.user ? (
                  <>
                    <div>
                      <hr />
                    </div>
                    <div>
                      <Link to={"/MyOrder"}>
                        {" "}
                        <div className="MyProfileLink"></div> Order
                      </Link>
                      <Link to={"/MyAddress"}>
                        {" "}
                        <div className="MyProfileLink">Address</div>
                      </Link>
                      <Link to={"/PersonalInformation"}>
                        {" "}
                        <div className="MyProfileLink">
                          {" "}
                          Personal Information
                        </div>
                      </Link>
                      {props.user.UserType == 2 ? (
                        <Link to={"/CreateProduct"}>
                          <div className="MyProfileLink">All Product</div>
                        </Link>
                      ) : null}
                    </div>
                  </>
                ) : null}
                <div>
                  <hr />
                </div>
                <div>
                  <Link className="ContactBtn" to={"/ContactUs"}>
                    <div className="MyProfileLink"> Contact Us</div>
                  </Link>

                  <Link className="ContactBtn" to={"/AboutUs"}>
                    <div className="MyProfileLink"> About Us</div>
                  </Link>
                </div>
                {props.user ? (
                  <>
                    <div>
                      <hr />
                    </div>
                    <div>
                      <div
                        className="MyProfileLink"
                        onClick={() => {
                          localStorage.removeItem("Token");
                          window.location.reload();
                        }}
                      >
                        Log Out
                      </div>
                    </div>
                  </>
                ) : null}
              </div>
            </div>
            <div className="HeaderIcon">
              <Link className="CartBtn" to={"/Cart"}>
                <div>
                  <FiHeart size={22} className="CartIcon" />
                  <div className="headerboldtext">Wishlist</div>
                </div>
              </Link>
            </div>
            <div className="HeaderIcon">
              <Link className="CartBtn" to={"/Cart"}>
                <div>
                  <BiShoppingBag size={25} className="CartIcon" />
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
