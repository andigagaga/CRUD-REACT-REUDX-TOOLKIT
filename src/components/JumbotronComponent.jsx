import React from "react";
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";

const JumbotronComponent = () => {
  return (
    <div className="my-4">
      <Row>
        <Col>
          <Container>
            <Card body>
              <CardTitle tag="h1">Guswandi Academy</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button className="bg-primary w-25">! Learn more</Button>
            </Card>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default JumbotronComponent;
