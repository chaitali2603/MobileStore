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

  if (!props.user) {
    console.log(props.user)
    return <div></div>;
  }

  return (
    <>
      <Row>
        <Col>
         
        </Col>
      </Row>
    </>
  );
};
