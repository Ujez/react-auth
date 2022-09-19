
import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";

 class Profile extends Component {
  render() {
    return (
      <div className="mx-auto bg-dark py-4 my-4 rounded-2" style={{ width: "500px" }}>
        <div className="">
       
          <div className="m-4">
            <Form>
            <h1 className="text-light" >User Profile</h1>
              <Form.Group className="mb-3" controlId="formBasicEmail">
               
                <Form.Control type="text" placeholder="Name" />
            
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
              
                <Form.Control type="text" placeholder="Email" />
              </Form.Group>

          
          
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile