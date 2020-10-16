import * as React from "react";
import {Component, useState} from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'
import {ListGroup} from "react-bootstrap";
import './QuestionsTrack.css'

interface iexam {
    items : any
}

class QuestionTracker extends Component {
    state = {
        isLoading: true,
        Exam: Array<iexam>()
    };

    async componentDidMount() {
        const response = await fetch('http://localhost:8080/api/exams/find/1');
        const body = await response.json();

        this.setState({Exam: body, isLoading: false});
    }

    render() {
        const {Exam, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        function setClassname(gradedtype: any, type: any) {
            if (type === "Closed") {
                let prefix = 'ClosedQuestionText'
                switch (gradedtype) {
                    case null:
                        return prefix
                    case true:
                        return prefix + ' Correct'
                    case false:
                        return prefix + ' False'
                }
            } else if (type === "Open") {
                let prefix = 'OpenQuestionText'
                switch (gradedtype) {
                    case null:
                        return prefix
                    case true:
                        return prefix + ' Correct'
                    case false:
                        return prefix + ' False'
                }
            }
        }

        return (
            <div className="Siterange">
                <div className="QuestionsDIV">
                    <div className="Questionsstatus">
                        <ListGroup className="ClosedQuestions">
                            <h1 className="Closed">
                                Meerkeuze vragen:
                            </h1>
                            {/*<i className="fa fa-arrow-right" aria-hidden="true"></i>*/}
                            <ListGroup.Item>
                                {(() => {
                                    {
                                        {
                                            return Exam.items!.map((examitem : any)  => {
                                                if (examitem.question.type == 1) {
                                                    return <li key={examitem.questionId}
                                                               className={setClassname(examitem.gradedCorrect, "Closed")}> {examitem.question.text} </li>
                                                }
                                            })
                                        }
                                    }
                                })()}
                            </ListGroup.Item>
                        </ListGroup>
                        <ListGroup className="OpenQuestions">
                            <h1 className="Open">
                                Open vragen:
                            </h1>
                            <ListGroup.Item>
                                {(() => {
                                    {
                                        {
                                            return Exam.items.map((examitem : any) => {
                                                if (examitem.question.type == 2) {
                                                    return <li key={examitem.questionId}
                                                               className={setClassname(examitem.gradedCorrect, "Closed")}> {examitem.question.text} </li>
                                                }
                                            })
                                        }
                                    }
                                })()}
                            </ListGroup.Item>
                        </ListGroup>
                    </div>
                    <div className="LoadingBar">
                        <ProgressBar className="ProgressBar" animated now={Exam.progress} label={`${Exam.progress}%`}/>
                    </div>
                </div>
            </div>);
    }
}

export default QuestionTracker