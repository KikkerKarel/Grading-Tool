import React, {Component} from 'react';
import axios from 'axios'
import {Form} from 'react-bootstrap';
import './Answer.css';
import UserScore from "../Score/UserScore";
import InfoBox from "../InfoBox/InfoBox";

interface props {
    questionId?: number,
    examId?: number
}

class Answer extends Component<props> {
    state = {
        score: null,
        suggestedScore: 0,
        matchingWordPositions: [],
        examItem: {
            examId: '',
            studentTextAnswer: "",
            question: {
                text: "",
                correctAnswer: {
                    text: ""
                }
            }
        },
        feedback: []
    }

    async componentDidMount() {
        axios.get(`../api/grade/advice/${this.props.examId}/${this.props.questionId}`).then(response => {
            this.setState({
                suggestedScore: response.data.suggestedScore,
                matchingWordPositions: response.data.matchingWordPositions,
                examItem: response.data.examItem,
                feedback: response.data.feedback,
                score: 0
            })
            axios.put(`../api/exams/${this.props.examId}/status/GRADING_IN_PROGRESS`).then(() => {
            });
        })
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        if (prevProps.questionId !== this.props.questionId) {
            axios.get(`api/grade/advice/${this.props.examId}/${this.props.questionId}/`).then(response => {
                this.setState({
                    suggestedScore: response.data.suggestedScore,
                    matchingWordPositions: response.data.matchingWordPositions,
                    examItem: response.data.examItem,
                    feedback: response.data.feedback,
                })
            })
        }
    }

    renderInfoBoxComponent() {
        return (
            <InfoBox brokenRules={this.state.feedback}/>
        )
    };

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
            <div className="answer">
                <h4 className={"text-center scroll-y"}>{this.state.examItem.question.text}</h4>
                <div>
                    <Form.Group>
                        <Form.Label className="answer-header">Antwoord (tekst)</Form.Label>
                        <div className={"custom-box"} dangerouslySetInnerHTML={{__html: words.join(" ")}}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="answer-header">Goed gekeurde antwoord/antwoorden (tekst)</Form.Label>
                        <div className={"custom-box"}
                             dangerouslySetInnerHTML={{__html: this.state.examItem.question.correctAnswer.text}}/>
                    </Form.Group>
                </div>
                <UserScore examItem={this.state.examItem}
                           questionId={this.props.questionId} examId={this.props.examId}
                           systemRating={this.state.suggestedScore}/>
                {this.renderInfoBoxComponent()}
            </div>
        );
    }
}

export default Answer;