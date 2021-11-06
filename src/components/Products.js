import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import {
  Row,
  Container,
  ButtonGroup,
  Button,
  Col,
  Card,
} from "react-bootstrap";
import Apis, { endpoints } from "../configs/Apis";
import "../style/Product.css";
import Slider from "./Slider";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import cookies from 'react-cookies'


export default function Products(props) {
  const [products, setProducts] = useState([]);
  // const{categoryId} = useParams()
  const location = useLocation();
  const [prev, setPrevious] = useState(false);
  const [next, setNext] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    let loadedProducts = async () => {
      let query = location.search;
      if (query === "") 
        query = `?page = ${page}`
      else 
        query += `&page =${page}`;

      try {
        // let res = await Apis.get(`${endpoints["products"](categoryId)}${query}`)
        let res = await Apis.get(`${endpoints["products"]}${query}`);
        setProducts(res.data.results);

        setNext(res.data.next !== null);
        setPrevious(res.data.previous !== null);
      } catch (error) {
        console.error(error);
      }
    };
    loadedProducts();
  }, [location.search, page]);

  const paging = (inc) => {
    setPage(page + inc)
  };
  
  
  
  return (
    <div className="products" style={{ marginTop: "80px" }}>
      <Slider/>
      {/* <Slider></Slider> */}
      {/* <h3 style={{textAlign: "center", marginTop: "60px"}}>Danh sách sản phẩm</h3> */}
      <Container>
        <Row>
          {products.map(p => (
            <ProductForm product={p} type="product" />
          ))}
        </Row>
        <ButtonGroup>
          <Button  onClick={() => paging(-1)} disabled={!prev}>
            &lt;&lt;
          </Button>
          <Button  onClick={() => paging(1)} disabled={!next}>
            &gt;&gt;
          </Button>
        </ButtonGroup>
      </Container>
    </div>
  );
}
function ProductForm(props) {
  const history = useHistory()
  const user = useSelector(state=>state.user.user)
  const [quantity, setQuantity]=useState([])
  

  let path=`/categories/${props.product.id}/products/`
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
          // cookies.save("access_token". rp.data.access_token)
          alert("Thêm sản phẩm thành công")
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
          {/* <Link onClick={() => addtocart(props.product.id)} class="btn btn-primary">Add to Cart</Link>' */}
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