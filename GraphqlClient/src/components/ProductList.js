import React, { useState } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import ProductDetail from "./ProductDetail.js";
import { useQuery } from "@apollo/client";
import { getProducts } from "../graphql-client/query.js";

const ProductList = () => {
  const [productSelected, setProductSelected] = useState(null);

  const { loading, error, data } = useQuery(getProducts);

  if (loading) return <p>loading</p>;
  if (error) return <p>Loading error</p>;

  return (
    <Container>
      <Row className="py-3 mt-3">
        <Col xs={12} lg={8}>
          <Row>
            {data.products.map((product, index) => (
              <Col key={index} xs={6} md={3}>
                <Card
                  className="mb-4"
                  onClick={setProductSelected.bind(this, product.id)}
                >
                  <div className="mt-8">
                    <Card.Img variant="top" src={product.image} />
                  </div>
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        <Col>
          <ProductDetail ProductId={productSelected} />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductList;
