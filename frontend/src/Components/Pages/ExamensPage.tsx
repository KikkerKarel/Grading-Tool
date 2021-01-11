import * as React from "react";
import {Component} from "react";
import '../HeaderNavbar/HeaderNavbar.css';
import HeaderNavbar from "../HeaderNavbar/HeaderNavbar";
import Footer from "../Footer/Footer";
import axios from 'axios';
import ExamTable from "../ExamTable/ExamTable";
import AuthService from "../../Services/auth.service";
import {Redirect} from "react-router";

interface props {
}

class ExamensPage extends Component<props, {}> {
    state = {
        isLoading: true,
        Exams: []
    };

    async componentDidMount() {
        document.title="Gradest | Examens";
        axios.get(`/api/exams/me`).then(response => this.setState({Exams: response.data, isLoading: false}));
    }

    render() {
        const {Exams, isLoading} = this.state;

        if (!AuthService.isLoggedIn())
            return <Redirect to='./inloggen'/>

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <div className="page-container">
                <div className="content-wrap">
                    <HeaderNavbar/>
                </div>
                <div className="content-container">
                    <h1 className="text-center mt-3">Klik hieronder op het examen dat u wilt beoordelen:</h1>
                    <ExamTable data={Exams}/>
                </div>
                <div className="footer">
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default ExamensPage