import React, {Component} from "react";
// @ts-ignore
import ReactStars from "react-rating-stars-component";
import './Score.css';

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
    // onChange: (newValue) => {
    //     console.log(`Score is ${newValue}`);
    // }
};

let ratingStars2 = {
    size: 35,
    count: 5,
    color: "black",
    activeColor: "gold",
    value: 7.5,
    a11y: true,
    isHalf: false,
    emptyIcon: <i className="far fa-star" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue: any) => {
        console.log(`New score is ${newValue}`);
    }
};

class ScoreComponent extends Component {

    render() {
        return (
            <>
                <div className="scoringdiv">
                    <label className="textlabel">Systeem aangeraadde score</label>
                    <ReactStars readOnly classNames="stars" {...ratingStars} />
                </div>

                <br/>

                <div className="scoringdiv">
                    <label className="textlabel">Gegeven score</label>
                    <ReactStars classNames="stars" {...ratingStars2} />
                </div>
            </>
        );
    }
}

export default ScoreComponent;