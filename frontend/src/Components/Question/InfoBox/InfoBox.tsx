import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import "./InfoBox.css";

interface props {
    brokenRules: string[];
}

class InfoBox extends Component<props> {
    render() {
        let rules;
        rules = this.props.brokenRules.map((rule) => {
            return <li>{rule}</li>;
        });

        return (
            <Container className="box spacing special-styling">
                <Row>
                    <Col>
                        <h2 className="title">Infobox</h2>
                        <ul className="list">{rules}</ul>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default InfoBox;