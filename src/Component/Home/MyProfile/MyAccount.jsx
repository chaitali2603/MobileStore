import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
/**
 * @author
 * @function MyAccount
 **/

export const MyAccount = (props) => {
  
  return (
    <>
      <Container>
        <br></br>
        <h1>My Account</h1>
        <p>
          _____________________________________________________________________________________________________________________________________________________________________________________________
        </p>
        <Row>
          <Col sm={2}>
            <Col className="fw-bold">
              {props.user ? `Welcom ${props.user.FirstName}`: <></>};
            </Col>
            <br></br>
            <ListGroup as="ul">
              <ListGroup.Item className="fw-bold" as="li" active>
                <Link to={"/MyAccount"}> My account</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                {" "}
                <Link to={"/MyOrder"}> My Order</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                {" "}
                <Link to={"/PersonalInformation"}>Personal Informaation</Link>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                {" "}
                <Link to={"/MyAddress"}> My Address</Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={10}> this is my Account</Col>
        </Row>
      </Container>
    </>
  );
};
