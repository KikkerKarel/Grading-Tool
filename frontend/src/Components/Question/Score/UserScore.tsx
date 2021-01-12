import React, {Component} from "react";
import './Score.css';
import axios from "axios";
import {Button, ButtonGroup, OverlayTrigger, Tooltip} from "react-bootstrap";
import systemScore from "./SystemScore";

interface props {
    questionId?: number,
    examId?: number,
    systemRating?: number,
    examItem?: Object,
}

class UserScore extends Component<props> {
    state = {
        valueStars: Number,
        previousScore: Number,
        questionId: Number,
        examId: Number,
        score: 0,
        disabled: true,
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
    }

    gradeClick = () => {
        let scoreValue: any = localStorage.getItem("score");
        let score: number = parseInt(scoreValue.toString());
        let examId = this.state.examItem.examId;
        let questionId = this.props.questionId;
        console.log(scoreValue, score, examId, questionId);
        if (!isNaN(score))
            axios.put(`/api/exams/grade/${examId}/${questionId}/${score}`).then(() => {
                window.location.reload();
            });
        if (this.state.score === 0) {

        }
    }


    changeValue(event: any) {
        this.setState(
            {
                valueStars: event,
                disabled: false,
            });
        localStorage.setItem("score", event);
    }

    async componentDidUpdate() {
        if (this.props.questionId !== Number(this.state.questionId)) {
            await axios.get(`../api/exams/previousgrading/${this.props.questionId}/${this.props.examId}`).then(response =>
                this.setState(
                    {
                        previousScore: response.data.gradedScore,
                        valueStars: 0,
                        questionId: this.props.questionId,
                        examItem: this.props.examItem,
                    }
                )
            );
        }
    }

    returnButtonClass(value: any) {
        let graded = this.state.previousScore;
        let buttonInactive = "rating-buttons";
        let buttonActive = "rating-buttons-correct";

        if (value === graded) {
            return buttonActive;
        }
        return buttonInactive;
    }

    render() {

        return (

            <div className="scores">
                <div className="scoring-div">
                    <p className="scoring-text-label">Systeem aangeraden score</p>
                    {systemScore(this.props.systemRating)}
                </div>
                <br/>
                <div className="scoring-div">
                    <p className="scoring-text-label">Gegeven score</p>
                    {(() => {
                        let graded = this.state.previousScore;
                        let userButtons = [];

                        for (let i = 0; i < 6; i++) {
                            if (graded !== null) {
                                userButtons.push(<Button className={this.returnButtonClass(i)} id="correctorRating"
                                                         value={i}
                                                         onClick={() => this.changeValue(i)}>{i.toString()}</Button>);
                            } else {
                                userButtons.push(<Button className="rating-buttons" id="correctorRating" value={i}
                                                         onClick={() => this.changeValue(i)}>{i.toString()}</Button>);
                            }
                        }
                        return <ButtonGroup>{userButtons}</ButtonGroup>;
                    })()}
                </div>
                {this.state.disabled ?
                    <div className="button-div">
                        <OverlayTrigger placement={"right"}
                                        overlay={<Tooltip id="tooltip-enabled">Vul eerst een score in.</Tooltip>}>
                    <span className="d-inline-block">
                    <Button id={"gradeQuestion"} style={{pointerEvents: 'none'}} disabled={this.state.disabled}
                            className={"btn--green forced-width"}
                            onClick={this.gradeClick}>Verstuur score</Button>
                    </span>
                        </OverlayTrigger>
                    </div>
                    :
                    <div className="button-div">
                        <span className="d-inline-block">
                    <Button id={"gradeQuestion"} disabled={this.state.disabled}
                            className={"btn--green forced-width"}
                            onClick={this.gradeClick}>Verstuur score</Button>
                              </span>
                    </div>
                }

            </div>
        );
    }
}

export default UserScore;