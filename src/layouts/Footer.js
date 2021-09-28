import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone , } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter,faFacebook} from "@fortawesome/free-brands-svg-icons";
// import { f} from "@fortawesome/free-regular-svg-icons"
import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../style/Footer.css";
// import {Link} from "react-router-dom"

export default function Footer() {
  return (
    <div className="footer">
      <Container>
      

        <Row>
          
          <Col xs={12} md={4}>
            <div className="service-footer">
              <h5>OUR SERVICE</h5>
              <div className="item-service">
                <li><a href="/">Trang chủ</a></li>
                <li><a href="/">Sản phẩm</a></li>
                <li><a href="/">Liên hệ</a></li>
                <li><a href="/">Trợ giúp</a></li>
              
              </div>

            </div>
            
            
           
          </Col>
          <Col xs={12} md={4}>
          <div className="privacy-footer">
              <h5>PRIVACY & TERMS</h5>
              <div className="item-service">
                <li><a href="/">Chính sách thanh toán</a></li>
                <li><a href="/">Chính sách bảo mật</a></li>
                <li><a href="/">Chính sách hoàn trả</a></li>
                <li><a href="/">Điều khoản và điều kiện</a></li>

              </div>

            </div>
            
            
          </Col>
          <Col xs={12} md={4}>
          <div className="contact-footer">
            <h5 style={{}}>CONTACT US</h5>
            <div style={{marginBottom:'16px'}}>
              <FontAwesomeIcon icon={faMapMarkerAlt} style={{ 
                marginRight: '10px',
                fontSize: 'large',
                color: '#008044'
              }}/>
              <span className="list-footer">371 Nguyễn Kiệm, Quận Gò Vấp, Thành Phố Hồ Chí Minh, Việt Nam</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faPhone} style={{ 
                marginRight: '10px',
                fontSize: 'large',
                color: '#008044'
              }}/>
                <h6 className="list-footer">0123456789</h6>
              </div>
              <div className="social-network">
                <FontAwesomeIcon className = "social-network-items" icon={faFacebook}/>
                <FontAwesomeIcon className = "social-network-items" icon={faInstagram}/>
                <FontAwesomeIcon className = "social-network-items" icon={faTwitter}/>

              </div>
              </div>
          </Col>
        </Row>
        </Container>
    </div>
  );
}
