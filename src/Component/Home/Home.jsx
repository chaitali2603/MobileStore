import { Container, Row, Col, Typography, Slider } from "react-bootstrap";

import { Filter } from "./Filter";
import { Product } from "../Product/Product";
import './Filter.css'
import './Home.css'

<
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
    ProductName: "iPhone 10",
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
  }, {
    ProductName: "vivo v 20",
    RAM: "6bg",
    DisplaySize: "15.6 inch",
    Battery: "5000 mAh",
    OpratingSystem: "octa-Core Processor",
    Price: "20,000 rs",
  }, {
    ProductName: "Readme",
    RAM: "6bg",
    DisplaySize: "15.6 inch",
    Battery: "5000 mAh",
    OpratingSystem: "octa-Core Processor",
    Price: "20,000 rs",
  }
];
function Home() {
  return (
    <>
      <Row>
        <Col className="FilterComtainer" sm={2}>
          <Filter></Filter>
        </Col>
        <Col sm={10}>
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
