import React from "react";
import ReactStars from "react-rating-stars-component";
import './Stars.css';

const ratingStars = {
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

const ratingStars2 = {
    size: 35,
    count: 5,
    color: "black",
    activeColor: "gold",
    value: 7.5,
    a11y: true,
    isHalf: false,
    emptyIcon: <i className="far fa-star" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
        console.log(`New score is ${newValue}`);
    }
};

// const stars = {};
// function setStars (edit, value)
// {
//     stars["color"] = "purple";
//     stars["edit"] = edit;
//     console.log(stars);
// }

export default function Stars() {
    return (
        <>
            <div className="scoringdiv">
                <label className="textlabel">Systeem aangeraadde score</label>
                <ReactStars readOnly classNames="stars" {...ratingStars} />
            </div>
            <div className="scoringdiv">
                <label className="textlabel">Gegeven score</label>
                <ReactStars classNames="stars" {...ratingStars2} />
                {/*<ReactStars {...setStars(false, 4)} />*/}
            </div>
        </>
    );
}