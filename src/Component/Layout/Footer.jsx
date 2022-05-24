import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <Card>
        <Card.Body>
          <Link className="ContactBtn" to={"/ContactUs"}>
            <span>Contact Us</span>
          </Link>
          <div>
            <Link className="ContactBtn" to={"/ContactUs"}>
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
