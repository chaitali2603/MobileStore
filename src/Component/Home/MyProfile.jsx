import React from "react";
import { Row, Col, Accordion } from "react-bootstrap";

/**
 * @author
 * @function MyProfile
 **/

export const MyProfile = (props) => {
  return (
    <>

<Container>
  <Row>
    <Col sm={4}></Col>
    <Col sm={8}> <Accordion>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>My Order</Accordion.Body>
            </Accordion.Item>
          </Accordion></Col>
  </Row>
 
</Container>
      {/* <Row>
        <Col sm={2}></Col>
        <Col></Col>
        <Col>
          <Accordion>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>My Order</Accordion.Body>
            </Accordion.Item>
          </Accordion>{" "}
        </Col>
        <Col sm={10}>
          <Col sm={3}>
            <Accordion>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>My Order</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Col>
      </Row> */}
    </>
  );
};
