import React, { Component } from 'react';
import { Container, Button, Modal, Form } from 'react-bootstrap';
import { createUser } from '../Services/Users'

const _ = require("lodash");

class SignupModal extends Component {
  state = {
    signUpData: {
      name: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    errors:{
        name: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.validateInput(e)
    this.setState((prevState) => ({
      ...prevState,
      signUpData: {
        ...prevState.signUpData,
        [name]: value,
      },
    }));
  };

  validateInput = e => {
    let { name, value } = e.target;
    let error=""
    switch (name) {
      case "name":
        if (!value) {
          error = "Please enter name.";
        }
        break;
  
      case "password":
        if (!value) {
          error = "Please enter Password.";
        }
        break;
  
      case "confirmPassword":
        if (!value || value != this.state.signUpData.password) {
          error = "Passwords do not match.";
        }
        break;
  
      default:
        break;
    }
    this.setState((prevState) => ({
      ...prevState,
      errors: {
        ...prevState.errors,
        [name]: error,
      },
    }));
  }

  isSubmitDisabled = () => {
    return (Object.values(this.state.errors).filter( err => err!=="").length > 0) || (Object.values(this.state.signUpData).filter( field => field==="").length > 0)
  }

  handleSignUp = async () => {
    console.log(this.state.signUpData)
    // const response = await createUser({"name": "b","email": "b@mail"});
    const response = await createUser(_.omit(this.state.signUpData,'confirmPassword'));
  };

  render(props) {
    return (
        <>
        <Modal show={this.props.visible} onHide={this.props.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* Sign Up Form */}
            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={this.state.signUpData.name}
                  onChange={this.handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={this.state.signUpData.lastName}
                  onChange={this.handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={this.state.signUpData.email}
                  onChange={this.handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={this.state.signUpData.password}
                  onChange={this.handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={this.state.signUpData.confirmPassword}
                  onChange={this.handleInputChange}
                />
                {this.state.errors.confirmPassword && <span className='err'>{this.state.errors.confirmPassword}</span>}
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleCloseModal}>
              Cancel
            </Button>
            <Button variant="primary"
              disabled={this.isSubmitDisabled()}
              onClick={this.handleSignUp}
            >
              Sign Up
            </Button>
          </Modal.Footer>
        </Modal>
        </>
    );
  }
}

export default SignupModal;
