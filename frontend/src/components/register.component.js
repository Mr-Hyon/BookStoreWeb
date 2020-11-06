import React, { Component } from 'react';
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";
import axios from 'axios';
import {toast} from 'react-toastify';

toast.configure();
export default class Register extends Component{

  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleRegister = e => {
    e.preventDefault();

    const username = this.state.username;
    const password = this.state.password;
    const props = this.props;

    if(username !== '' && password !=='' ){
      axios.post(
        'http://localhost:5000/users/register',
        {
          "username": username,
          "password": password
        }
      )
      .then(function (response){
        if(response.data.success){
          console.log(response.data.message);
          toast.success('Register Success! Congratulation',{autoClose: 2500});
          props.history.push('/');
        }
        else{
          toast.info('User already exists!',{autoClose: 2500});
          console.log(response.data.message);
        }
      })
      .catch(function (error){
        console.log(error);
      })
    }
    else{
      toast.warn('empty input not allowed',{autoClose: 2500});
    }
  }

  handleUserName = e =>{
    e.preventDefault();
    this.setState({
      username: e.target.value
    });
  }

  handlePassword = e =>{
    e.preventDefault();
    this.setState({
      password: e.target.value
    });
  }

    render(){
     return(
       <div className="wrapper">
         <div className="form-wrapper">
          <Form onSubmit={this.handleRegister}>
            <Form.Group controlId="formBasicEmail">
              <h3 className="text-center">BookStore Register</h3>
              <h5 className="text-center">Welcome to join us</h5>
              <Form.Label>Username</Form.Label>
              <Form.Control onChange={this.handleUserName} type="text" placeholder="Enter username" />
            </Form.Group>     
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={this.handlePassword} type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" block type="submit">
                CREATE ACCOUNT
            </Button>
            <Form.Text className="text-muted">
                Already have an account? <Link to="/">Login here!</Link>
            </Form.Text>
          </Form>
          </div>
        </div>
     );
    };
}