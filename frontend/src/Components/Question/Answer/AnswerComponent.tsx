import React, {Component} from 'react';
import axios from 'axios'
import {Button, Form} from 'react-bootstrap';
import './Answer.css';
import ScoreComponent from "../Score/ScoreComponent";
import Cookies from "js-cookie";

interface props {
    questionId?: number,
    examId?: number,
}

class AnswerComponent extends Component<props> {
    state = {
        text: '',
        answer: '',
        studentAnswer: '',
        examId: ''
    }

    async componentDidMount() {
        axios.get(`../api/exams/question/${this.props.questionId}/${this.props.examId}`).then(response => {
            console.log(response.data);
            this.setState({
                text: response.data.question.text,
                studentAnswer: response.data.studentTextAnswer,
                answer: response.data.question.correctAnswer.text,
                examId: response.data.examId,
            })
            Cookies.set('score', "0");
        })
    }

    componentDidUpdate(prevProps : any, prevState : any) {
        if(prevProps.questionId !== this.props.questionId){
            axios.get(`../api/exams/question/${this.props.questionId}/${this.props.examId}`).then(response => {
                this.setState({
                    text: response.data.question.text,
                    studentAnswer: response.data.studentTextAnswer,
                    answer: response.data.question.correctAnswer.text,
                    examId: response.data.examId,
                })
            })
        }
    }

    gradeClick = () =>{
        let score = Cookies.get("score");
        let examId = this.state.examId;
        let questionId = this.props.questionId;
        axios.put(`/api/exams/${examId}/status/GRADING_IN_PROGRESS`).then(() =>{});
        axios.put(`/api/exams/grade/${examId}/${questionId}/${score}`).then(() => {
            window.location.replace("./beoordeel");
        });
    }

    render() {
        return (
            <div className="AnswerComponent">
                <h4>{this.state.text}</h4>
                <div className="Answer">
                <Form.Group>
                    <Form.Label className="AnswerHeader">Antwoord (tekst)</Form.Label>
                    <Form.Control as="textarea" rows={3} cols={30} readOnly={true} placeholder={this.state.studentAnswer}
                                  className="AnswerText"/>
                </Form.Group>
                <Form.Group className="Answer">
                    <Form.Label className="AnswerHeader">Goed gekeurde antwoorden (tekst)</Form.Label>
                    <Form.Control as="textarea" rows={3} cols={30} placeholder={this.state.answer}
                                  className="CorrectAnswerText" readOnly={true}/>
                </Form.Group>
                <div className="buttondiv">
                    <Button className="btn--green" onClick={this.gradeClick} >Verstuur score</Button>
                    <Button className="btn--yellow" >Wijzigen</Button>
                </div>
                </div>

                <ScoreComponent questionId={this.props.questionId} examId={this.props.examId}/>
            </div>);
    }
}

export default AnswerComponent;