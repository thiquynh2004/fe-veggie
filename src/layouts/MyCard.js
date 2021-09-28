import React from "react";
import { Col, Card, Button } from "react-bootstrap";

export default function MyCard(props) {
  return (
    <Col md={3} xs={12}>
      <div>
      <Card style={{ }}>
        <Card.Img src={props.product.image} fluid />
        <Card.Body>
          <Card.Title style={{fontWeight:"bold" }}>{props.product.name}</Card.Title>
          <Card.Text  >{props.product.description}</Card.Text>
          <Card.Text style={{fontSize:"16px !important"}}>Price: {props.product.price} /1KG</Card.Text>
          <Card.Text >Discount: {props.product.discount}%</Card.Text>
          <Button>Add to cart</Button>
        </Card.Body>
      </Card>
      </div>
    </Col>
  );
}
