import React, { useEffect, useState } from "react";
import { Row, Container } from "react-bootstrap";
import Apis, { endpoints } from "../configs/Apis";
import MyCard from "../layouts/MyCard";
// import './Layout.css'

<style type="text/css">
{`
.col-md-3.col-12 {
    flex: 0 0 33.33%;
    max-width: 33.33%;
}

`}
</style>

export default function Products() {
    // eslint-disable-next-line no-unused-vars
    let [products, setProducts] = useState([])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect (async () => {
        try{
            let res = await Apis.get(endpoints["products"])
        setProducts(res.data.results)

        }
        catch(error) {
            console.error(error)

        }
    
    }, [])
  return (
    <div className="products" style={{marginTop:'80px'}}>
        hahahaha...
        <Container>
        <Row >
            {products.map(p => <MyCard product={p}/>)}
        </Row>
        </Container>
        
      
            
    </div>
  );
}

