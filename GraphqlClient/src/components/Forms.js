import React from "react";
import { Row } from "react-bootstrap";

import ProductForm from "./ProductForm";
import BrandForm from "./BrandForm";

const Forms = () => {
  return (
    <Row>
      <ProductForm />
      <BrandForm />
    </Row>
  );
};

export default Forms;
