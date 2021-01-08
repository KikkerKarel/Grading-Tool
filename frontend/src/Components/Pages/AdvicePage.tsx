import * as React from "react";
import {Component} from "react";
import axios from "axios";
import HeaderNavbar from "../HeaderNavbar/HeaderNavbar";
import Footer from "../Footer/Footer";
import {Card} from "react-bootstrap";

class AdvicePage extends Component {
    state = {
        suggestedScore: 0,
        matchingWordPositions: [],
        examItem: {
            studentTextAnswer: "",
            question: {
                text: ""
            }
        },
        feedback: []
    };

    async componentDidMount() {
        await axios.get("api/grade/advice/" + 2 + "/" + 5).then(response =>
            this.setState({
                suggestedScore: response.data.suggestedScore,
                matchingWordPositions: response.data.matchingWordPositions,
                examItem: response.data.examItem,
                feedback: response.data.feedback
            })
        ).catch(err => console.log(err));
        console.log(this.state);
    }

    render() {
        if (this.state.suggestedScore === -1)
            return (<div>Invalid parameters</div>);

        let words = this.state.examItem.studentTextAnswer.split(" ");
        let positions: any = this.state.matchingWordPositions;

        for (let i = 0; i < words.length; i++) {
            if (positions.includes(i)) {
                words[i] = "<mark>" + words[i] + "</mark>";
            }
        }

        return (
            <div className="page-container">
                <div className="content-wrap ">
                    <HeaderNavbar/>
                </div>
                <div className="content-wrap d-flex justify-content-center">
                    <section className="content-container">
                        <Card style={{width: '18rem'}}>
                            <Card.Body>
                                <Card.Text>
                                    <h3 className="text-center mt-3">{this.state.examItem.question.text}</h3>

                                    <h4 className="text-center mt-3">Correct antwoord:</h4>
                                    <p>{this.state.examItem.question.text}</p>

                                    <h4 className="text-center mt-3">Gegeven antwoord:</h4>
                                    <div dangerouslySetInnerHTML={{__html: words.join(" ")}}/>
                                </Card.Text>
                                <Card.Title>Score: {this.state.suggestedScore} out of 5</Card.Title>
                            </Card.Body>
                        </Card>
                    </section>
                </div>
                <div className="footer">
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default AdvicePage