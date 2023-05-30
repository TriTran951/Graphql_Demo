import React, { useState } from "react";
import { Col, Form, Button } from "react-bootstrap";
import { useQuery, useMutation } from "@apollo/client";
import { addSingleProduct } from "../graphql-client/mutation";
import { getProducts, getBrands } from "../graphql-client/query";

const ProductForm = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    image: "",
    brandId: "",
  });

  const onInputChange = (event) => {
    setNewProduct({
      ...newProduct,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addBook({
      variables: {
        name: newProduct.name,
        image: newProduct.image,
        brandId: newProduct.brandId,
      },
      refetchQueries: [{ query: getProducts }],
    });
    setNewProduct({
      name: "",
      image: "",
      brandId: "",
    });
  };

  const { loading, error, data } = useQuery(getBrands);

  const [addBook, dataMutation] = useMutation(addSingleProduct);

  return (
    <Col className="lg={6}">
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="name"
            onChange={onInputChange}
            value={newProduct.name}
            name="name"
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="image link"
            name="image"
            onChange={onInputChange}
            value={newProduct.image}
          ></Form.Control>
        </Form.Group>

        {loading ? (
          <p>loading</p>
        ) : (
          <Form.Group>
            <Form.Control
              as="select"
              name="brandId"
              onChange={onInputChange}
              value={newProduct.brandId}
            >
              <option disabled value="">
                Select brand
              </option>
              {data.brands.map((brand) => (
                <option key={brand.id} value={brand.id}>
                  {brand.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        )}

        <Button className="float-end" variant="info" type="submit">
          Add product
        </Button>
      </Form>
    </Col>
  );
};

export default ProductForm;
