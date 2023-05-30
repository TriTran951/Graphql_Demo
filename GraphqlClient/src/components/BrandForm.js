import React, { useState } from "react";
import { Col, Form, Button } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { getBrands } from "../graphql-client/query";

import { addSingleBrand } from "../graphql-client/mutation";

const BrandForm = () => {
  const [newBrand, setNewBrand] = useState({
    name: "",
  });

  const onInputChange = (event) => {
    setNewBrand({
      ...newBrand,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addBrand({
      variables: {
        name: newBrand.name,
        age: newBrand.genre,
      },
      refetchQueries: [{ query: getBrands }],
    });
    setNewBrand({
      name: "",
      age: "",
    });
  };

  const [addBrand, dataMutation] = useMutation(addSingleBrand);

  return (
    <Col className="lg={6}">
      <Form onSubmit={onSubmit}>
        <Form.Group className="invisible">
          <Form.Control />
        </Form.Group>
        <Form.Group className="invisible">
          <Form.Control />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="name"
            onChange={onInputChange}
            value={newBrand.name}
            name="name"
          ></Form.Control>
        </Form.Group>
        <Button className="float-end" variant="info" type="submit">
          Add Brand
        </Button>
      </Form>
    </Col>
  );
};

export default BrandForm;
