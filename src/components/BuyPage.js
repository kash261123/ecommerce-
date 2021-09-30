import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Container, Row, Col } from "reactstrap";
import CardItem from "./Item";

const myApi = "http://myjson.dit.upm.es/api/bins/1gv1";

const BuyPage = ({ addInCart }) => {
  const [product, setProduct] = useState([]);
  const fetchPhotos = async () => {
    const { data } = await Axios.get(myApi);
    const { photos } = data;

    const allProduct = photos.map((photo) => ({
      productInfo: photo.info,
      tinyImage: photo.src.tiny,
      productName: photo.name,
      productPrice: photo.price,
      id: photo.id,
    }));
    setProduct(allProduct);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);
  return (
    <Container fluid>
      <h1 className="text-primary text-center">Buy Page</h1>
      <Row>
        {product.map((product) => (
          <Col md={4} key={product.id}>
            <CardItem product={product} addInCart={addInCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BuyPage;
