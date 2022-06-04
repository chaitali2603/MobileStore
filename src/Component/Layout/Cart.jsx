import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Filter } from "../Home/Filter";


/**
 * @author
 * @function Cart
 **/

export const Cart = (props) => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={8}>
            My Cart
            <Row>
              <Col sm={2}> Image
              </Col>
              <Col sm={6}> Middle</Col>
              <Col sm={4}>Last
               </Col>
            </Row>
          </Col>
          <Col sm={4}>
            Price Details
            <Row>
              <Col sm={9}> A</Col>
              <Col sm={3}> B</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
