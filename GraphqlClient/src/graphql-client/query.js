import { gql } from "@apollo/client";

const getBooks = gql`
  query getBooksQuery {
    books {
      id
      name
      genre
      author {
        id
        name
      }
    }
  }
`;

const getSingleBook = gql`
  query getBooksQuery($id: ID!) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          id
          name
        }
      }
    }
  }
`;

const getAuthors = gql`
  query getAuthorQuery {
    authors {
      id
      name
    }
  }
`;

export { getBooks, getSingleBook, getAuthors };
