import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import { IoBagAddSharp } from "react-icons/io5";

/**
 * @author
 * @function Cart
 **/

export const Cart = (props) => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const [cartProducts, setCartProducts] = useState([]);

  const removeCart = (product) => {
    const updatedCart = cartProducts.filter((x) => x.Id != product.Id);
    setCartProducts(updatedCart);
    localStorage.setItem("CartProduct", JSON.stringify(updatedCart));
  };

  const onCartQtyChange = (id, qty) => {
    const updatedCart = cartProducts.map((x) => {
      if (x.Id == id) {
        return { ...x, Qty: qty };
      } else {
        return x;
      }
    });
    setCartProducts(updatedCart);
    localStorage.setItem("CartProduct", JSON.stringify(updatedCart));
  };

  useEffect(() => {
    const carts = localStorage.getItem("CartProduct");
    if (carts) setCartProducts(JSON.parse(carts));
  }, []);

  const getTotalPrice = () => {
    if (!cartProducts || cartProducts.length == 0) {
      return 0;
    }

    return cartProducts
      .map((datum) => datum.Qty * datum.Price)
      .reduce((a, b) => a + b);
  };
  const clearCart = () => {
    localStorage.setItem("CartProduct", JSON.stringify([]));
    setCartProducts([]);
  };

  if (!cartProducts || cartProducts.length == 0)
    return (
      <>
        <Container>
          <Row>
            <Col>
              {" "}
              <div className="SuccessMargin">
                <h1>
                  <IoBagAddSharp />
                </h1>{" "}
              </div>
            </Col>
          </Row>
          <br></br>

          <Row>
            <Col></Col>
            <Col>
              <h1 style={{ color: "green" }}>Hey, it feel so light!</h1>
            </Col>
            <Col></Col>
          </Row>
          <br></br>

          <Row>
            <Col>
              <h5>
                There are nothing in your bag. Let's add some items.
              </h5>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <Row>
            <Col></Col>
            <Col>
              <Link to={"/"}>
                <Button variant="light">Add Item from Home</Button>{" "}
              </Link>{" "}
              
            </Col>
            <Col></Col>
          </Row>
          <br></br>
          <br></br>
        </Container>
      </>
    );
  return (
    <>
      <div className="container-fluid py-5">
        <div className="row justify-content-center">
          <h4 className="text-center">My Cart</h4>
          <div className="col-sm-12 col-lg-8 col-xl-8 py-4">
            <div className="d-flex justify-content-center py-3">
              <div className="position-relative fw-bolder text-title fs-5">
                Cart{" "}
              </div>
              <div className="fw-bolder text-title fs-5">
                Total Items{" "}
                <span className="position-absolute translate-middle rounded-pill badge bg-success mx-1">
                  {cartProducts.length}
                </span>
              </div>
            </div>
            <div>
              <Row>
                <Col sm={2}></Col>
                <Col sm={10}>
                  {" "}
                  <table className="table table-light table-hover m-0">
                    <tbody>
                      {cartProducts.map((item, index) => {
                        return (
                          <tr key={index} className="align-middle">
                            <td>
                              <img
                                src={item.ImageUrl}
                                className="img-cart"
                                alt={item.Name}
                              />
                            </td>
                            <td>{item.Name}</td>
                            <td>{item.Price}</td>
                            <td>Quantity: {item.Qty} </td>
                            <td>{item.Qty * item.Price} </td>
                            <td>
                              <button
                                onClick={() =>
                                  onCartQtyChange(item.Id, item.Qty - 1)
                                }
                                disabled={item.Qty == 1}
                                className="btn btn-outline-dark mx-1"
                              >
                                -
                              </button>
                              <button
                                onClick={() =>
                                  onCartQtyChange(item.Id, item.Qty + 1)
                                }
                                className="btn btn-outline-dark mx-1"
                              >
                                +
                              </button>
                              <button
                                onClick={() => removeCart(item)}
                                className="btn btn-outline-danger mx-5"
                              >
                                Remove Item
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </Col>
              </Row>
            </div>
            <div className="d-flex justify-content-between py-3">
              <button
                onClick={() => clearCart()}
                className="btn btn-outline-danger"
              >
                Clear All
              </button>
              <h3>Total Price: Rs.{getTotalPrice()}</h3>
              <Link to={"/ConfrimOrder"}>
                <Button> Proceed to Pay</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
