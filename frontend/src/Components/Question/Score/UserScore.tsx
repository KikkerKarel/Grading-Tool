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

    getSendButton()
    {
        return <span className="d-inline-block">
                <Button id={"gradeQuestion"}
                               className={"btn--green forced-width"}
                               onClick={this.gradeClick}>Verstuur score</Button>
            </span>
    }

    getDisabledButton()
    {
        return <OverlayTrigger placement={"right"}
                               overlay={<Tooltip id="tooltip-enabled">Selecteer eerst een score</Tooltip>}>
                         <span className="d-inline-block">

                             <Button id={"gradeQuestion"} style={{pointerEvents: 'none'}} disabled={this.state.disabled}
                                     className={"btn--green forced-width"}
                                     onClick={this.gradeClick}>Verstuur score</Button>
                         </span>
        </OverlayTrigger>
    }

    render() {
        return (

            <div className="container">
                <div className="scoring-div">
                    <p className="scoring-text-label">Gradest advies score</p>
                    {systemScore(this.props.systemRating)}
                </div>
                <hr />
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
                <div className="button-div pb-2 mb-4">
                    {this.state.disabled ? this.getDisabledButton() : this.getSendButton()}
                </div>
            </div>
        );
    }
}

export default UserScore;