import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  CardHeader,
  CardBody,
  Card,
  CardFooter,
  Col,
  Row,
  CardText,
} from "reactstrap";

const Cart = ({ cartItem, removeItem, buyNow }) => {
  let amount = 0;

  cartItem.forEach((item) => {
    amount = parseInt(amount) + parseInt(item.productPrice);
  });
  return (
    <Container fluid>
      <h1 className="text-success">Your Cart</h1>
      <ListGroup>
        {cartItem.map((item) => (
          <ListGroupItem key={item.id}>
            <Row>
              <Col>
                <img alt="Loading.." height={80} src={item.tinyImage} />
              </Col>
              <Col className="text-center">
                <div className="text-primary">{item.productName}</div>
                <span>Price:-₹ {item.productPrice}</span>
                <CardText className="secondary">
                  Details:-{item.productInfo}
                </CardText>
                <div>
                  <Button color="danger" onClick={() => removeItem(item)}>
                    Remove
                  </Button>
                </div>
              </Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>
      {cartItem.length >= 1 ? (
        <Card className="text-center mt-3">
          <CardHeader>Grand Total</CardHeader>
          <CardBody>
            Your Total Bill For {cartItem.length} Product Is
            {amount}₹
          </CardBody>
          <CardFooter>
            <Button color="success" onClick={buyNow}>
              Buy Now
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <>
          <h1 className="text-warning">Cart Is Empty</h1>
          <Card>
            <Button color="info" tag={Link} to="/">
              Logout
            </Button>
          </Card>
        </>
      )}
    </Container>
  );
};
export default Cart;
