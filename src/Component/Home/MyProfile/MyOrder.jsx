import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col, ListGroup, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GetOrderByUserId1 } from "../../../Utill/Api";
import { SideBar } from "../../Layout/SideBar";
/**
 * @author
 * @function MyOrder
 **/

export const MyOrder = (props) => {
  const [myOrder, setmyOrder] = useState([]);
  const convertDate = (e) => {
    const d = new Date(e);
    return [d.getDate(), d.getMonth() + 1, d.getFullYear()]
      .map((n) => (n < 10 ? `0${n}` : `${n}`))
      .join("/");
  };

  const getAllOrders = () => {
    const Token = localStorage.getItem("Token");
    GetOrderByUserId1(Token).then((data) => {
      console.log(data);
      setmyOrder(data);
    });
  };
  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <>
      <Container>
        
        <h1 className="SuccessMargin">My Order</h1>
        <p>
      _________________________________________________________________________________________________________________________________________________________
        </p>
        <Row>
          <Col sm={2}>
            {/* <Col className="fw-bold"> {props.user ? `Hello ${props.user.FirstName}` : <></>}</Col> */}
            <br></br>
           {/* <SideBar user={props.user}></SideBar> */}
          </Col>
          <Col sm={10}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <td>Sr.no</td>
                  <td>First Name</td>
                  <td>Last Name</td>
                  <td>Order Id</td>
                  <td>Order Date</td>
                  <td> View Details</td>
                </tr>
              </thead>
              <tbody>
                {myOrder.map((x, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{x.FirstName}</td>
                      <td>{x.LasttName}</td>
                      <td>{x.Id}</td>
                      <td>{convertDate(x.CreatedDate)}</td>
                      <td>
                        <Link to={`/Order/${x.Id}`}>
                          {" "}
                          <Button variant="secondary" size="sm">
                            View Details
                          </Button>{" "}
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};
