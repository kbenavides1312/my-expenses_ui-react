import React, { Component } from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import { Eye, EyeSlashFill } from "react-bootstrap-icons";
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import SignupModal from './SignupModal';

class Login extends Component {
    
    state = {
        showSignUpModal: false,
        loginData: {
            email: '',
            password: '',
        },
      };
    
      handleShowSignUpModal = () => {
        this.setState({ showSignUpModal: true });
      };
    
      handleCloseSignUpModal = () => {
        this.setState({ showSignUpModal: false });
      };
    
    
      handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            loginData: {
            ...prevState.signUpData,
            [name]: value,
          },
        }));
      };
    

  render() {
    return (
      <Container>
        <Row className="row justify-content-center align-items-center">
          <Col className='col-sm-10 col-md-8 col-lg-6 col-xl-5'>
            <Card>
              <Card.Body>
                <Card.Title>Login</Card.Title>
                <Form className="ng-untouched ng-pristine ng-valid">
                  <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      name="email"
                      value={this.state.username}
                      onChange={this.handleInputChange}
                      placeholder="Enter your email"
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleInputChange}
                      placeholder="Enter your password"
                    />
                  </Form.Group>
                  <br/>
                  <Button type='submit' className="w-100 btn btn-primary btn-block" onClick={this.handleLogin}>
                            Log In
                        </Button>
                  <hr/>
                  <Row className="text-center">
                <p className="mb-0">Don't have an account?</p>
                <a href="#" onClick={this.handleShowSignUpModal}>
                    Sign Up
                </a>
                    </Row>
                    <hr/>
                    <SignupModal 
                        visible = {this.state.showSignUpModal}
                        handleCloseModal = {this.handleCloseSignUpModal}
                    />
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
