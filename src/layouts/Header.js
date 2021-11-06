/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState,} from "react";
import {useHistory} from 'react-router'
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";
import Apis, { endpoints } from "../configs/Apis";
import "../style/Layout.css";
import {useDispatch, useSelector} from "react-redux"
import cookies from "react-cookies"
import { logoutUser } from "../ActionCreators/UserCreators";
import {Link} from "react-router-dom"


export default function Header() {
  const [categories, setCategories] = useState([]);
  const [q, setQ] = useState("")
  const history = useHistory()
  const user = useSelector(state =>state.user.user)
  const dispatch = useDispatch()
  const [cart_items, setCartItems] = useState([])
  
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
  const search = (event) => {
    event.preventDefault();
    history.push(`/products?q=${q}`)
  };

  const logout = (event) => {
    event.preventDefault()

    
    cookies.remove("access_token")
    cookies.remove("user")
    dispatch(logoutUser())
    history.push('/')
  }
  let path = <Nav.Link href="/login">Đăng nhập</Nav.Link>
  if (user !== null && user !== undefined) {
    path = <>
    <Link to ="/carts">
              <FontAwesomeIcon
                style={{ padding: "2px 2px", fontSize: "24px"}}
                icon={faShoppingCart}
              />Cart
            </Link>
    <Nav.Link href="/profile">{user.username}</Nav.Link>
    <Nav.Link onClick={logout}>Đăng xuất</Nav.Link>
    
    </>
  }
    

  return (
    <div className="header">
      <Container>
        <Navbar className="navbar">
          <Navbar.Brand href="/">
            <img src="/img/logo.png" alt="logo" />
          </Navbar.Brand>
          {/* <NavDropdown title="Menu" id="navbarScrollingDropdown">
            {categories.map(c => {
              let path = `/?category_id=${c.id}`;
              return <NavDropdown.Item href={path}>{c.name}</NavDropdown.Item>;
            })}
          </NavDropdown> */}
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link href="/">Trang chủ</Nav.Link>
              <Nav.Link href="/">Liên Hệ</Nav.Link>
              <Nav.Link href="/products">Sản Phẩm</Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={search}>
              <FormControl
                type="search"
                placeholder="Nhập sản phẩm"
                className="mr-5"
                aria-label="Tìm Kiếm"
                value={q}
                onChange= {(event) => setQ(event.target.value)}
              />
              <Button type="submit">
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </Form>
            {/* <Link to ="/carts">
              <FontAwesomeIcon
                style={{ padding: "2px 2px", fontSize: "24px"}}
                icon={faShoppingCart}
              />
            </Link> */}

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
