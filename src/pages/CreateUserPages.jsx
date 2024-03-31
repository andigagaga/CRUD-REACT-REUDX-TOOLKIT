import React from "react";
import { Container } from "reactstrap";
import { ButtonBackComponent } from "../components/index";
import FormComponent from "../components/FormComponent";

export default function CreateUserPages() {
  return (
    <Container className="my-4 vh-100">
      <div className="d-flex align-items-center gap-lg-5">
        <ButtonBackComponent />
        <h1 className="text-center">Create users</h1>
      </div>
      <FormComponent />
    </Container>
  );
}
