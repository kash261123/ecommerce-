import React, { useState } from "react";
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
  CardText,
} from "reactstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conirmPassword, setConfirmPassword] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [user, setUser] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      const newUser = {
        email,
        password,
        conirmPassword,
        phoneNumber,
        birthdate,
      };
      setUser([...user, newUser]);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setBirthdate("");
      setPhoneNumber("");
      return toast("SignUp Succesfully!!", { type: "success" });
    } else {
      return toast("Please Enter Details", { type: "error" });
    }
  };
  return (
    <Container className="text-center">
      <Row>
        <Col lg={6} className="offset-lg-3 mt-5">
          <Card>
            <Form>
              <CardHeader className="text-info">SignUp here</CardHeader>
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      placeholder="enter password here"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="confirm password" sm={3}>
                    Confirm Password
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="password"
                      name="confirmpassword"
                      id="confirmpassword"
                      placeholder="enter password again"
                      value={conirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="phone number" sm={3}>
                    Phone Number
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="text"
                      name="phonenumber"
                      id="phonenumber"
                      placeholder="enter your phone number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="date of birth" sm={3}>
                    Birthdate
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="date"
                      name="birthdate"
                      id="birthdate"
                      placeholder="enter your birthdate"
                      value={birthdate}
                      onChange={(e) => setBirthdate(e.target.value)}
                    />
                  </Col>
                </FormGroup>
              </CardBody>
              <CardFooter>
                <Button onClick={handleSubmit} block color="primary">
                  Sign Up
                </Button>
              </CardFooter>
              <CardText className="text-center mt-2 text-warning">
                Existing User?Log In
              </CardText>
              <CardFooter>
                <Button tag={Link} to="/signin" color="warning" block>
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
export default Signup;
