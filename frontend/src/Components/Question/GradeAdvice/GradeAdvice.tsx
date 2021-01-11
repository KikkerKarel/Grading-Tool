import React, {Component} from "react";
import './GradeAdvice.css';

class GradeCorrect extends Component {
    render() {
        return (
            <div className="gradest-advice" id="correct">
                <div className="header-div">
                    <label className="header-text">Gradest Advies</label>
                </div>
                <div className="explanation-div">
                    <h1 className="explanation-header">Keur goed!</h1>
                    <label className="explanation-text">Hoofdletters, strepen, accenten en andere symbolen zijn
                        optioneel.</label>
                </div>
            </div>
        );
    }
}

class GradeWrong extends Component {
    render() {
        return (
            <div className="gradest-advice" id="wrong">
                <div className="header-div">
                    <label className="header-text">Gradest Advies</label>
                </div>
                <div className="explanation-div">
                    <h1 className="explanation-header">Keur fout!</h1>
                    <label className="explanation-text">Hoofdletters, strepen, accenten en andere symbolen zijn
                        optioneel.</label>
                </div>
            </div>
        );
    }
}

export default GradeCorrect;
// export default GradeWrong;