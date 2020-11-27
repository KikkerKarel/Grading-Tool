import React, {Component} from "react";
// @ts-ignore
import ReactStars from "react-rating-stars-component";
import './Score.css';
import Cookies from "js-cookie";
import axios from "axios";

class ScoreComponent extends Component {
    render() {
        console.log(Cookies.get("score"));

        let ratingStars = {
            edit: false,
            size: 35,
            count: 5,
            color: "black",
            activeColor: "gold",
            value: 3,
            a11y: true,
            isHalf: false,
            emptyIcon: <i className="far fa-star" />,
            filledIcon: <i className="fa fa-star" />,
        };

        let ratingStars2 = {
            size: 35,
            count: 5,
            color: "black",
            activeColor: "gold",
            value: Math.floor(Math.random() * 6) + 1,
            a11y: true,
            isHalf: false,
            emptyIcon: <i className="far fa-star" />,
            filledIcon: <i className="fa fa-star" />,
            onChange: (newValue: any) => {
                Cookies.set('score', newValue);
            }
        };

        return (
            <div className="ScoreComponent">
                <div className="scoringdiv">
                    <label className="textlabel">Systeem aangeraadde score</label>
                    <ReactStars readOnly classNames="stars" {...ratingStars} />
                </div>

                <br/>

                <div className="scoringdiv">
                    <label className="textlabel">Gegeven score</label>
                    <ReactStars classNames="stars" {...ratingStars2} />
                </div>
            </div>
        );
    }
}

export default ScoreComponent;