import React, { Component } from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import { Eye, EyeSlashFill } from "react-bootstrap-icons";
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import SignupModal from './SignupModal';
import { login } from '../Services/Users'

class Login extends Component {
    
    state = {
        showSignUpModal: false,
        loginData: {
            email: 'b@mail',
            password: '1234',
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
        console.log(name, value)
        console.log(this.state)
        this.setState((prevState) => ({
            loginData: {
            ...prevState.loginData,
            [name]: value,
          },
        }));
      };

      handleLogIn = async () => {
        console.log(this.state.loginData)
        // const response = await createUser({"name": "b","email": "b@mail"});
        const response = await login(this.state.loginData);
        console.log(response)
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
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={this.state.loginData.email}
                  onChange={this.handleInputChange}
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
                  <Button className="w-100 btn btn-primary btn-block" onClick={this.handleLogIn}>
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
