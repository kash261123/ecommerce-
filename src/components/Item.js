import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  InputGroup,
} from "reactstrap";

const Item = ({ product, addInCart }) => {
  const [count, setCount] = useState(0);
  const handleIncreament = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };
  const resetCounter = () => {
    setCount(0);
  };
  return (
    <Card className="mt-2 mb-1">
      <CardImg top height="250" width="100%" src={product.tinyImage} />
      <CardBody className="text-center">
        <CardTitle>{product.productName}</CardTitle>
        <CardText>Quantity</CardText>
        <InputGroup>
          <Button color="success" onClick={handleIncreament}>
            +
          </Button>
          <div className="form-control text-center">{count}</div>
          <Button color="success" onClick={resetCounter}>
            -
          </Button>
        </InputGroup>
        <div className="mt-2">
          <Button color="info" onClick={() => addInCart(product)}>
            Add To Cart
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};
export default Item;
