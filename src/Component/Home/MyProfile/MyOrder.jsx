import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GetOrderByUserId } from "../../../Utill/Api";
/**
 * @author
 * @function MyOrder
 **/

export const MyOrder = (props) => {


  return (
    <>
      <Container>
        <br></br>
        <h1>My Order</h1>
        <p>
          _____________________________________________________________________________________________________________________________________________________________________________________________
        </p>
        <Row>
          <Col sm={2}>
            <Col className="fw-bold"> Hello Chaitali Trivedi</Col>
            <br></br>
            <ListGroup as="ul">
              <ListGroup.Item className="fw-bold" as="li" active>
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
          <Col sm={10}> 10,20</Col>
        </Row>
      </Container>
    </>
  );
};
