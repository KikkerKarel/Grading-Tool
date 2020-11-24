import React, {Component} from "react";
// @ts-ignore
// import ReactStars from "react-rating-stars-component";
import './Score.css';
import Cookies from "js-cookie";
import axios from "axios";
import {Button, ButtonGroup} from "react-bootstrap";
import highlight from "./Highlight";
import highlightGraded from "./Gang";
import gradedHighlight from "./GradedHighlight";

interface props {
    questionId?: number
}

class ScoreComponent extends Component<props> {
    state = {
        valueStars: Number,
        systemRating: Number,
        previousScore: Number,
        questionId: Number
    }

    changeValue(event: any){
        this.setState({valueStars: event}, () => console.log("State 'valueStars' set to: " + this.state.valueStars))
    }

    async componentDidMount() {
        console.log(this.props.questionId);
        await axios.get(`../api/exams/previousgrading/${this.props.questionId}`).then(response =>
                this.setState(
                    {
                    previousScore: response.data.gradedScore,
                    valueStarts: 0,
                    systemRating: 2
                }
                ));
                console.log("State 'previousScore' set to: " + this.state.previousScore + "State 'valueStars' set to: "
                    + this.state.valueStars + " and state 'systemRating' set to: " + this.state.systemRating);
    }

    render() {
        // let ratingStars = {
        //     edit: false,
        //     size: 35,
        //     count: 5,
        //     color: "black",
        //     activeColor: "gold",
        //     value: 3, // should be filled based on advice
        //     a11y: true,
        //     isHalf: false,
        //     emptyIcon: <i className="far fa-star" />,
        //     filledIcon: <i className="fa fa-star" />,
        // };
        //
        // let ratingStars2 = {
        //     size: 35,
        //     count: 5,
        //     color: "black",
        //     activeColor: "gold",
        //     value: this.state.valueStars,
        //     a11y: true,
        //     isHalf: false,
        //     emptyIcon: <i className="far fa-star" />,
        //     filledIcon: <i className="fa fa-star" />,
        //     onChange: (newValue: any) => {
        //         Cookies.set('score', newValue);
        //     }
        // };


        return (
            <div className="ScoreComponent">
                <div className="scoringdiv">
                    <label className="textlabel">Systeem aangeraadde score</label>
                    {highlight(this.state.systemRating)}
                    {/*<ReactStars readOnly classNames="stars" {...ratingStars} />*/}
                </div>

                <br/>

                <div className="scoringdiv">
                    <label className="textlabel">Gegeven score</label>
                    {/*{(() => {*/}
                    {/*    {*/}
                    {/*        {*/}
                    {/*            let Graded = this.state.previousScore;*/}
                    {/*            console.log(Graded);*/}
                    {/*            // console.log(this.state.questionId);*/}

                    {/*            if(Graded !== null)*/}
                    {/*            {*/}
                    {/*                return(*/}
                    {/*                    console.log("hallo")*/}
                    {/*                )*/}
                    {/*            }*/}
                    {/*            else{*/}
                    {/*                return(*/}
                    {/*                    console.log("doei")*/}
                    {/*                )*/}
                    {/*            }*/}
                    {/*        }*/}
                    {/*    }*/}
                    {/*})()}*/}
                    <ButtonGroup toggle>
                        <Button className="rating-buttons" id="correctorRating" value={0} onClick={() => this.changeValue(0)}>
                            0
                        </Button>
                        <Button className="rating-buttons" id="correctorRating" value={1} onClick={() => this.changeValue(1)}>1</Button>
                        <Button className="rating-buttons" id="correctorRating" value={2} onClick={() => this.changeValue(2)}>2</Button>
                        <Button className="rating-buttons" id="correctorRating" value={3} onClick={() => this.changeValue(3)}>3</Button>
                        <Button className="rating-buttons" id="correctorRating" value={4} onClick={() => this.changeValue(4)}>4</Button>
                        <Button className="rating-buttons" id="correctorRating" value={5} onClick={() => this.changeValue(5)}>5</Button>
                    </ButtonGroup>
                </div>
            </div>
        );
    }
}

export default ScoreComponent;