import React from "react";
import { useEffect, useState } from "react";
import {
  Table,
  Card,
  Row,
  Col,
  Form,
  Container,
  Button,
  Alert,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { GetAddressByUserId } from "../../Utill/Api";
import { ReqMyOrder } from "../../Utill/Api";
import "./Confriom.css";

/**
 * @author
 * @function ConfrimOrder
 **/

export const ConfrimOrder = (props) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [userOrderProduct, setuserOrderProduct] = useState([]);
  const [UserOrder, setUserOrder] = useState({
    Address: "",
  });

  const [ConfrimOrder, setConfrimOrder] = useState({
    isChecked: false,
  });

  const validateConfrimOrder = (e) => {
    setShowError(false);
    if (!UserOrder.Address) {
      console.log("Check Box is not selected");
      setErroeMassage("Please Click on the CheckBox ");
      setShowError(true);
      return false;
    }
    return true;
  };

  useEffect(() => {
    const carts = localStorage.getItem("CartProduct");
    if (carts) setCartProducts(JSON.parse(carts));
  }, []);
  const [allAddress, setAllAddress] = useState([]);

  const getAllAddress = () => {
    const Token = localStorage.getItem("Token");
    GetAddressByUserId(Token).then((data) => {
      console.log(data);
      setAllAddress(data);
    });
  };
  useEffect(() => {
    getAllAddress();
  }, []);

  const getTotalPrice = () => {
    if (!cartProducts || cartProducts.length == 0) {
      return 0;
    }
    return cartProducts
      .map((datum) => datum.Qty * datum.Price)
      .reduce((a, b) => a + b);
  };
  const onclickRadioBtn = () => {};

  const onSubmitOrder = () => {
    if (!validateConfrimOrder()) {
      return false;
    }

    const _CartProduct = cartProducts.map((x) => {
      return {
        ProductId: x.Id,
        Price: x.Price,
        Quantity: x.Qty,
      };
    });

    const order = {
      Order: UserOrder,
      OrderProduct: _CartProduct,
    };
    console.log(order);
    ReqMyOrder(order).then((data) => {
      console.log(data);
      localStorage.setItem("CartProduct", JSON.stringify([]));
      window.location.href = `/SuccessOrder/${data.Order.Id}`;
    });
  };

  const [showError, setShowError] = useState(false);
  const [ErroeMassage, setErroeMassage] = useState("");

  return (
    <>
    <br></br>
    <br></br>
    <br></br>
    
      <div>
        <Container>
          <Table striped bordered hover>
            <thead>
              <tr></tr>
            </thead>
            <tbody>
              {cartProducts.map((item, index) => {
                return (
                  <tr key={index} className="align-middle">
                    <td>
                      <img
                        src={item.ImageUrl}
                        className="img-cart"
                        alt={item.ModelName}
                      />
                    </td>
                    <td>{item.ModelName}</td>
                    <td>{item.Price}</td>
                    <td>Quantity: {item.Qty} </td>
                    <td>{item.Qty * item.Price} </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>

          <div>
            <h3>Select Address</h3>
          </div>
          <br></br>
          {showError ? <Alert variant={"danger"}>{ErroeMassage}</Alert> : null}
              
          <div className="cnfrimOver">
            {allAddress.map((address, index) => {
              
              return (
                <Row>
                  <Col></Col>
                  <Col>

                    <Col sm={10}>
                      <Card style={{ width: "20rem" }}>
                        <Row>
                          <Col sm={2}>
                            {" "}
                            
                            <div className="cnfrionbtn">
                              <Form.Check
                                type="radio"
                                aria-label="radio 1"
                                name="group1"
                                value={address.Id}
                                checked={address.Id == UserOrder.Address}
                                onChange={(e) => {
                                  setUserOrder({
                                    ...UserOrder,
                                    Address: e.target.value,
                                  });
                                }}
                                {...address.Address1}
                              />
                            </div>
                          </Col>
                          <Col sm={10}>
                            <Card.Body>
                              <Card.Title> {address.City} </Card.Title>
                              <Card.Subtitle className="mb-2 text-muted">
                                {address.state}
                              </Card.Subtitle>
                              <Card.Text>{address.Address1}</Card.Text>
                            </Card.Body>
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                  </Col>
                  <Col></Col>
                </Row>
              );
            })}
          </div>
          <br></br>
          <div>
            <h3>
              Cash On Delivery Of Amount {getTotalPrice()} Will be Deliverd
              Within 7 days
            </h3>
          </div>
          <br></br>
          <div>
            <Button onClick={onSubmitOrder} variant="success">
              Confrim Order
            </Button>{" "}
          </div>
          <br></br>
        </Container>
      </div>
      <br></br>

    </>
  );
};
