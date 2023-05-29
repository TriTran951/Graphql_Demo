import React, { useState } from "react";
import { Col, Form, Button } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { getAuthors } from "../graphql-client/query";

import { addSingleAuthor } from "../graphql-client/mutation";

const AuthorForm = () => {
  const [newAuthor, setNewAuthor] = useState({
    name: "",
    age: "",
  });

  const onInputChange = (event) => {
    setNewAuthor({
      ...newAuthor,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addAuthor({
      variables: {
        name: newAuthor.name,
        age: newAuthor.genre,
      },
      refetchQueries: [{ query: getAuthors }],
    });
    setNewAuthor({
      name: "",
      age: "",
    });
  };

  const [addAuthor, dataMutation] = useMutation(addSingleAuthor);

  return (
    <Col className="lg={6}">
      <Form onSubmit={onSubmit}>
        <Form.Group className="invisible">
          <Form.Control />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="name"
            onChange={onInputChange}
            value={newAuthor.name}
            name="name"
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="number"
            onChange={onInputChange}
            value={newAuthor.age}
            name="age"
            placeholder="age"
          ></Form.Control>
        </Form.Group>
        <Button className="float-end" variant="info" type="submit">
          Add book
        </Button>
      </Form>
    </Col>
  );
};

export default AuthorForm;
