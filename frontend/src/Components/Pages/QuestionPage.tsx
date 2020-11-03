import React, {Component} from 'react';
import {Row, Col, Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Pages/QuestionPage.css'
import '../../Dashboard.css'
import NavbarComponent from "../Navbar/NavbarComponent";
import FooterComponent from "../Footer";
import AnswerComponent from "../Answer/answerComponent";
import  "../Answer/Answer.css";
import AddAnswerComponent from "../AddAnswer/AddAnswerComponent";
import  "../AddAnswer/AddAnswer.css";
//import ScoreComponent from "../";
//import  "";
//import GradeAdviseComponent from "../";
//import  "";
import QuestionTrackComponent from "../QuestionsTrack/questionsTrackComponent";
import '../QuestionsTrack/QuestionsTrack.css';

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
                                    <span>Question</span>
                                </div>

                                {/* Open questions */}

                                <Row>
                                    <Col>
                                        <AnswerComponent/>
                                    </Col>
                                    <Col>
                                        Test2
                                    </Col>
                                </Row>
                                <AddAnswerComponent/>

                                {/* Closed questions */}
                            </Col>
                            <Col xs={2}>
                                blank
                            </Col>
                            <Col>
                                <QuestionTrackComponent/>
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