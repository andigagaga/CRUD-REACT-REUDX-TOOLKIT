import React from "react";
import { Container } from "reactstrap";
import TableComponent from "../components/TableComponent";
import JumbotronComponent from "../components/JumbotronComponent";

export default function HomeUserPage() {
  return (
    <Container>
      <JumbotronComponent />
      <TableComponent />
    </Container>
  );
}
