import { gql } from "@apollo/client";

const getProducts = gql`
  query getProductsQuery {
    products {
      id
      name
      image
      brand {
        id
        name
      }
    }
  }
`;

const getProduct = gql`
  query getProductQuery($id: ID!) {
    product(id: $id) {
      id
      name
      image
      brand {
        name
        products {
          name
        }
      }
    }
  }
`;

const getBrands = gql`
  query getBrandsQuery {
    brands {
      id
      name
    }
  }
`;

export { getProducts, getProduct, getBrands };
