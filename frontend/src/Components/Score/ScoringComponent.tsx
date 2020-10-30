import React, { Component } from 'react';
// import ReactStars from "react-rating-stars-component";
import { render } from "react-dom";

class ScoringComponent extends Component
{
    // async componentDidMount()
    // {
    //     const ratingChanged = (newRating:any) => {
    //         console.log(newRating);
    //     };
    // }
    // render() {
    //     return( <ReactStars
    //         count={5}
    //         onChange={this.ratingChanged}
    //         size={24}
    //         isHalf={true}
    //         emptyIcon={<i className="far fa-star"></i>}
    //         fullIcon={<i className="fa fa-star"></i>}
    //         activeColor="#ffd700"
    //     />,
    //         document.getElementById("where-to-render"));
    // }

    render() {



    return (<>
            <div className="scoringdiv">
                <label className="textlabel">Systeem aangeraadde score</label>
                <i className="far fa-star" />
                <i className="far fa-star"/>
                <i className="far fa-star"/>
                <i className="far fa-star"/>
                <i className="far fa-star"/>
            </div>
            <div className="scoringdiv">
                <label className="textlabel">Gegeven score</label>
                <i className="far fa-star"/>
                <i className="far fa-star"/>
                <i className="far fa-star"/>
                <i className="far fa-star"/>
                <i className="far fa-star"/>
            </div>
        </>);
    }
}

export default ScoringComponent;