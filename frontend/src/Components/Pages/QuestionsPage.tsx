import * as React from "react";
import '../Navbar/Navbar.css';
import {Component} from "react";
import Footer from "../Footer";
import '../../Dashboard.css'
import NavbarComponent from "../Navbar/NavbarComponent"
import QuestionTracker from "../Question/QuestionsTrack/QuestionsTrackerComponent";
import AddAnswerComponent from "../Question/AddAnswer/AddAnswerComponent";
import AnswerComponent from "../Question/Answer/AnswerComponent";


class QuestionsPage extends Component {

    render() {
        return (
            <div className="page-container">
                <div className="content-wrap">
                    <NavbarComponent />
                </div>
                <div>
                    <QuestionTracker />
                </div>
                <section className="content-container">
                    <div className="AnswerComponent">
                        <AnswerComponent/>
                    </div>
                    <div className="AddAnswer">
                        <AddAnswerComponent/>
                    </div>
                    <div className="QuestionTracker">
                        <QuestionTracker/>
                    </div>
                    <div className="ScoreComponent">

                    </div>
                    <div className="GradeAdviceComponent">

                    </div>

                </section>
                <Footer/>
            </div>
        );
    }
}

export default QuestionsPage