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
          <Container className="shadow-lg">
            <Card
              body
              className="text-center bg-secondary text-light shadow-lg"
            >
              <CardTitle tag="h1" className="display-3 fw-bold">
                welcome to GUSWANDI academy
              </CardTitle>
              <CardText className="lead fw-normal">
                Learn and grow with our top-notch courses and expert
                instructors.
              </CardText>
              <Button className="btn bg-secondary-subtle btn-lg fw-semibold text-black">
                Start Learning
              </Button>
            </Card>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default JumbotronComponent;
