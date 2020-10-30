import React, { Component } from 'react';
import {Button, Form, Col, Row} from 'react-bootstrap';

class AddAnswerComponent extends Component
{
    render() {
        return (
            <>
                <Form.Group className={"block-example border border-dark"}>
                    <Row className={"RowPadding"}>
                        <Col>
                            <Form.Label>Antwoord toevoegen (tekst)</Form.Label>
                            <Form.Control as="textarea" rows={3}/>
                        </Col>
                        <Col className={"ButtonCol"}>
                            <br/>
                            <Button className="WhiteText" variant="danger">Annuleren</Button>
                            <br/>
                            <Button className="WhiteText" variant="success">Aanpassing/aanpassingen doorvoeren</Button>
                        </Col>
                        <br/>
                    </Row>
                </Form.Group>
            </>
        );
    }
}

export default AddAnswerComponent;