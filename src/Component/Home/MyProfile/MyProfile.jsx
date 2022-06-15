import React, { useEffect } from "react";
import { Container, Row, Col, ListGroup, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MyAccount } from "./MyAccount";
import { PersonalInformation } from "./PersonalInformation";
import "./MyProfile.css";
import { GetAppUserById } from "../../../Utill/Api";

/**
 * @author
 * @function MyProfile
 **/

export const MyProfile = (props) => {
  useEffect(() => {
    const Token = localStorage.getItem("Token");
    GetAppUserById(Token).then((data) => {
      console.log(data);
    });
  }, []);

  if (!props.user) {
    return (
      <div>
        {" "}
        <Navbar.Brand>
          <Link to="/LogIn">Log in</Link>
        </Navbar.Brand>
         To Continue
        <br></br>
      </div>
    );
  }

  return (
    <>
      <Container>
        <br></br>
        <h1>My Profile</h1>
        <p>
          _____________________________________________________________________________________________________________________________________________________________________________________________
        </p>
        <Row>
          <Col sm={2}>
            {" "}
            <Col className="fw-bold">
              {" "}
              Hello {`${props.user.FirstName} ${props.user.LasttName}`}
            </Col>
            <br></br>
            <ListGroup className="a" as="ul">
              <ListGroup.Item
                className="MyProfileCss"
                as="li"
                active
              ></ListGroup.Item>
              <ListGroup.Item as="li">
                {" "}
                <Link to={"/MyOrder"}> My Order</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                {" "}
                <Link to={"/PersonalInformation"}> Personal Information</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                {" "}
                <Link to={"/MyAddress"}> My Address</Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={10}></Col>
        </Row>
      </Container>
    </>
  );
};
