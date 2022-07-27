import React, { useState } from "react";
import { Row, Col, Image, Button, Container } from "react-bootstrap";
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

  console.log(props);
  const GetdiscountedPrice = () => {
    if (!props.productDetail || !props.productDetail.Disscount) {
      return props.productDetail.Price;
    }
    return (
      props.productDetail.Price - (props.productDetail.Price * props.productDetail.Disscount) / 100
    );
  };

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
      <Container>
        <br></br>
        <br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <div>
          <Row>
            <Col sm={5}>
              <Row>
                <Col>
                  {" "}
                  <Image
                    width={360}
                    height={360}
                    src={productDetail?.ImageUrl}></Image>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Button
                    onClick={() => {
                      props.onAddCart(props.productDetail);
                    }}
                    variant="outline-primary"
                    size="md"
                  >
                    Add to Cart
                  </Button>
                </Col>
                <Col>
                  <Link to={"/Cart"}>
                    <Button> Buy Now</Button>
                  </Link>
                </Col>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
              </Row>
            </Col>



            <Col sm={7}>
              <table className="table-center table-light table-hover m-0">
                <tr>
                  <th>
                      <h1><b>{productDetail.ModelName}</b></h1>
                    <br></br>
                  </th>
                </tr>
                <tbody>


                  {/* <Row>
                  <Col>
                  {props.productDetail.Disscount>0?<span style={{textDecoration:'line-through'}} className="OrignalPrice"> <div>{props.productDetail.Price}</div></span>:null}
                  {GetdiscountedPrice()}
                  </Col>
                  </Row>
                  */}

                  <tr>
                  <td>
                  <b>Price: </b>
                  {productDetail.Price} with {productDetail.Disscount}% Discount</td>
                  </tr>
                  <br></br><br></br>
                  
                    <tr>
                    <td>
                    <b>About this Item<br></br>
                    </b>{productDetail.Description}
                    </td>
                    </tr>
                 <br></br><br></br><br></br>

                  <Row>
                    <Col>
                      <div className="image">
                        <img src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png" />
                      </div>
                      <div class="a-section a-spacing-none icon-content"> Pay on Delivery </div>
                    </Col>

                    <Col>
                      <div className="image">
                        <img src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png" />
                      </div>
                      <div class="a-section a-spacing-none icon-content"> 7 Days Replacement </div>
                    </Col>
                    <Col>
                      <div className="image">
                        <img src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png" />
                      </div>
                      <div class="a-section a-spacing-none icon-content"> 1 Year Warranty </div>
                    </Col>
                    <Col>
                      <div className="image">
                        <img src="https://images-na.ssl-images-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/No_contact_delivery_final._CB432269791_.png" />
                      </div>
                      <div class="a-section a-spacing-none icon-content"> Product Delivered</div>
                    </Col>
                  </Row>
                </tbody>
              </table>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};