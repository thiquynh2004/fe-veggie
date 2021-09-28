import React from "react";
import { Carousel } from "react-bootstrap";

export default function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="./img/slide1.jpg" alt="Slide1" />
        <Carousel.Caption>
          <h3>RAU CỦ TƯƠI NGON </h3>
          <p>Được chọn lựa từ nguồn rau củ sạch </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="./img/slide2.jpg" alt="Slide2" />

        <Carousel.Caption>
          <h3>Trái Cây Nhập Khẩu- Trái Cây Nội Địa </h3>
          <p>Tươi ngon không lo về giá</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="./img/slide3.jpg" alt="Slide3" />

        <Carousel.Caption>
          <h3>Mùa hè sôi động</h3>
          <p>Khuyến mãi với nhiều mặt hàng</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
