import React from "react";
import { Container } from "reactstrap";
import { ButtonBackComponent } from "../components/index";
import FormEditComponent from "../components/FormEditComponent";

export default function EditUserPages() {
  return (
    <Container className="my-4 vh-100">
      <div className="d-flex align-items-center gap-lg-5">
        <ButtonBackComponent />
        <h1 className="text-center">Edit users</h1>
      </div>
      <FormEditComponent />
    </Container>
  );
}
