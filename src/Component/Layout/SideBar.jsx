import React from "react";
import { Container, Row, Col, ListGroup, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

/**
 * @author
 * @function SideBar
 **/

export const SideBar = (props) => {
  const location = useLocation();

  const SeePath = (Group) => {
    return location.pathname == Group;
  };

  return (
    <>
      <Row>
        <Col>
          <ListGroup.Item as="li" active={SeePath("/MyOrder")}>
            {" "}
            <Link to={"/MyOrder"}> My Order</Link>
          </ListGroup.Item>
          <ListGroup.Item as="li" active={SeePath("/PersonalInformation")}>
            {" "}
            <Link to={"/PersonalInformation"}> Personal Information</Link>
          </ListGroup.Item>
          <ListGroup.Item as="li" active={SeePath("/MyAddress")}>
            {" "}
            <Link to={"/MyAddress"}> My Address</Link>
          </ListGroup.Item>
          <ListGroup.Item as="li" active={SeePath("/CreateProduct")}>
            {" "}
            <Link to={"/CreateProduct"}> All Product</Link>
          </ListGroup.Item>
        </Col>
      </Row>
    </>
  );
};
