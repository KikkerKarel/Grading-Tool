import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Pages/CSS/QuestionPage.css'
import HeaderNavbar from "../HeaderNavbar/HeaderNavbar";
import axios from "axios";
import Footer from "../Footer/Footer";
import AuthService from "../../Services/auth.service";
import {Redirect} from "react-router";
import QuestionElements from "../Question/QuestionElements/QuestionElements";

class QuestionPage extends Component<any> {
    state = {
        isLoading: true,
        Exam: {
            items: [],
        },
        questionId: 0,
        examId: 0
    };

    async componentDidMount() {
        document.title="Gradest | Examen beantwoorden";

        await this.setState({
            examId: this.props.match.params.examId
        });

        if (!this.state.examId || this.state.examId === 0)
            window.location.replace("/examens")

        await axios.get(`/api/exams/grade/${this.state.examId}`).then(response => {
            this.setState({
                Exam: response.data,
                isLoading: false
            })
        });
    }

    renderQuestionElements() {
        if (!this.state.isLoading) {
            return <QuestionElements Exam={this.state.Exam}/>
        }
    }

    render() {
        if (!AuthService.isLoggedIn())
            return <Redirect to='./inloggen'/>

        return (
            <div className="page-container">
                <div className="content-wrap">
                    <HeaderNavbar/>
                </div>
                <section className="content-container flex mt-5">
                    {this.renderQuestionElements()}
                </section>
                <div className="footer">
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default QuestionPage;