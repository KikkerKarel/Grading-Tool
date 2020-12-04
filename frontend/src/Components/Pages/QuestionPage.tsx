import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Pages/CSS/QuestionPage.css'
import '../../Dashboard.css'
import NavbarComponent from "../Navbar/NavbarComponent";
import FooterComponent from "../Footer";
import QuestionTrackComponent from "../Question/QuestionsTrack/QuestionsTrackerComponent";
import Cookies from 'js-cookie';
import axios from "axios";

class QuestionPage extends Component {
    state = {
        isLoading: true,
        Exam: {},
        questionId: 0,
        examId: 0,
    };

    async componentDidMount() {
        await this.setState({
            examId: Cookies.get("examId")
        });

        await axios.get(`/api/exams/grade/${this.state.examId}`).then(response => {
            this.setState({
                Exam: response.data,
                isLoading: false
            })
        });
    }

    renderQuestionTrackComponent() {
        if (!this.state.isLoading) {
            return <QuestionTrackComponent Exam={this.state.Exam}/>
        }
    }

    render() {
        return (
            <div className="page-container">
                <div className="content-wrap">
                    <NavbarComponent/>
                </div>
                <section className="content-container flex">
                        {this.renderQuestionTrackComponent()}
                </section>
                <FooterComponent/>
            </div>
        );
    }
}

export default QuestionPage;