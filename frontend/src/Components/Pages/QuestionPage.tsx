import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Pages/CSS/QuestionPage.css'
import HeaderNavbar from "../HeaderNavbar/HeaderNavbar";
import QuestionTrackComponent from "../Question/QuestionElements/QuestionElements";
import Cookies from 'js-cookie';
import axios from "axios";
import Footer from "../Footer/Footer";
import AuthService from "../../Services/auth.service";
import {Redirect} from "react-router";

class QuestionPage extends Component {
    state = {
        isLoading: true,
        Exam: {
            items: [],
        },
        questionId: 0,
        examId: 0
    };

    async componentDidMount() {
        await this.setState({
            examId: Cookies.get("examId")
        });

        if (!this.state.examId || this.state.examId === 0 )
        window.location.replace("/examens")

        await axios.get(`/api/exams/grade/${this.state.examId}`).then(response => {
            this.setState({
                Exam: response.data,
                isLoading: false
            })
        });
    }

    renderQuestionComponents() {
        if (!this.state.isLoading) {
            return <QuestionTrackComponent Exam={this.state.Exam}/>
        }
    }

    render() {
        if(!AuthService.isLoggedIn())
            return <Redirect to='./inloggen'/>

        return (
            <div className="page-container">
                <div className="content-wrap">
                    <HeaderNavbar/>
                </div>
                <section className="content-container flex">
                    {this.renderQuestionComponents()}
                </section>
                <div className="footer">
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default QuestionPage;