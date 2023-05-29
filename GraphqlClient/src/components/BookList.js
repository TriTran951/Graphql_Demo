import React, { useState } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import Detail from "./Detail.js";
import { useQuery } from "@apollo/client";
import { getBooks } from "../graphql-client/query.js";

const cardData = [
  {
    title: "Card 1",
    text: "Some text for card 1",
    image:
      "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_18.png",
  },
  {
    title: "Card 1",
    text: "Some text for card 1",
    image:
      "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_18.png",
  },
  {
    title: "Card 1",
    text: "Some text for card 1",
    image:
      "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_18.png",
  },
  {
    title: "Card 1",
    text: "Some text for card 1",
    image:
      "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_18.png",
  },
  {
    title: "Card 1",
    text: "Some text for card 1",
    image:
      "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_18.png",
  },
  {
    title: "Card 1",
    text: "Some text for card 1",
    image:
      "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_18.png",
  },
];

const BookList = () => {
  const [bookSelected, setbookSelected] = useState(null);

  const { loading, error, data } = useQuery(getBooks);

  if (loading) return <p>loading</p>;
  if (error) return <p>Loading error</p>;

  return (
    <Container>
      <Row className="py-3 mt-3">
        <Col xs={12} lg={8}>
          <Row>
            {data.books.map((card, index) => (
              <Col key={index} xs={6} md={3}>
                <Card
                  className="mb-4"
                  onClick={setbookSelected.bind(this, card.id)}
                >
                  <div className="mt-8">
                    <Card.Img
                      variant="top"
                      src={
                        "https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_18.png"
                      }
                    />
                  </div>
                  <Card.Body>
                    <Card.Title className="text-center">{card.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        <Col>
          <Detail bookId={bookSelected} />
        </Col>
      </Row>
    </Container>
  );
};

export default BookList;
