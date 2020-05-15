import React, { Component } from 'react';
import './submit.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ImageUploader from 'react-images-upload';

export default class Submit extends Component {
    constructor(props) {
        super(props);
        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }
    render() {
        return (

            <div className='submit-group'>
                <Form>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control as='textarea' rows='1' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Blog</Form.Label>
                        <Form.Control as='textarea' rows='5' />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Image (Optional)</Form.Label>
                        <ImageUploader
                            withIcon={true}
                            buttonText='Choose images'
                            onChange={this.onDrop}
                            imgExtension={['.jpg', '.gif', '.png']}
                            maxFileSize={5242880}
                        />
                    </Form.Group>
                </Form>
                <Button type='submit'>Submit</Button>
            </div>

        )
    };
}