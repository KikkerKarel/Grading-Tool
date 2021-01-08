import * as React from "react";
import {Component} from "react";
import {Button, Card} from "react-bootstrap";

interface props {
    title: string,
    text: string,
    image: string,
    link: string
}

class QuickCard extends Component<props>{
    render() {
        return (
            <Card className="quick-cards" style={{ width: '18rem' }}>
                <Card.Img src={this.props.image} />
                <Card.Body>
                    <Card.Title className="title">{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.text}
                    </Card.Text>
                    <Button className="btn--medium btn btn-primary" variant="primary" href={this.props.link} block>Gaan</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default QuickCard