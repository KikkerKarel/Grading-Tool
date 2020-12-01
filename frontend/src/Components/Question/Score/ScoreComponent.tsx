import React, {Component} from "react";
import './Score.css';
import Cookies from "js-cookie";
import axios from "axios";
import {Button, ButtonGroup} from "react-bootstrap";
import highlight from "./Highlight";

interface props {
    questionId?: number,
    examId?: number,
}


class ScoreComponent extends Component<props> {
    state = {
        valueStars: Number,
        systemRating: Number,
        previousScore: Number,
        questionId: Number,
        examId: Number
    }

    changeValue(event: any){
        this.setState({valueStars: event}, () => Cookies.set("score", event));
    }

    async componentDidUpdate() {
        if (this.props.questionId !== Number(this.state.questionId))
        {
            await axios.get(`../api/exams/previousgrading/${this.props.questionId}/${this.props.examId}`).then(response =>
                this.setState(
                    {
                        previousScore: response.data.gradedScore,
                        valueStars: 0,
                        systemRating: Math.random()*(5 - 0),
                        questionId: this.props.questionId,
                    }
                ));
            console.log("State 'previousScore' set to: " + this.state.previousScore + "State 'valueStars' set to: "
                + this.state.valueStars + " and state 'systemRating' set to: " + this.state.systemRating);
        }

    }

     returnButtonClass(value:any) {
         let Graded = this.state.previousScore;
        let buttonInactive = "rating-buttons";
        let buttonActive = "rating-buttons-correct";
        if (value === Graded) {
            return buttonActive;
        }
        return buttonInactive;
    }

    render() {
        return (
            <div className="ScoreComponent">
                <div className="scoringdiv">
                    <label className="textlabel">Systeem aangeraden score</label>
                    {highlight(this.state.systemRating)}
                </div>

                <br/>

                <div className="scoringdiv">
                    <label className="textlabel">Gegeven score</label>
                    {(() => {
                        {
                            {
                                let Graded = this.state.previousScore;
                                if(Graded !== null)
                                {
                                    return(
                                        <ButtonGroup>
                                            <Button className={this.returnButtonClass(0)} id="correctorRating" value={0} onClick={() => this.changeValue(0)} > 0 </Button>
                                            <Button className={this.returnButtonClass(1)} id="correctorRating" value={1} onClick={() => this.changeValue(1)} > 1 </Button>
                                            <Button className={this.returnButtonClass(2)} id="correctorRating" value={2} onClick={() => this.changeValue(2)} > 2 </Button>
                                            <Button className={this.returnButtonClass(3)} id="correctorRating" value={3} onClick={() => this.changeValue(3)} > 3 </Button>
                                            <Button className={this.returnButtonClass(4)} id="correctorRating" value={4} onClick={() => this.changeValue(4)} > 4 </Button>
                                            <Button className={this.returnButtonClass(5)} id="correctorRating" value={5} onClick={() => this.changeValue(5)} > 5 </Button>
                                        </ButtonGroup>
                                    )
                                }
                                else{
                                    return(
                                        <ButtonGroup toggle>
                                            <Button className="rating-buttons" id="correctorRating" value={0} onClick={() => this.changeValue(0)}>0</Button>
                                            <Button className="rating-buttons" id="correctorRating" value={1} onClick={() => this.changeValue(1)}>1</Button>
                                            <Button className="rating-buttons" id="correctorRating" value={2} onClick={() => this.changeValue(2)}>2</Button>
                                            <Button className="rating-buttons" id="correctorRating" value={3} onClick={() => this.changeValue(3)}>3</Button>
                                            <Button className="rating-buttons" id="correctorRating" value={4} onClick={() => this.changeValue(4)}>4</Button>
                                            <Button className="rating-buttons" id="correctorRating" value={5} onClick={() => this.changeValue(5)}>5</Button>
                                        </ButtonGroup>
                                    )
                                }
                            }
                        }
                    })()}

                </div>
            </div>
        );
    }
}

export default ScoreComponent;