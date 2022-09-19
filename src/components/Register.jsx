
import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";

class Register extends Component {
  render() {
    return (
      <div className="mx-auto" style={{ width: "500px" }}>
         <div className="">
        <div className="m-4">
          <Form>
          <h1>Register</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button  variant="primary" type="submit">
              Submit
            </Button>
          <div>
          Aready Registered? <NavLink to="/login">Click Here</NavLink>
          </div>
          </Form>
        </div>
      </div>
      </div>
    );
  }
}

export default Register;
