import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import {
  Badge,
  Col,
  Container,
  Image,
  Row,
  Spinner,
} from "react-bootstrap";
import { useParams } from "react-router";
import Apis, { endpoints } from "../configs/Apis";
// import "../style/Layout.css";
import "../style/Product.css";

export default function ProductDetail() {
  const [product, setProduct] = useState([]);
  const { productId } = useParams();

  useEffect(() => {
    let loadProduct = async () => {
      try {
        let res = await Apis.get(endpoints["product-detail"](productId));
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    loadProduct();
  }, []);

  if (product === null) {
    return <Spinner animation="border" />;
  }
  return (
    <div style={{ marginTop: "160px", height: "70vh" }}>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={4} xs={12}>
            <div
              className="product-items"
              style={{ width: "340px", border: "ridge" }}
            >
              <Image src={product.image} rounded fluid></Image>
            </div>
          </Col>
          <Col md={6} xs={12}>
            <h5>{product.name}</h5>
            <p>Price : {product.price}</p>
            <p>Discount : {product.discount}</p>
            <p>Xuất xứ: {product.origin}</p>
            <p>Số lượng: {product.inventory}</p>
            {/* <p>
              {product.tags.name}
              {product.tags.map((t) => (
                <Badge>{t.name}</Badge>
              ))}
            </p> */}

            <Button onClick>Thêm vào giỏ</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
