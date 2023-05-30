import { gql } from "@apollo/client";

const addSingleProduct = gql`
  mutation addProductMutation($name: String, $image: String, $brandId: ID!) {
    createProduct(name: $name, image: $image, brandId: $brandId) {
      id
      name
    }
  }
`;

const addSingleBrand = gql`
  mutation addBrandMutation($name: String) {
    createBrand(name: $name) {
      id
      name
    }
  }
`;

export { addSingleBrand, addSingleProduct };
