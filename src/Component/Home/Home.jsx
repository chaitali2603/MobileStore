import { Container, Row, Col, Typography } from "react-bootstrap";
import { Filter } from "./Filter";
import { Product } from "../Product/Product";
import "./Filter.css";
import React, { useState, useEffect } from "react";
import { SearchAllProducts } from "../../Utill/Api";


import "./Home.css";
const Products = [
  {
    ProductName: "Samsumg",
    RAM: "6bg",
    DisplaySize: "15.6 inch",
    Battery: "5000 mAh",
    OpratingSystem: "octa-Core Processor",
    Price: "20,000 rs",
  },
  {
    ProductName: "REadmi",
    RAM: "6bg",
    DisplaySize: "15.6 inch",
    Battery: "5000 mAh",
    OpratingSystem: "octa-Core Processor",
    Price: "20,000 rs",
  },
  {
    ProductName: "iphone",
    RAM: "6bg",
    DisplaySize: "15.6 inch",
    Battery: "5000 mAh",
    OpratingSystem: "octa-Core Processor",
    Price: "20,000 rs",
  },
  {
    ProductName: "oppo",
    RAM: "6bg",
    DisplaySize: "15.6 inch",
    Battery: "5000 mAh",
    OpratingSystem: "octa-Core Processor",
    Price: "20,000 rs",
  },
  {
    ProductName: "vivo",
    RAM: "6bg",
    DisplaySize: "15.6 inch",
    Battery: "5000 mAh",
    OpratingSystem: "octa-Core Processor",
    Price: "20,000 rs",
  },
  {
    ProductName: "one Plus",
    RAM: "6bg",
    DisplaySize: "15.6 inch",
    Battery: "5000 mAh",
    OpratingSystem: "octa-Core Processor",
    Price: "20,000 rs",
  },
  {
    ProductName: "iPhone 11",
    RAM: "6bg",
    DisplaySize: "15.6 inch",
    Battery: "5000 mAh",
    OpratingSystem: "octa-Core Processor",
    Price: "20,000 rs",
  },
  {
    ProductName: "Oppo Reno",
    RAM: "6bg",
    DisplaySize: "15.6 inch",
    Battery: "5000 mAh",
    OpratingSystem: "octa-Core Processor",
    Price: "20,000 rs",
  },
  {
    ProductName: "vivo v 20",
    RAM: "6bg",
    DisplaySize: "15.6 inch",
    Battery: "5000 mAh",
    OpratingSystem: "octa-Core Processor",
    Price: "20,000 rs",
  },
  {
    ProductName: "Readme",
    RAM: "6bg",
    DisplaySize: "15.6 inch",
    Battery: "5000 mAh",
    OpratingSystem: "octa-Core Processor",
    Price: "20,000 rs",
  },
];

function Home() {
  const [filter, setFilter] = useState({
    pageno: 1,
    recordperpage: 12,
    Price: 5000,
    Ram: null,
    Brand: null,
    internalStorage: null,
    OpratingSystem: null,
    search: "",
  });

  const [Products, setProducts] = useState([]);

  useEffect(() => {
    getProductdata();
  }, [filter]);

  const getProductdata = () => {
    SearchAllProducts(filter).then((data) => {
      console.log(data);
      setProducts(data);
    });
  };

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
            {Products.map((Product1) => {
              return (
                <Col sm={3}>
                  <Product product={Product1}></Product>
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
