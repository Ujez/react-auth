import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";

class Register extends Component {
  render() {
    let bgStyle = {
      backgroundColor: "#404040",
      width: "500px"
    };
    

    return (
      <div
        className="mx-auto py-4 my-4 rounded-2"
        style={ bgStyle }
        
      >
        <div className="">
          <div className="m-4">
            <Form>
              <h1 className="text-light">Register</h1>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-light">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="text-light">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="text-light">Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
              <div className="text-light">
                Aready Registered?{" "}
                <NavLink to="/login" className="text-decoration-none">
                  Click Here
                </NavLink>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
