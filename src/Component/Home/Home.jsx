import { Container, Row, Col, Typography } from "react-bootstrap";
import "./Home.css";
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
      { name: "iphone", value: false },
      { name: "mi", value: false },
      { name: "Vivo", value: false },
      { name: "oppo", value: false },
      { name: "Oneplus", value: false },
      { name: "Poco", value: false },
    ],
    internalStorage: [
      { name: "8-15.9 GB", value: false },
      { name: "16-31.9 GB", value: false },
      { name: "32-63.9 GB", value: false },
      { name: "64-127.9 GB", value: false },
      { name: "128 GB and above", value: false },
    ],
    OpratingSystem: [
      { name: "ios", value: false },
      { name: "Android", value: false },
      { name: "Linus", value: false },
      { name: "Tizen", value: false },
      { name: "Kaios", value: false },
      { name: "Symbian", value: false },
    ],
    search: "",
  });

  const [Products, setProducts] = useState([]);
  const [CartProduct, setCartProduct] = useState([]);

  const { addToast } = useToasts();

  useEffect(() => {
    var _CartProduct = localStorage.getItem("CartProduct");
    debugger;
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
    const existingProd = CartProduct.find((x) => x.Id == _product.Id);
    if (existingProd) {
      const updatedCart = CartProduct.map((x) => {
        if (x.Id == _product.Id) {
          return { ...x, Qty: x.Qty + 1 };
        } else {
          return x;
        }
      });
      setCartProduct(updatedCart);
    } else {
      _product.Qty = 1;
      setCartProduct([...CartProduct, _product]);
    }
    addToast('Succesfully Added to the cart', {
      appearance: 'success',
      autoDismiss: true,
    })
  };

  useEffect(() => {
    if (CartProduct && CartProduct.length > 0)
      localStorage.setItem("CartProduct", JSON.stringify(CartProduct));
  }, [CartProduct]);

  return (
    <>
      <Row className="homeclr">
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
            {Products.map((Product1) => {
              return (
                <Col sm={3}>
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
