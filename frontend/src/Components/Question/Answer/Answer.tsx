import React, {Component} from 'react';
import axios from 'axios'
import {Button, Form} from 'react-bootstrap';
import './Answer.css';
import UserScore from "../Score/UserScore";
import Cookies from "js-cookie";

interface props {
    questionId?: number,
    examId?: number,
}

class Answer extends Component<props> {
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

        axios.put(`/api/exams/grade/${examId}/${questionId}/${score}`).then(() => {
            window.location.replace("./");
        });
    }

    render() {
        return (
            <div className="answer">
                <h4 className={"text-center"}>{this.state.text}</h4>
                <div>
                    <Form.Group>
                        <Form.Label className="answer-header">Antwoord (tekst)</Form.Label>
                        <Form.Control as="textarea" rows={3} cols={30} placeholder={this.state.studentAnswer} disabled/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="answer-header">Goed gekeurde antwoorden (tekst)</Form.Label>
                        <Form.Control as="textarea" rows={3} cols={30} placeholder={this.state.answer} disabled/>
                    </Form.Group>
                    <div className="button-div">
                        <Button id={"gradeQuestion"} className="btn--green" onClick={this.gradeClick} >Verstuur score</Button>
                        <Button id={"editQuestion"} className="btn--yellow" >Wijzigen</Button>
                    </div>
                </div>
                <UserScore questionId={this.props.questionId} examId={this.props.examId}/>
            </div>);
    }
}

export default Answer;