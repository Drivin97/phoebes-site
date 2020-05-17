import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './login.css'

export default class Login extends Component {
    render() {
        return (
            <div className='login-form'>
                <Form>
                    <Form.Group contorlId='formBasicEmail'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' placeholder='Enter email' />
                    </Form.Group>
                    <Form.Group controlId='formBasicPassword'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder='*******' />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}