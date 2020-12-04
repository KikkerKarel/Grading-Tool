import * as React from "react";
import {Component} from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'
import {Button, ListGroup} from "react-bootstrap";
import './QuestionsTracker.css'
import AnswerComponent from "../Answer/AnswerComponent";
import Cookies from "js-cookie";

interface props{
    Exam : {}
}

class QuestionTracker extends Component <props>{
    state = {
        isLoading: true,
        Exam: {
            examiner: {},
            id: Number,
            items: [],
            progress: Number,
            status: Number,
            studentName: String
        },
        questionId: 0,
        examId: 0,
    };

    private foundQuestion : boolean = false;

    async componentDidMount() {
        await this.setState(
            {
                Exam : this.props.Exam
            }
        );
        Cookies.set('score', "0");

                    this.state.Exam.items.map((examitem: any) => {
                        if (examitem.question.type === "TEXT" && examitem.gradedScore === null && !this.foundQuestion) {
                            this.setState(
                                {
                                    questionId : examitem.question.id,
                                    isLoading: false,
                                    examId: this.state.Exam.id,
                                }
                            );
                            this.foundQuestion = true;
                        }
                        else if(examitem.question.type === "TEXT" && examitem.questionId === this.state.questionId)
                        {
                            this.setState(
                                {
                                    questionId : examitem.question.id,
                                    isLoading: false,
                                    examId: this.state.Exam.id,
                                }
                            );
                            this.foundQuestion = true;
                        }
                    });
    }

    handleClick = (event : any) =>{
        let targetId = event.target.getAttribute('data-rb-event-key');
        let item: any= this.state.Exam.items.find((x:any) => x.question.id === targetId);

        this.setState({questionId: item.question.id});
        Cookies.set('score', item.score);
    };

    renderAnswerComponent()
    {
        if (!this.state.isLoading) {
            return(
                <>
                    <AnswerComponent questionId={this.state.questionId} examId={this.state.examId} />
               </>
            )
        }
    }

    render() {
        const {isLoading} = this.state;

        if (isLoading) {
            return (<><h1>Alle vragen zijn nagekeken: </h1>
                <Button onClick={() => window.location.replace("../Examens")}>
                    Ga terug naar de examentabel</Button>
            </>)
        }

        let qID = this.state.questionId;
        let keyCount = 1;

        function setTextClassname(gradedScore: any, id: any) {
            let prefix = 'QuestionText';

            if(id ==  qID)
            {
                prefix = prefix + ' Bold'
            }

            if (gradedScore >= 1)
            {
                return prefix + ' Correct'
            }
            else if(gradedScore == 0)
            {
                return prefix + ' False'
            }
            else{
                return prefix
            }
        }

        return (
            <>
            {this.renderAnswerComponent()}
            <div className="Tracker">
                <ListGroup className="OpenQuestions">
                    <h1>
                        <p>Open vragen:</p>
                    </h1>
                        {(() => {

                                    return this.state.Exam.items.map((examitem: any) => {
                                        if (examitem.question.type === "TEXT") {
                                            return <ListGroup.Item
                                                onClick={this.handleClick}
                                                eventKey={examitem.questionId}
                                                className={setTextClassname(examitem.gradedScore , examitem.questionId)}>
                                                {keyCount++ + ". "+ examitem.question.text}
                                            </ListGroup.Item>
                                        }
                                    })

                        })()}
                </ListGroup>
                <div className="LoadingBar">
                    <ProgressBar className="ProgressBar" animated now={parseInt(this.state.Exam.progress.toString())} label={`${this.state.Exam.progress}%`}/>
                </div>
            </div>
            </>
        );
    }
}

export default QuestionTracker