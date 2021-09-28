import React, { useEffect, useState } from 'react'
import Apis, { endpoints } from '../configs/Apis'
import { Container } from 'react-bootstrap'

export default function Home() {
    // eslint-disable-next-line no-unused-vars
    let [products, setProducts] = useState([])
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        try {
            let res = await Apis.get(endpoints["products"])
            setProducts(res.data.results)

        }
        catch (error) {
            console.error(error)

        }
    })
    return (
        <div className="home">
            <Container>

            </Container>
        </div>
    )
}
