import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Link, useParams } from "react-router-dom";

import "./SuccessOrder.css";

/**
* @author
* @function SuccessOrder

**/

export const SuccessOrder = (props) => {
  let { OrderId } = useParams();

  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

    <br></br>

      <Container>
        <Row>
          <Col>
            {" "}
            <div className="SuccessMargin">
              <h1>
                <IoMdCheckmarkCircleOutline />
              </h1>{" "}
            </div>
          </Col>
        </Row>
        <br></br>

        <Row>
          <Col></Col>
          <Col>
            <h1 style={{ color: "green" }}>Order Confirmed</h1>
          </Col>
          <Col></Col>
        </Row>
        <br></br>

        <Row>
          <Col>
            <h5>
              Your Order is confirmed.You will receive An Order Confirmation
              Email/SMS <br></br>Shorty with the expected delivery Date for Your
              items.
            </h5>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <Row>
          <Col></Col>
          <Col>
            <Link to={"/"}>
              <Button variant="light">Continue Shopping</Button>{" "}
            </Link>{" "}
            <Link to={`/Order/${OrderId}`}>
              <Button className="Newclr"> View Order</Button>{" "}
            </Link>
          </Col>
          <Col></Col>
        </Row>
        <br></br>
        <br></br>
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

    </>
  );
};
