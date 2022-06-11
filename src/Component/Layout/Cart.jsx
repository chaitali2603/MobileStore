import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useCart } from "react-use-cart";

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

  // if (isEmpty) return <h5 className="text-center py-5"> Cart is Empty </h5>;
  return (
    <>
      <div className="container-fluid py-5">
        <div className="row justify-content-center">
          <h4 className="text-center">My Cart</h4>
          <div className="col-sm-12 col-lg-8 col-xl-8 py-4">
            <div className="d-flex justify-content-center py-3">
              <p className="position-relative fw-bolder text-title fs-5">
                Cart{" "}
              </p>
              <p className="fw-bolder text-title fs-5">
                Total Items{" "}
                <span className="position-absolute translate-middle rounded-pill badge bg-success mx-1">
                  {cartProducts.length}
                </span>
              </p>
            </div>
            <div>
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
            </div>
            <div className="d-flex justify-content-between py-3">
              <button
                onClick={() => emptyCart()}
                className="btn btn-outline-danger"
              >
                Clear All
              </button>
              <h3>Total Price: Rs.{getTotalPrice()}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
