import { useQuery } from "@apollo/client";
import React, { Fragment } from "react";
import { Card } from "react-bootstrap";
import { getSingleBook } from "../graphql-client/query";

const Detail = ({ bookId }) => {
  const { loading, error, data } = useQuery(getSingleBook, {
    variables: {
      id: bookId,
    },
  });

  if (loading) return <p>loading book detail</p>;
  if (bookId !== null && error) return <p>loading book detail error</p>;
  const book = !loading && !error ? data.book : null;
  return (
    <Card bg="info" text="white" className="shadow">
      <Card.Body>
        {book === null ? (
          <Card.Text>Please select book</Card.Text>
        ) : (
          <Fragment>
            <Card.Title>{book.name}</Card.Title>
            <Card.Subtitle>ID: {book.id}</Card.Subtitle>
            <p>Tác giả: {book.author.name}</p>
            <p>All book</p>
            <ul>
              {book.author.books.map((book, index) => (
                <li key={index}>{book.name}</li>
              ))}
            </ul>
          </Fragment>
        )}
      </Card.Body>
    </Card>
  );
};

export default Detail;
