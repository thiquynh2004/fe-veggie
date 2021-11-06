import React, { useEffect, useState } from "react";
import "../style/cart.css";
import { Table, Container, Button, Input} from "react-bootstrap";
import Apis, { endpoints } from "../configs/Apis";
import cookies from "react-cookies"
import {useDispatch, useSelector} from 'react-redux'
import { AddCartIsCompleted, AddCartUnCompleted } from "../ActionCreators/CartCreator";
import { useHistory, useParams } from "react-router";


export default function Cart() {
  const[cart, setCarts] = useState()
  const [listProduct, setListProducts] = useState([])
  const dispatch = useDispatch()
  const history = useHistory()
  const { cartitemId } = useParams();
  const [updateQuantity,setUpdateQuantity] = useState([]);



  useEffect(() => {
    let loadedCart = async () => {
      try {
        let res = await Apis.get(endpoints["carts"], {
          headers: {
            Authorization: `Bearer ${cookies.load("access_token")}`
          }
        })
        setCarts(res.data)
        setListProducts(res.data.cart_items)
        // setListProducts(res.data.cart_items[0].products)
        // setListProducts(res.data.cart_items[0].products)
        console.log(cart)
        const all_data =[]
        // eslint-disable-next-line array-callback-return
        res?.data.cart_items[0].products.map(data => {
          if (data.is_completed) {
            all_data.push(data)
            dispatch(AddCartIsCompleted())
          }
          else{
            dispatch(AddCartUnCompleted())
          }
        })
      } catch (error) {
        console.error(error);
      }
    }
    loadedCart();
  }, [])
  const DeleteCart = (event) => {
    event.preventDefault();
    let deleteCart = async () => {
      try {
        let res = await Apis.post(endpoints["delete-cart-item"](cartitemId), {
          headers: {
            Authorization: `Bearer ${cookies.load("access_token")}`
          }
        }).then((res) => {

        })
        alert("Đã xóa sản phẩm")
        history.push('/')
        
      } 
      catch (error) {
        console.error(error)
      }
    }
  }
// Cập nhật số lượng của cart_items
// const UpdateQuantity = async (event)=> {
//   event.preventDefault()
//   try {
//     let updateCart = await Apis.post(endpoints["update-cart-item"],{
//       "quantity":updateQuantity
//     },{
//       headers: {
//         Authorization: `Bearer ${cookies.load("access_token")}`
//       }
//     })
//   } catch (error) {
//     console.error(error)
//   }
  
// }

  

  return (
    
    <div className="cart-container">
      <Container>
      <h4 style={{textAlign: 'center', margin:'32px 4px', fontWeight:'bold'}}>Giỏ hàng của bạn</h4>
        <Table striped bordered hover size="sm">
          
          <thead>
            <tr>
              <th>STT</th>
              <th>Sản phẩm</th>
              <th>Giá(/1kg)</th>
              <th>Discount (%)</th>
              <th>Số lượng</th>
              <th>Tổng</th>
              <th style={{textAlign:'center'}}></th>
            </tr>
          </thead>
          <tbody>
          {listProduct.map((data, i)=>(
              <tr key = {i}>
              <td>{i+1}</td>
              <td>{data.products[0].name}</td>
              <td>{data.products[0].price}</td>
              <td>{data.products[0].discount}%</td>
              <td><input type="number" 
                          // value={updateQuantity}
                          // onChange={(event)=>setUpdateQuantity(event.target.value)}
                          value={data.quantity} 
                          data-type="minus"></input></td>
              <td>{data.quantity * data.price - data.quantity * data.products[0].price * data.products[0].discount * 0.01}</td>
              <td>
              <button className= "update-cart btn" 
                      style={{color: '#fff', backgroundColor: '#0a58ca',borderColor: '#0a58ca', marginRight:'4px'}}
                      // onClick={()=>UpdateQuantity}
              >Cập nhật</button>
                <button className= "btn btn-danger" onClick={DeleteCart}>Xóa</button>
              
              </td>
            </tr>
            ))
            }
           
          </tbody>
        </Table>
        <div>
        <div className="cart-total" style={{}}><h5>Tổng cộng: {listProduct?.total} </h5></div>
        <div className="check-out"><Button>Đặt hàng</Button></div>
        
        
        
        </div>
        
      </Container>
    </div>
  );
}
