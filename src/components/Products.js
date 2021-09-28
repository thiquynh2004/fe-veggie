import React, { useEffect, useState } from "react";
import {useLocation, useParams} from 'react-router'
import { Row, Container, ButtonGroup, Button } from "react-bootstrap";
import Apis, { endpoints } from "../configs/Apis";
import MyCard from "../layouts/MyCard";
import "../style/Product.css";

export default function Products() {
  const [products, setProducts] = useState([]);
  const{categoryId} = useParams()
  const location = useLocation()
  const [prev, setPrevious] = useState(false);
  const [next, setNext] = useState(false);
  const [page, setPage] = useState(1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    let loadedProducts = async () => {
      let query = location.search
      if (query ==="")
        query = `?page = ${page}`
      else
      query += `&page =${page}`

      try {
        // let res = await Apis.get(endpoints["products"]);
        let res = await Apis.get(`${endpoints["products"]}${query}${categoryId}`)
        setProducts(res.data.results);

        setNext(res.data.next !== null);
        setPrevious(res.data.previous !== null);
      } catch (error) {
        console.error(error);
      }
    };
    loadedProducts()
  }, [location.search, page])

  const paging = (inc) => {
    setPage(page + inc)
  }

  return (
    <div className="products" style={{ marginTop: "80px" }}>
      {/* <Slider></Slider> */}
      hahahaha...
      <Container>
        <Row>
          {products.map(p => (
            <MyCard product={p} />
          ))}
        </Row>
        <ButtonGroup>
          <Button onClick={() => paging(-1)} disabled={!prev}>
            &lt;&lt;
          </Button>
          <Button onClick={() => paging(1)} disabled={!next}>
            &gt;&gt;
          </Button>
        </ButtonGroup>
      </Container>
    </div>
  );
}
