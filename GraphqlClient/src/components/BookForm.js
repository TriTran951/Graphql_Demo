import React, { useState } from "react";
import { Col, Form, Button } from "react-bootstrap";
import { useQuery, useMutation } from "@apollo/client";
import { getAuthors, getBooks } from "../graphql-client/query";

import { addSingleBook } from "../graphql-client/mutation";

const BookForm = () => {
  const [newBook, setNewBook] = useState({
    name: "",
    genre: "",
    authorId: "",
  });

  const onInputChange = (event) => {
    setNewBook({
      ...newBook,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addBook({
      variables: {
        name: newBook.name,
        genre: newBook.genre,
        authorId: newBook.authorId,
      },
      refetchQueries: [{ query: getBooks }],
    });
    setNewBook({
      name: "",
      genre: "",
      authorId: "",
    });
  };

  const { loading, error, data } = useQuery(getAuthors);

  const [addBook, dataMutation] = useMutation(addSingleBook);

  return (
    <Col className="lg={6}">
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="name"
            onChange={onInputChange}
            value={newBook.name}
            name="name"
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="name"
            name="genre"
            onChange={onInputChange}
            value={newBook.genre}
          ></Form.Control>
        </Form.Group>

        {loading ? (
          <p>loading</p>
        ) : (
          <Form.Group>
            <Form.Control
              as="select"
              name="authorId"
              onChange={onInputChange}
              value={newBook.authorId}
            >
              <option disabled value="">
                Select author
              </option>
              {data.authors.map((author) => (
                <option key={author.id} value={author.id}>
                  {author.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        )}

        <Button className="float-end" variant="info" type="submit">
          Add book
        </Button>
      </Form>
    </Col>
  );
};

export default BookForm;
