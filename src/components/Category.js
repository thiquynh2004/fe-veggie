import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Category(props) {
  let path = `/categories/${props.obj.id}/products/`;
  if (props.type === "product") path = `products/${props.obj.id}`;
  return (
    // trái cây nội, trái cây nhập khẩu, Rau sống, rau ăn lá, Củ rễ
    <>
      <Col xs={12} md={4} style={{ width: "calc(100%/5)" }}>
        <Link to={path}>
          <Card className="category">
            <Card.Body style={{ textAlign: "center", background: "#f2f3ee" }}>
              <Card.Title>{props.obj.name}</Card.Title>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    </>
  );
}
