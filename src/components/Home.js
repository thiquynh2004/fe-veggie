import React, { useEffect, useState } from "react";
import Apis, { endpoints } from "../configs/Apis";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
// import Slider from "./Slider";
import { Link } from "react-router-dom";
// import { faKhanda } from "@fortawesome/free-solid-svg-icons";
import '../style/Home.css'
function Category(props) {
  let path=`/categories/${props.obj.id}/products/`
  return (
    // trái cây nội, trái cây nhập khẩu, Rau sống, rau ăn lá, Củ rễ
    <>
      <Col  xs ={12} md={4} 
      style ={{width: "calc(100%/5)"}}>
        <Link to={path}>
          <Card className="category">
            <Card.Body style ={{textAlign: 'center',
    background: '#f2f3ee'}}>
              <Card.Title>{props.obj.name}</Card.Title>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    </>
  );
}

export default function Home(props) {
  // // eslint-disable-next-line no-unused-vars
  // const [products, setProducts] = useState([]);
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // useEffect( () => {
  //   let loadedProducts = async() =>{
  //     try {
  //       let res = await Apis.get(endpoints["products"]);
  //       setProducts(res.data.results);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   loadedProducts()

  // }, []);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let loadedCategories = async () => {
      try {
        let res = await Apis.get(endpoints["categories"]);
        setCategories(res.data.results);
      } catch (error) {
        console.error(error);
      }
    };
    loadedCategories();
  }, []);
  return (
    
    <div className="categories-items">
      <Container>
        <Row >
          
          <h5 style={{
                fontFamily: 'monospace',
                fontSize: '24px',
                textAlign: 'center',
                marginTop: '24px',
                color: '#13a549'
          }}>Danh mục các loại sản phẩm </h5>
            {categories.map((c) => (
              <Category obj={c} />
            ))}
        </Row>
    
        </Container>
    </div>
    

  );
}
