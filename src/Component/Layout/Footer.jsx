import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <Card className="header1">
        <Card.Body style={{padding :0}}>
          <div>
          <Link className="ContactBtn" to={"/ContactUs"}>
            <span>Contact Us</span>
          </Link>
          </div>
          <div>
          <Link className="ContactBtn" to={"/AboutUs"}>
              <span>About Us</span>
            </Link>
          </div>
          
          <Card.Title></Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}
export default Footer;
