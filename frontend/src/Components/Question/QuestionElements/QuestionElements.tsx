import * as React from "react";
import {Component} from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'
import {Button, Col, ListGroup, Row} from "react-bootstrap";
import './QuestionsTracker.css'
import Answer from "../Answer/Answer";
import axios from "axios";
import InfoBox from "../InfoBox/InfoBox";

interface props {
    Exam: {}
}

class QuestionTracker extends Component <props> {
    state = {
        isLoading: true,
        Exam: {
            examiner: {},
            id: Number,
            items: [],
            progress: 0,
            status: Number,
            studentName: String,
            feedback: []
        },
        questionId: 0,
        score: 0,

        examId: 0,
        suggestedScore: 0,
        matchingWordPositions: [],
        examItem: {
            examId: 0,
            studentTextAnswer: "",
            question: {
                text: "",
                correctAnswer: {
                    text: ""
                }
            }
        },
        feedback: []
    };

    private foundQuestion: boolean = false;

    async componentDidMount() {
        await this.setState(
            {
                Exam: this.props.Exam,
                score: 0
            }, () => {
                this.state.Exam.items.forEach((examitem: any) => {
                    if ((examitem.question.type === "TEXT" && examitem.gradedScore === null && !this.foundQuestion) ||
                        (examitem.question.type === "TEXT" && examitem.questionId === this.state.questionId)) {
                        this.setState(
                            {
                                questionId: examitem.question.id,
                                examId: this.state.Exam.id,
                            }, () =>{
                                axios.get(`../api/grade/advice/${this.state.Exam.id}/${this.state.questionId}`).then(response => {
                                    this.setState({
                                        suggestedScore: response.data.suggestedScore,
                                        matchingWordPositions: response.data.matchingWordPositions,
                                        examItem: response.data.examItem,
                                        feedback: response.data.feedback,
                                        score: 0,
                                        isLoading: false,
                                    }, () => {console.log(this.state.examItem)})
                                    axios.put(`../api/exams/${this.state.examItem.examId}/status/GRADING_IN_PROGRESS`).then(() => {
                                    });
                                })
                            }
                        );
                        this.foundQuestion = true;
                    }
                });
            }
        );
    };

    componentDidUpdate(prevProps: any, prevState: any) {
        if (prevState.questionId !== this.state.questionId) {
            axios.get(`api/grade/advice/${this.state.examItem.examId}/${this.state.questionId}/`).then(response => {
                this.setState({
                    suggestedScore: response.data.suggestedScore,
                    matchingWordPositions: response.data.matchingWordPositions,
                    examItem: response.data.examItem,
                    feedback: response.data.feedback,
                }, () => {console.log("a")})
            })
        }
    }

    handleClick = (event: any) => {
        let targetId = event.target.getAttribute('data-rb-event-key');
        let item: any = this.state.Exam.items.find((x: any) => x.question.id.toString() === targetId.toString());

        this.setState({
            questionId: item.question.id,
            score: item.score
        });
    };

    render() {
        const {isLoading} = this.state;

        if (isLoading && this.state.Exam.progress === 100) {
            let examId = this.state.Exam.id;
            axios.put(`/api/exams/${examId}/status/GRADED`)

            return (
                <>
                    <h1>Alle vragen zijn nagekeken</h1>
                    <Button className="btn--medium btn btn-primary" onClick={() => window.location.href = "/examens"}>
                        Ga terug naar mijn examen overzicht
                    </Button>
                </>
            )
        }

        let qID = this.state.questionId;
        let keyCount = 1;

        function setTextClassname(gradedCorrect: any, id: number) {
            let prefix = 'question-text';

            if (id === qID) {
                prefix = prefix + ' bold active'
            }

            if (gradedCorrect !== null) {
                return prefix + ' answered'
            } else {
                return prefix
            }
        }

        let array = this.state.feedback;

        return (
            <>
                <Row>

                <div className="mx-auto">
                    {!this.state.isLoading && <Answer questionId={this.state.questionId}
                                                      examItem={this.state.examItem}
                                                      score={this.state.score}
                                                      feedback={this.state.feedback}
                                                      suggestedScore={this.state.suggestedScore}
                                                      matchingWordPositions={this.state.matchingWordPositions}

                    />}
                </div>

                <Col lg={6} md={12} sm={12}>
                    <ListGroup className="row mx-auto mb-2 card custom-rounded special-height">

                            <div className="container">
                                <p className={"text-center mt-3"}>Voortgang:</p>
                                <ProgressBar className="progress-bar-style" animated
                                             now={parseInt(this.state.Exam.progress.toString())}
                                             label={`${this.state.Exam.progress}%`}/>
                            </div>

                            <p className={"mt-3 ridge"}>Open vragen:</p>
                            <div className={"questions mb-2"}>
                            {
                                this.state.Exam.items.filter(
                                    function (examitem: any) {
                                        return examitem.question.type === "TEXT"
                                    })
                                    .map((examitem: any) => {
                                        return <ListGroup.Item
                                            onClick={this.handleClick}
                                            eventKey={examitem.questionId}
                                            className={setTextClassname(examitem.gradedCorrect, examitem.questionId)}>
                                            {keyCount++ + ". " + examitem.question.text}
                                        </ListGroup.Item>
                                    })
                            }
                            </div>
                    </ListGroup>

                    {
                        array.length < 1 ?
                            <div className="alert alert-secondary mt-4 custom-rounded infobox">
                                <InfoBox brokenRules={this.state.feedback}/>
                            </div>

                            :

                            <div className="alert OrangeAlert mt-4 custom-rounded2 infobox">
                                <InfoBox brokenRules={this.state.feedback}/>
                            </div>
                    }

                </Col>
                </Row>
            </>
        );
    }
}

export default QuestionTracker