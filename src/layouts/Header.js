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

export default function Header() {
  const [categories, setCategories] = useState([]);
  const [q, setQ] = useState("")
  const history = useHistory()

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

  return (
    <div className="header">
      <Container>
        <Navbar className="navbar">
          <Navbar.Brand href="/">
            <img src="/img/logo.png" alt="logo" />
          </Navbar.Brand>
          <NavDropdown title="Menu" id="navbarScrollingDropdown">
            {categories.map(c => {
              let path = `/?category_id=${c.id}`;
              return <NavDropdown.Item href={path}>{c.name}</NavDropdown.Item>;
            })}
          </NavDropdown>
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
            <Button type="submit">
              <FontAwesomeIcon
                style={{ padding: "2px 2px" }}
                icon={faShoppingCart}
              />
            </Button>

            <Nav>
              <Nav.Link href="/login">Đăng nhập</Nav.Link>
              <Nav.Link href="/signup">Đăng Kí</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}
