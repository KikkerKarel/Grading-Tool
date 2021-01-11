import React, {Component} from 'react';
import {Button, Col, Form, Row} from 'react-bootstrap';

class AddAnswer extends Component {
    render() {
        return (
            <Form.Group className={"block-example border border-dark"}>
                <Row className={"row-padding"}>
                    <Col>
                        <Form.Label>Antwoord toevoegen (tekst)</Form.Label>
                        <Form.Control as="textarea" rows={3}/>
                    </Col>
                    <Col className={"button-col"}>
                        <br/>
                        <Button className="white-text" variant="danger">Annuleren</Button>
                        <br/>
                        <Button className="white-text" variant="success">Aanpassing/aanpassingen doorvoeren</Button>
                    </Col>
                    <br/>
                </Row>
            </Form.Group>
        );
    }
}

export default AddAnswer;