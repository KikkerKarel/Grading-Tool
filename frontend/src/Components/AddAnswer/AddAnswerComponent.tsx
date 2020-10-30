import React, { Component } from 'react';
import {Button, Form, Col, Row} from 'react-bootstrap';

class AddAnswerComponent extends Component
{
    render() {
        return (
            <>
                <Form.Group>
                    <Row className={"Mt2p"}>
                        <Col>
                            <Form.Label className="AnswerHeader">Antwoord toevoegen (tekst)</Form.Label>
                            <Form.Control as="textarea" rows={3} className="AddAnswerText"/>
                        </Col>
                        <Col className={"ButtonCol"}>
                            <Button className="AddButton" variant="danger">Annuleren</Button>
                            <br/>
                            <Button className="AddButton" variant="success">Aanpassing/aanpassingen doorvoeren</Button>
                        </Col>
                    </Row>
                </Form.Group>
            </>);
    }
}

export default AddAnswerComponent;