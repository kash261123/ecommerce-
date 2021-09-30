import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Container,
  Form,
  CardHeader,
  Button,
  CardFooter,
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const Signin = () => {
  const handleSubmit = () => {
    return toast("Log In Succesfully", { type: "success" });
  };
  return (
    <Container className="text-center">
      <Row>
        <Col lg={6} className="offset-lg-3 mt-5">
          <Card>
            <Form>
              <CardHeader className="text-info">SignIn here</CardHeader>
              <CardBody>
                <FormGroup row>
                  <Label for="email" sm={3}>
                    Email
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="enter your email"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="password" sm={3}>
                    Password
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="enter your password"
                    />
                  </Col>
                </FormGroup>
              </CardBody>
              <CardFooter>
                <Button
                  tag={Link}
                  to="/productpage"
                  onClick={handleSubmit}
                  block
                  color="warning"
                >
                  Sign In
                </Button>
              </CardFooter>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Signin;
