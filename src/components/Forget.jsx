import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";

class Forget extends Component {
  render() {
    return (
      <div
        className="mx-auto bg-dark py-4 my-4 rounded-2"
        style={{ width: "500px" }}
      >
        <div className="">
          <div className="m-4">
            <Form>
              <h1 className="text-light">Reset Password</h1>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-light">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
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

export default Forget;
