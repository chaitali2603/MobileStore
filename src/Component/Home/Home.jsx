import { Container, Row, Col, Typography } from "react-bootstrap";
import { Filter } from "./Filter";
import { Product } from "../Product/Product";
import "./Filter.css";
import React, { useState, useEffect } from "react";
import { SearchAllProducts } from "../../Utill/Api";
import { useToasts } from "react-toast-notifications";

import "./Home.css";

function Home() {
  const [filter, setFilter] = useState({
    pageno: 1,
    recordperpage: 12,
    Price: 150000,
    Ram: [
      { name: "2 GB", value: false },
      { name: "4 GB", value: false },
      { name: "6 GB", value: false },
      { name: "8 GB", value: false },
      { name: "12 GB", value: false },
    ],
    Brand: [
      { name: "Samsung", value: false },
      { name: "Apple", value: false },
      { name: "Xiaomi", value: false },
      { name: "Vivo", value: false },
      { name: "OPPO", value: false },
      { name: "OnePlus", value: false },
      { name: "POCO", value: false },
      { name: "Realme", value: false },
    ],
    internalStorage: [
      { name: "8-15.9 GB", value: false },
      { name: "16-31.9 GB", value: false },
      { name: "32-63.9 GB", value: false },
      { name: "64-127.9 GB", value: false },
      { name: "128 GB and above", value: false },
    ],
    OpratingSystem: [
      { name: "iOS", value: false },
      { name: "Android", value: false },
      { name: "Windows", value: false },
      { name: "Symbian", value: false },
      { name: "Tizen", value: false },
    ],
    search: "",
  });

  const [Products, setProducts] = useState([]);
  const [CartProduct, setCartProduct] = useState([]);

  useEffect(() => {
    var _CartProduct = localStorage.getItem("CartProduct");
    if (!_CartProduct) {
      setCartProduct([]);
    } else {
      setCartProduct(JSON.parse(_CartProduct));
    }
  }, []);

  useEffect(() => {
    getProductdata();
  }, [filter]);

  const getProductdata = () => {
    SearchAllProducts(filter).then((data) => {
      console.log(data);
      setProducts(data);
    });
  };

  const Onaddcart = (_product) => {
    const _cartPRODUCT = CartProduct.find((x) => _product.Id == x.Id);
    if (_cartPRODUCT) {
      const updatedcart = CartProduct.map((x) => {
        if (x.Id == _product.Id) {
          return { ...x, Qty: x.Qty + 1 };
        } else {
          return x;
        }
      });
      setCartProduct(updatedcart);
    } else {
      _product.Qty = 1;
      setCartProduct([...CartProduct, _product]);
    }
    // addToast("Iteam Added", {
    //   appearance: "success",
    //   autoDismiss: true,
    // });
    // debugger;
    alert("Product added successfully");
  };

  useEffect(() => {
    localStorage.setItem("CartProduct", JSON.stringify(CartProduct));
  }, [CartProduct]);

  return (
    <>
      <Row>
        <Col className="FilterComtainer" sm={2}>
          <Filter
            value={filter}
            onChangefilter={(_filter) => {
              setFilter(_filter);
            }}
          ></Filter>
        </Col>

        <Col sm={10} className="ProductContainer">
          <Row>
            {Products.map((Product1, i) => {
              return (
                <Col key={i} sm={3}>
                  <Product onAddCart={Onaddcart} product={Product1}></Product>
                </Col>
              );
            })}
          </Row>{" "}
        </Col>
      </Row>
    </>
  );
}

export default Home;
