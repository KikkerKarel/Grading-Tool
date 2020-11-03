import React, { Component } from 'react';
import {Button, Form} from 'react-bootstrap';
import './Answer.css';

class AnswerComponent extends Component
{
    render() {
        return (
            <>
                <Form.Group className="Answer">
                    <Form.Label className="AnswerHeader">Antwoord (tekst)</Form.Label>
                    <Form.Control as="textarea" rows={3} cols={30} readOnly={true} placeholder="berlijn" className="AnswerText"/>
                </Form.Group>
                <Form.Group className="Answer">
                    <Form.Label className="CorrectAnswerHeader">Goed gekeurde antwoorden (tekst)</Form.Label>
                    <Form.Control as="textarea" rows={3} cols={30} placeholder="berlijn, Berlijn" className="CorrectAnswerText" readOnly={true} />
                </Form.Group>
                <div className="buttondiv">
                    <Button className="Button" variant="danger">Keur fout</Button>
                    <Button className="Button" variant="success">Keur goed</Button>
                    <Button className="Button" variant="warning">Wijzigen</Button>
                </div>
            </>);
    }
}

export default AnswerComponent;

