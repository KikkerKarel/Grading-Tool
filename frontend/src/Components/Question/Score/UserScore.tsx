import React, {Component} from "react";
import './Score.css';
import axios from "axios";
import {Button, ButtonGroup} from "react-bootstrap";
import systemScore from "./SystemScore";

interface props {
    questionId?: number,
    examId?: number,
    systemRating?: number
}

class UserScore extends Component<props> {
    state = {
        valueStars: Number,
        previousScore: Number,
        questionId: Number,
        examId: Number,
        score: 0
    }

    changeValue(event : any){
        this.setState(
            {
                valueStars: event,
            });
        localStorage.setItem("score", event);
    }

    async componentDidUpdate() {
        if (this.props.questionId !== Number(this.state.questionId))
        {
            await axios.get(`../api/exams/previousgrading/${this.props.questionId}/${this.props.examId}`).then(response =>
                this.setState(
                    {
                        previousScore: response.data.gradedScore,
                        valueStars: 0,
                        questionId: this.props.questionId,
                    }
                )
            );
        }
    }

     returnButtonClass(value : any) {
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
                    <label className="scoring-text-label">Systeem aangeraden score</label>
                    {systemScore(this.props.systemRating)}
                </div>
                <br/>
                <div className="scoring-div">
                    <label className="scoring-text-label">Gegeven score</label>
                    {(() => {
                        let graded = this.state.previousScore;
                        let userButtons = [];

                        for (let i =0; i < 6; i++)
                        {
                            if (graded !== null)
                            {
                                userButtons.push(<Button className={this.returnButtonClass(i)} id="correctorRating" value={i} onClick={() => this.changeValue(i)}>{i.toString()}</Button>);
                            }
                            else{
                                userButtons.push(<Button className="rating-buttons" id="correctorRating" value={i} onClick={() => this.changeValue(i)}>{i.toString()}</Button>);
                            }
                        }
                        return <ButtonGroup>{userButtons}</ButtonGroup>;
                    })()}
                </div>
            </div>
        );
    }
}

export default UserScore;