import {useEffect, useState} from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';

// import React from 'react'

const HomeScreen = () => {
   const [products, setProudcts] = useState({});

   useEffect(() => {
    const fetchProducts = async () => {
    const { data } = await axios.get('/api/products')
    setProudcts(data);
   };
   
   fetchProducts();
  }, []);


  return (
    <>
       <h1>Latest Products</h1>
      <Row>
         {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
            </Col>
         ))}

      </Row>
    </>
  )
}

export default HomeScreen