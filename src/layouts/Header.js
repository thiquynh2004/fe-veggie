/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Apis, { endpoints } from '../configs/Apis';
import '../style/Layout.css'
import { useDispatch, useSelector } from "react-redux";
import cookies from 'react-cookies';
import { logoutUser } from "../ActionCreators/UserCreators";

export default function Header() {
  let [categories, setCategories] = useState([])
  const user = useSelector(state => state.user.user)
  const dispatch = useDispatch()


  useEffect(async () => {
    try {
      let res = await Apis.get(endpoints["categories"])
      setCategories(res.data.results)
      
    } catch (error) {
      console.error(error)
      
    };
  }, [])

  const logout = (event) => {
      event.preventDefault()
      
      cookies.remove("access_token")
      cookies.remove("user")
      dispatch(logoutUser())
  }

  let path = <Nav.Link href="/login">Đăng Nhập</Nav.Link>
  if(user !=null && user !== undefined) {
    path = <>
    <Nav.Link href="/">{user.username}</Nav.Link>
    <Nav.Link onClick={logout}>Đăng xuất</Nav.Link>
    </>
  }

  return (
    <div className="header">
      <Container>
      <Navbar className="navbar">
     
        <Navbar.Brand href="/"><img src="/img/logo.png" alt="logo"/></Navbar.Brand>
        <NavDropdown title ="Menu" id="navbarScrollingDropdown" >
              {categories.map(c =><NavDropdown.Item href="/">{c.name}</NavDropdown.Item> )}
            </NavDropdown>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="/">Trang chủ</Nav.Link>
            <Nav.Link href="/">Liên Hệ</Nav.Link>
            <Nav.Link href="/products">Sản Phẩm</Nav.Link>
            </Nav>


          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-5"
              aria-label="Tìm Kiếm"
            />
            <Button >Search</Button>
          </Form>
          <FontAwesomeIcon icon={faShoppingCart} />
          
          <Nav>
            {path}
            <Nav.Link href="/signup">Đăng Kí</Nav.Link>
            
            
            </Nav>
            
        </Navbar.Collapse>
      </Navbar>
      </Container>
    </div>
  );
}
