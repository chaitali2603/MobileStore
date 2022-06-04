import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <Card className="header">
        <Card.Body style={{padding :0}}>
          <Link className="ContactBtn" to={"/ContactUs"}>
            <span>Contact Us</span>
          </Link>
          
          <Link className="ContactBtn" to={"/AboutUs"}>
              <span>About Us</span>
            </Link>
          <Card.Title></Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}
export default Footer;
