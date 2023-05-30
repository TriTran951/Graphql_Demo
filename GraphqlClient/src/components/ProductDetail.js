import { useQuery } from "@apollo/client";
import React, { Fragment } from "react";
import { Card } from "react-bootstrap";
import { getProduct } from "../graphql-client/query";

const ProductDetail = ({ ProductId }) => {
  const { loading, error, data } = useQuery(getProduct, {
    variables: {
      id: ProductId,
    },
  });

  if (loading) return <p>loading detail</p>;
  if (ProductId !== null && error) return <p>loading detail error</p>;
  const product = !loading && !error ? data.product : null;
  console.log(data);
  return (
    <Card bg="info" text="white" className="shadow">
      <Card.Body>
        {product === null ? (
          <Card.Text>Please select product</Card.Text>
        ) : (
          <Fragment>
            <Card.Title>{product.name}</Card.Title>
            <Card.Subtitle>ID: {product.id}</Card.Subtitle>
            <p>Brand: {product.brand.name}</p>
            <p>All products</p>
            <ul>
              {product.brand.products.map((prd, index) => (
                <li key={index}>{prd.name}</li>
              ))}
            </ul>
          </Fragment>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductDetail;
