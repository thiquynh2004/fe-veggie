import React from "react";
import { Col, Card, Button } from "react-bootstrap";

export default function MyCard(props) {
  return (
    <Col md={4} xs={12}>
      <Card style={{ width: "18rem" }}>
        <Card.Img src={props.product.image} fluid />
        <Card.Body>
          <Card.Title>{props.product.name}</Card.Title>
          <Card.Text>{props.product.description}</Card.Text>
          <Card.Text>{props.product.price} /1KG</Card.Text>
          <Card.Text>{props.product.discount}</Card.Text>
          <Button>Add to cart</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
