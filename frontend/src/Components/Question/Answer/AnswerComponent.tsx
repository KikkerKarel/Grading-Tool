import React, {Component} from 'react';
import axios from 'axios'
import {Button, Form} from 'react-bootstrap';
import './Answer.css';
import ScoreComponent from "../Score/ScoreComponent";
import Cookies from "js-cookie";

interface props {
    questionId?: number
}

class AnswerComponent extends Component<props> {
    state = {
        text: '',
        answer: '',
        studentAnswer: ''
    }

    async componentDidMount() {
        axios.get(`../api/exams/question/${this.props.questionId}`).then(response => {
            this.setState({
                text: response.data[0].question.text,
                studentAnswer: response.data[0].textAnswer,
                answer: response.data[0].question.textAnswer.value
            })
            Cookies.set('score', "0");
        })
    }

    componentDidUpdate(prevProps : any, prevState : any) {
        if(prevProps.questionId !== this.props.questionId){
            axios.get(`../api/exams/question/${this.props.questionId}`).then(response => {
                this.setState({
                    text: response.data[0].question.text,
                    studentAnswer: response.data[0].textAnswer,
                    answer: response.data[0].question.textAnswer.value
                })
            })
        }
    }

    gradeClick = () =>{
        let score = Cookies.get("score");

        axios.put(`/api/exams/grade/question/${this.props.questionId}/${score}`).then(() => {
            window.location.replace("./");
        });
    }

    render() {
        return (
            <>
                <h1>{this.state.text}</h1>
                <Form.Group className="Answer">
                    <Form.Label className="AnswerHeader">Antwoord (tekst)</Form.Label>
                    <Form.Control as="textarea" rows={3} cols={30} readOnly={true} placeholder={this.state.studentAnswer}
                                  className="AnswerText"/>
                </Form.Group>
                <Form.Group className="Answer">
                    <Form.Label className="CorrectAnswerHeader">Goed gekeurde antwoorden (tekst)</Form.Label>
                    <Form.Control as="textarea" rows={3} cols={30} placeholder={this.state.answer}
                                  className="CorrectAnswerText" readOnly={true}/>
                </Form.Group>
                <div className="buttondiv">
                    <Button className="Button" variant="success" onClick={this.gradeClick} >Verstuur score</Button>
                    <Button className="Button" variant="warning">Wijzigen</Button>
                </div>

                <ScoreComponent />
            </>);
    }
}

export default AnswerComponent;