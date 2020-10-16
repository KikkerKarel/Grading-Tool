import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class AnswerComponent extends Component
{
    render() {
        return (
            <>
                <div className="Answer">
                    <h1 className="AnswerHeader">Antwoord (tekst)</h1>
                    <Form.Control type="text" placeholder="readonly" className="AnswerText"/>
                </div>
                <div className="CorrectAnswer">
                    <h2 className="CorrectAnswerHeader">Antwoord toevoegen (tekst)</h2>
                    <Form.Control type="text" className="CorrectAnswerText"/>
                </div>
            </>);
    }
}

export default AnswerComponent;

