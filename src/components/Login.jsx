import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { NavLink, Navigate } from "react-router-dom";
import axios from "axios";

class Login extends Component {
  state = {
    email: "",
    password: "",
    message: "",
  };
  formSubmit = (e)=>{
    e.preventDefault();
    const data={
      email:this.state.email,
      password:this.state.password,
    }

    axios.post('http://127.0.0.1:8000/api/login', data
    )
    .then( (response) => {
      localStorage.setItem('token', response.data.token);
      this.setState({
        loggedIn:true
      })
    })
    .catch( (error)=> {
      console.log(error);
    });
  }

  render() {
    let bgStyle = {
      backgroundColor: 	"#404040",
      width: "500px"
    };
   
    //After log-in Redirect to Profile

    if(this.state.loggedIn){
      return <Navigate to={'/profile'}/>
    }

    return (
      <div
        className="mx-auto  py-4 my-4 rounded-2"
        style={ bgStyle }

      >
        <div className="">
          <div className="m-4">
            <Form onSubmit={this.formSubmit}>
              <h1 className="text-light">Login</h1>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-light">Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  required
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="text-light">Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
              <div className="text-light">
                Forget Password{" "}
                <NavLink to="/forget" className="text-decoration-none">
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

export default Login;
