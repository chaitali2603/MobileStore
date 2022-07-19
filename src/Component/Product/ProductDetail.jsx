import React, { useState } from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import { GetProductById } from "../../Utill/Api";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { useEffect } from "react";
/**
 * @author
 * @function ProductDetail
 **/

export const ProductDetail = (props) => {
  let { productId } = useParams();

  /* console.log(props);
  const GetdiscountedPrice = () => {
    if (!props.ProductDetail || !props.ProductDetail.Disscount) {
      return props.ProductDetail.Price;
    }
    return (
      props.ProductDetail.Price - (props.ProductDetail.Price * props.ProductDetail.Disscount) / 100
    );
  };  */

  const [productDetail, setProductDetail] = useState({});
  console.log(productId);

  //steps
  //1 - API.js function 1 api/product/GetProductById?ProductId=productId
  //response setProductDetail

  const getProductDetail = () => {
    GetProductById(productId).then((x) => {
      console.log(x);
      setProductDetail(x);
    });
    //api.then((response)=>{setProductDetail(response)})
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  if (!productDetail.Id) {
    return;
  }

  return (
    <>
      <br></br>
      <br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <div>
        <Row>
          <Col sm={5}>
            <Row>
              <Col>
                {" "}
                <Image src={productDetail?.ImageUrl}></Image>
              </Col>
            </Row>
            <Row>
              <Col>
                {" "}
                <Link to={"/Cart"}></Link>
                <Button>
                  Add to Cart
                </Button>
              </Col>
              <Col>
                <Link to={"/ConfrimOrder"}>
                  <Button> Buy Now</Button>
                </Link>
              </Col>
              <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            </Row>
          </Col>
          <Col sm={7}>
            <Row>
              <Col><h1><b>{productDetail.ModelName}</b></h1></Col>
            </Row>            
            <br></br>
            <Row>
              <Col><b>Price: </b>{productDetail.Price} with {productDetail.Disscount}% Discount</Col>
            </Row>
            <br></br>
            <Row>
              <Col><b>Description: </b>{productDetail.Description}</Col>
            </Row><br></br><br></br><br></br>
            
            <Col sm={6}>
              <Row>
                <Col>
                  <div className="image">
                  <img src = "https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png" />  
                  </div>
                  <div class="a-section a-spacing-none icon-content"> 7 Days Replacement </div>
                </Col>
                <Col>
                  <div className="image">
                  <img src = "https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png" />  
                  </div>
                  <div class="a-section a-spacing-none icon-content"> 1 Year Warranty </div>
                </Col>
                <Col>
                  <div className="image">
                  <img src = "https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/No_contact_delivery_final._CB432269791_.png" />  
                  </div>
                  <div class="a-section a-spacing-none icon-content"> Product Delivered</div>
                </Col>
              </Row>
            </Col>
          </Col>
        </Row>
      </div> 
    </>
  );
};