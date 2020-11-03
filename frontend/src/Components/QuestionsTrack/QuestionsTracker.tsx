import * as React from "react";
import axios from 'axios'
import {Component, useState} from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'
import {ListGroup, ListGroupItem} from "react-bootstrap";
import './QuestionsTrack.css'
import AnswerComponent from "../Answer/AnswerComponent";
import QuickLoader from "@scrumble-nl/react-quick-loader";


class QuestionTracker extends Component {

    state = {
        isLoading: true,
        Exam: [],
        questionId: 0,
    };

    async componentDidMount() {
        const response = await fetch('http://localhost:8080/api/exams/find/1');
        const body = await response.json();

        this.setState({Exam: body, isLoading: false});
    }


    handleClick = (event : any) =>{
        axios.get( `/api/exams/question/${event.target.value}`).then(response =>{
            this.setState({
                questionId: response.data[0].questionId,
            })
            console.log()
        })
    }

    render() {
        const {Exam, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        function setClassname(gradedtype: any) {
            let prefix = 'QuestionText'
            switch (gradedtype) {
                case null:
                    return prefix
                case true:
                    return prefix + ' Correct'
                case false:
                    return prefix + ' False'
            }
        }

        return (
            <>
                <QuickLoader color="#000000" data={this.state.questionId}>
                    <AnswerComponent questionId={this.state.questionId} />
                </QuickLoader>
            <div className="Tracker">
                <ListGroup className="ClosedQuestions">
                    <h1>
                       <p>Meerkeuze vragen:</p>
                    </h1>
                    {/*<i className="fa fa-arrow-right" aria-hidden="true"></i>*/}
                    <ListGroupItem as="ol">
                        {(() => {
                            {
                                {
                                    return Exam.items.map((examitem: any) => {
                                        if (examitem.question.type == 1) {
                                            return <li value={examitem.questionId} onClick={this.handleClick} key={examitem.questionId}
                                                       className={setClassname(examitem.gradedCorrect)}> {examitem.question.text} </li>
                                        }
                                    })
                                }
                            }
                        })()}
                    </ListGroupItem>
                </ListGroup>
                <ListGroup className="OpenQuestions">
                    <h1>
                        <p>Open vragen:</p>
                    </h1>
                    <ListGroup.Item as="ol">
                        {(() => {
                            {
                                {
                                    return Exam.items.map((examitem: any) => {
                                        if (examitem.question.type == 2) {
                                            return <li value={examitem.questionId} onClick={this.handleClick} key={examitem.questionId}
                                                       className={setClassname(examitem.gradedCorrect)}> {examitem.question.text} </li>
                                        }
                                    })
                                }
                            }
                        })()}
                    </ListGroup.Item>
                </ListGroup>
                <div className="LoadingBar">
                    <ProgressBar className="ProgressBar" animated now={Exam.progress} label={`${Exam.progress}%`}/>
                </div>
            </div>
                </>
        );
    }
}

export default QuestionTracker