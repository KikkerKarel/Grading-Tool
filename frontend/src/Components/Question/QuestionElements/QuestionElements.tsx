import * as React from "react";
import {Component} from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'
import {Button, ListGroup} from "react-bootstrap";
import './QuestionsTracker.css'
import Answer from "../Answer/Answer";
import Cookies from "js-cookie";
import InfoBox from "../InfoBox/InfoBox";

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
        examId: 0
    };

    private foundQuestion : boolean = false;

    async componentDidMount() {
        await this.setState(
            {
                Exam : this.props.Exam
            }
        );

        Cookies.set('score', "0");
        this.state.Exam.items.forEach((examitem : any) =>{
            if ((examitem.question.type === "TEXT" && examitem.gradedScore === null && !this.foundQuestion) ||
                (examitem.question.type === "TEXT" && examitem.questionId === this.state.questionId))
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
    };

    handleClick = (event : any) =>{
        let targetId = event.target.getAttribute('data-rb-event-key');
        let item: any = this.state.Exam.items.find((x:any) => x.question.id.toString() === targetId.toString());

        this.setState({questionId: item.question.id});
        Cookies.set('score', item.score);
    };

    renderAnswerComponent()
    {
        if (!this.state.isLoading) {
            return(
                <Answer questionId={this.state.questionId} examId={this.state.examId} />
            )
        }
    };


    renderInfoBoxComponent()
    {
        if (!this.state.isLoading) {
            return(
                <InfoBox brokenRules={[
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "Vivamus eleifend feugiat dui, at semper lorem eleifend et.",
                    "Curabitur ac nunc tortor.",
                    "Nunc quis placerat velit.",
                    "Nullam vulputate nisl augue, vel semper justo sodales ut.",
                    "Donec diam mauris, mattis id maximus ut, tristique vitae sapien.",
                    "Cras erat nibh, consequat non turpis id, ornare lacinia justo.",
                    "enean accumsan lectus ac velit euismod, vitae bibendum ex tempor.",
                    "Suspendisse pharetra congue condimentum. Nullam porttitor ultricies sem."
                ]} />
            )
        }
    };

    render() {
        const {isLoading} = this.state;

        if (isLoading) {
            return (
                <>
                    <h1>Alle vragen zijn nagekeken: </h1>
                    <Button onClick={() => window.location.replace("/examens")}>
                        Ga terug naar de examentabel
                    </Button>
                </>
            )
        }

        let qID = this.state.questionId;
        let keyCount = 1;

        function setTextClassname(gradedCorrect : any, id : any) {
            let prefix = 'question-text';

            if(id ===  qID)
            {
                prefix = prefix + ' bold'
            }

            if (gradedCorrect !== null)
            {
                return prefix + ' answered'
            }
            else{
                return prefix
            }
        }

        return(
            <>
                {this.renderAnswerComponent()}
                <div className="tracker">
                    <ListGroup className="open-questions">
                        <h1>
                            <p>Open vragen:</p>
                        </h1>
                            {
                                this.state.Exam.items.filter(
                                    function(examitem : any)
                                        {return examitem.question.type === "TEXT"})
                                    .map((examitem : any) => {
                                        return <ListGroup.Item
                                            onClick={this.handleClick}
                                            eventKey={examitem.questionId}
                                            className={setTextClassname(examitem.gradedCorrect, examitem.questionId)}>
                                            {keyCount++ + ". " + examitem.question.text}
                                        </ListGroup.Item>
                                })
                            }
                    </ListGroup>
                    <div className="loading-bar">
                        <span className={"text-center mt-3"}>Progress:</span>
                        <ProgressBar className="progress-bar-style" animated now={parseInt(this.state.Exam.progress.toString())} label={`${this.state.Exam.progress}%`}/>
                    </div>
                    {this.renderInfoBoxComponent()}
                </div>
            </>
        );
    }
}

export default QuestionTracker