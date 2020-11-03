import React, {Component} from 'react';
import {Row, Col, Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Dashboard.css'
import './CSS/QuestionPage.css'
import NavbarComponent from "../Navbar/NavbarComponent";
import FooterComponent from "../Footer";
import AddAnswerComponent from "../Question/AddAnswer/AddAnswerComponent";
import AnswerComponent from "../Question/Answer/AnswerComponent";
import GradeAdviseComponent from "../Question/GradeAdvice/GradeAdviceComponent";
import QuestionComponent from "../Question/Question/QuestionComponent";
import QuestionsTrackComponent from "../Question/QuestionsTrack/QuestionsTrackerComponent";
import ScoreComponent from "../Question/Score/ScoreComponent";

class QuestionPage extends Component {
    state = {

    };

    async componentDidMount() {

    }

    render() {
        return (
            <div className="page-container">
                <div className="content-wrap">
                    <NavbarComponent/>
                </div>
                <section className="content-container fixed">
                    <Container>
                        <Row>
                            <Col>
                                <div>
                                    Question header
                                </div>
                                <div>
                                    <QuestionComponent/>
                                </div>

                                {/* Open questions */}

                                <Row>
                                    <Col>
                                        <AnswerComponent/>
                                    </Col>
                                    <Col>
                                        <ScoreComponent/>
                                        <GradeAdviseComponent/>
                                    </Col>
                                </Row>
                                <AddAnswerComponent/>

                                {/* Closed questions */}
                            </Col>
                            <Col xs={1}>

                            </Col>
                            <Col xs={4}>
                                <QuestionsTrackComponent/>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <FooterComponent/>
            </div>
        );
    }
}

export default QuestionPage;