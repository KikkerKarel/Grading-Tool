import React, {Component} from 'react';
import axios from 'axios'
import {Col, Form} from 'react-bootstrap';
import './Answer.css';
import UserScore from "../Score/UserScore";
import InfoBox from "../InfoBox/InfoBox";

interface props {
    questionId?: number,
    score?: number,
    suggestedScore?: number,
    matchingWordPositions?: never[],
    examItem: {
        examId: number,
        studentTextAnswer: string,
        question: {
            text: string,
            correctAnswer: {
                text: string
            }
        }
    },
    feedback: never[]
}

class Answer extends Component<props> {
    state = {
        score: this.props.score,
        suggestedScore: this.props.suggestedScore,
        matchingWordPositions: this.props.matchingWordPositions,
        examItem: this.props.examItem,
        feedback: this.props.feedback
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        if (prevProps.questionId !== this.props.questionId) {
            axios.get(`api/grade/advice/${this.props.examItem.examId}/${this.props.questionId}/`).then(response => {
                this.setState({
                    suggestedScore: response.data.suggestedScore,
                    matchingWordPositions: response.data.matchingWordPositions,
                    examItem: response.data.examItem,
                    feedback: response.data.feedback,
                })
            })
        }
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
            <>
                <Col md={"auto"}>

                    <div>

                        <h4 className={"text-center scroll-y"}>{this.state.examItem.question.text}</h4>

                        <Form.Group>
                            <Form.Label className="answer-header">Door student gegeven antwoord/antwoorden (tekst)</Form.Label>
                            <div className={"custom-box"} dangerouslySetInnerHTML={{__html: words.join(" ")}}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="answer-header">Goed gekeurde antwoord/antwoorden (tekst)</Form.Label>
                            <div className={"custom-box"}
                                 dangerouslySetInnerHTML={{__html: this.state.examItem.question.correctAnswer.text}}/>
                        </Form.Group>
                    </div>

                    <UserScore examItem={this.state.examItem}
                               questionId={this.props.questionId} examId={this.props.examItem.examId}
                               systemRating={this.state.suggestedScore}/>
                </Col>
            </>
        );
    }
}

export default Answer;