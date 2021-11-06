import React, { useEffect, useState } from "react";
import Apis, { endpoints } from "../configs/Apis";
import {  Container, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
import '../style/Home.css'
import Category from "./Category";
import Slider from "./Slider";
// import ProductCategory from "../page/ProductCategory";

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
    <>
    <Slider/>
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
            {categories.map(c=> (
              <Category obj={c} />
            ))}
        </Row>
        
        </Container>
    </div>
    
</>
  );
}
