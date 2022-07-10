import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SideBar } from "../../Layout/SideBar";
/**
 * @author
 * @function MyAccount
 **/

export const MyAccount = (props) => {
  return (
    <>
      <Container>
        <h1 className="SuccessMargin">My Account</h1>
        <p>
          _____________________________________________________________________________________________________________________________________________________________________________________________
        </p>
        <Row>
          <Col sm={2}>
            {/* <Col className="fw-bold">
              {props.user ? `Welcom ${props.user.FirstName}` : <></>};
            </Col> */}
            <br></br>
            {/* <SideBar user={props.user}></SideBar> */}
          </Col>
          <Col sm={10}> this is my Account</Col>
        </Row>
      </Container>
    </>
  );
};
