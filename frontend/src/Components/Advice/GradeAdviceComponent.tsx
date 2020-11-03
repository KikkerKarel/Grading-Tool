import React, {Component} from "react";
import './Advice.css';

class GradeCorrect extends Component
{
    render() {
        return (<div className="gradestadvice" id="correct">
            <div className="headerdiv">
                <label className="header">Gradest Advies</label>
            </div>
            <div className="expldiv">
                <h1 className="h1">Keur goed!</h1>
                <label className="infolabel">Hoofdletters, strepen, accenten en andere symbolen zijn optioneel</label>
            </div>
        </div>);
    }
}

class GradeWrong extends Component
{
    render() {
        return (<div className="gradestadvice" id="wrong">
            <div className="headerdiv">
                <label className="header">Gradest Advies</label>
            </div>
            <div className="expldiv">
                <h1 className="h1">Keur fout!</h1>
                <label className="infolabel">Hoofdletters, strepen, accenten en andere symbolen zijn optioneel</label>
            </div>
        </div>);
    }
}

export default GradeCorrect;
// export default GradeWrong;