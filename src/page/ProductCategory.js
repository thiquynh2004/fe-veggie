// import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row , Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
// import Category from "../components/Category";
import Apis, { endpoints } from "../configs/Apis";
import "../style/Product.css";
import cookies from 'react-cookies'
import Category from "../components/Category";

export default function ProductCategory() {
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

  const [productCategory, setProductCategory] = useState([]);
  const { categoryId } = useParams();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    let loadedProducts = async () => {
      try {
        let res = await Apis.get(endpoints["productCategory"](categoryId));
        setProductCategory(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    loadedProducts();
  }, []);
  return (
    <>

    <div className="product-category" style={{ marginTop: "80px" }}>

      <h5 style={{ textAlign: "center", color: "#13a549" , marginTop: "100px"}}>
        Danh mục sản phẩm{categories.name}
      </h5>
      <Container>
        <Row>
          {productCategory.map((p) => (
            <ProductCategoryForm product={p} type="product"/>
          ))}
        </Row>
       
      </Container>

    </div>

    </>
  );
}
function ProductCategoryForm(props) {
  let path=`/categories/${props.product.id}/products/`
  const history = useHistory()
  const user = useSelector(state=>state.user.user)
  const [quantity, setQuantity]=useState([])
  if (props.type === "product")
    path = `products/${props.product.id}`

    const addtocart = async (event) => {
      // event.preventDefault();
      if (user !== null && user !== undefined){
        try {
          let loadedAddCart = await Apis.post(endpoints["add-to-cart"],{
             "id":props.product.id,
             "quantity":quantity,
          },{
            headers:{
              Authorization: `Bearer ${cookies.load("access_token")}`
            }
          }).then((rp)=>{
            alert("Thêm sản phẩm thành công")
            // cookies.save("access_token". rp.data.access_token)
          })
          console.log(loadedAddCart)
          cookies.save("carts", loadedAddCart.data)
          
        } catch (error) {
          console.log(error)
        }
      }
      else {
        history.push('/login')
      }
      
     
      
    }
  return (
    <Col md={3} xs={12}>
      <div>
      <Card style={{ }}>
      <Link to = {path}>
        <Card.Img src={props.product.image} fluid />
        </Link>
        <Card.Body>
          <Card.Title style={{fontWeight:"bold" }}>{props.product.name}</Card.Title>
          <Card.Text  >{props.product.description}</Card.Text>
          <Card.Text style={{fontSize:"16px !important"}}>Price: {props.product.price} /1KG</Card.Text>
          <Card.Text >Discount: {props.product.discount}%</Card.Text>
          <input type="number" 
                placeholder="Nhập số kg"
                value={quantity} 
                onChange={(event)=>setQuantity(event.target.value)}
                style={{marginBottom:"16px", textAlign:"center"}}/>
          <Button onClick={() => addtocart(props.product.id)} class="btn btn">Thêm vào giỏ</Button>
        </Card.Body>
      </Card>
      </div>
    </Col>
  );
}