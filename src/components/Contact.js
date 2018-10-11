/**
 * Created by lilit on 2018-10-09.
 */

import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



class Contact extends React.Component {


    options= [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: {'C': '3PO'}, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }
        ];

    render() {
        return (
            <Form>
                <FormGroup row>
                    <Label for="exampleEmail" sm={2}>Email</Label>
                    <Col sm={10}>
                        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="examplePassword" sm={2}>Password</Label>
                    <Col sm={10}>
                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleSelect" sm={2}>Select</Label>
                    <Col sm={10}>
                        <Input type="select" name="select" id="exampleSelect"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleText" sm={2}>Text Area</Label>
                    <Col sm={10}>
                        <Input type="textarea" name="text" id="exampleText" />
                    </Col>
                </FormGroup>
            </Form>

    );
    }
}

export default Contact;